// RSA-OAEP
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

  // Generate RSA-OAEP key pair
  const keyPair = await generateKeyPair();

  // Encrypt data
  const encryptedData = await encryptData(
    JSON.stringify(data),
    keyPair.publicKey
  );

  // Decrypt data
  const decryptedData = await decryptData(encryptedData, keyPair.privateKey);

  return new Response(
    JSON.stringify({
      original: data,
      encrypted: btoa(
        String.fromCharCode.apply(null, new Uint8Array(encryptedData))
      ),
      decrypted: JSON.parse(decryptedData),
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// Generate RSA-OAEP key pair
async function generateKeyPair() {
  return await crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048, // Key length can be adjusted as needed
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['encrypt', 'decrypt']
  );
}

// Encrypt data
async function encryptData(data, publicKey) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
    },
    publicKey,
    encodedData
  );

  return encryptedBuffer;
}

// Decrypt data
async function decryptData(encryptedData, privateKey) {
  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: 'RSA-OAEP',
      },
      privateKey,
      encryptedData
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch (error) {
    // If decryption fails, an error is thrown
    return 'Decryption failed. The data may have been tampered with or the key is incorrect.';
  }
}
