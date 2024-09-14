// AES-GCM
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const data = {
    SceneCode: 'e_turingfraud',
    PostTime: 99999999,
    AccountType: '2',
    UserIp: '12.12.12.12',
    UserPhone: '1234567',
    Mode: '2',
    PlatformName: 'web',
    OSName: 'H5',
    DeviceToken: 'xxxxxxxx',
  };

  const key = await generateKey();
  const encryptedData = await encryptData(JSON.stringify(data), key);
  const decryptedData = await decryptData(encryptedData, key);

  return new Response(
    JSON.stringify({
      original: data,
      encrypted: {
        ciphertext: btoa(
          String.fromCharCode.apply(
            null,
            new Uint8Array(encryptedData.ciphertext)
          )
        ),
        tag: btoa(
          String.fromCharCode.apply(null, new Uint8Array(encryptedData.tag))
        ),
        iv: btoa(
          String.fromCharCode.apply(null, new Uint8Array(encryptedData.iv))
        ),
      },
      decrypted: JSON.parse(decryptedData),
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// 生成一个随机的 256 位 AES 密钥
async function generateKey() {
  return await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// 加密数据
async function encryptData(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const iv = crypto.getRandomValues(new Uint8Array(12)); // 生成随机 IV
  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv, tagLength: 128 }, // 使用 AES-GCM 并指定标签长度
    key,
    encodedData
  );

  const encryptedBytes = new Uint8Array(encryptedBuffer);
  const ciphertext = encryptedBytes.slice(0, encryptedBytes.length - 16); // 除去最后 16 字节的认证标签
  const tag = encryptedBytes.slice(encryptedBytes.length - 16); // 认证标签

  return {
    iv: Array.from(iv),
    ciphertext: Array.from(ciphertext),
    tag: Array.from(tag),
  };
}

// 解密数据
async function decryptData(encryptedObj, key) {
  const iv = new Uint8Array(encryptedObj.iv);
  const ciphertext = new Uint8Array(encryptedObj.ciphertext);
  const tag = new Uint8Array(encryptedObj.tag);

  // 将密文和标签组合在一起
  const encryptedData = new Uint8Array(ciphertext.length + tag.length);
  encryptedData.set(ciphertext, 0);
  encryptedData.set(tag, ciphertext.length);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encryptedData // 包含密文和认证标签
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch (error) {
    // 如果认证失败，会抛出错误
    return '认证失败，数据可能已被篡改。';
  }
}
