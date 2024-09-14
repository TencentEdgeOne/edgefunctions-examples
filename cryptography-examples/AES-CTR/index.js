// AES-CTR
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
      encrypted: btoa(
        String.fromCharCode.apply(
          null,
          new Uint8Array(encryptedData.encryptedData)
        )
      ),
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
    { name: 'AES-CTR', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Encrypt the data
async function encryptData(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const iv = crypto.getRandomValues(new Uint8Array(16)); // Generate a random IV
  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-CTR', counter: iv, length: 64 }, // Use AES-CTR with a counter
    key,
    encodedData
  );

  return {
    iv: Array.from(iv),
    encryptedData: encryptedData,
  };
}

// Decrypt the data
async function decryptData(encryptedObj, key) {
  const iv = new Uint8Array(encryptedObj.iv);
  const decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-CTR', counter: iv, length: 64 }, // Use AES-CTR with a counter
    key,
    encryptedObj.encryptedData
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedData);
}
