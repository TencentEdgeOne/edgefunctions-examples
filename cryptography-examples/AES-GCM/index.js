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

// Generate a random 256-bit AES key
async function generateKey() {
  return await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Encrypt data
async function encryptData(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const iv = crypto.getRandomValues(new Uint8Array(12)); // Generate a random IV
  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv, tagLength: 128 }, // Use AES-GCM and specify tag length
    key,
    encodedData
  );

  const encryptedBytes = new Uint8Array(encryptedBuffer);
  const ciphertext = encryptedBytes.slice(0, encryptedBytes.length - 16); // Exclude the last 16 bytes of the authentication tag
  const tag = encryptedBytes.slice(encryptedBytes.length - 16); // Authentication tag

  return {
    iv: Array.from(iv),
    ciphertext: Array.from(ciphertext),
    tag: Array.from(tag),
  };
}

// Decrypt data
async function decryptData(encryptedObj, key) {
  const iv = new Uint8Array(encryptedObj.iv);
  const ciphertext = new Uint8Array(encryptedObj.ciphertext);
  const tag = new Uint8Array(encryptedObj.tag);

  // Combine ciphertext and tag
  const encryptedData = new Uint8Array(ciphertext.length + tag.length);
  encryptedData.set(ciphertext, 0);
  encryptedData.set(tag, ciphertext.length);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encryptedData // Includes ciphertext and authentication tag
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch (error) {
    // If authentication fails, an error is thrown
    return 'Authentication failed. The data may have been tampered with.';
  }
}
