// AES-CBC
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

  // Generate a random 256-bit AES key
  const key = await generateKey();
  // Encrypt the data using the generated key
  const encryptedData = await encryptData(JSON.stringify(data), key);
  // Decrypt the data using the same key
  const decryptedData = await decryptData(encryptedData, key);
  // Export the key
  const exportedKey = await exportKey(key);
  // Import the key
  const importedKey = await importKey(exportedKey);
  // Wrap the key
  const wrappedKey = await wrapKey(key, key); // Using the same key as wrapping key for demonstration
  // Unwrap the key
  const unwrappedKey = await unwrapKey(wrappedKey, key);
  // Digest the data
  const digest = await digestData(data);
  // Generate key pair
  const keyPair = await generateKeyPair();
  // Sign the data
  const signature = await signData(data, keyPair.privateKey);
  // Verify the signature
  const isVerified = await verifySignature(data, signature, keyPair.publicKey);
  // Derive key
  const derivedKey = await deriveKey(key, 'salt', ['encrypt', 'decrypt']);
  // Derive bits
  const derivedBits = await deriveBits(key, 'salt', 256);

  return new Response(
    JSON.stringify({
      original: data,
      encrypted: btoa(String.fromCharCode.apply(null, new Uint8Array(encryptedData.encryptedData))),
      decrypted: JSON.parse(decryptedData),
      exportedKey: btoa(String.fromCharCode.apply(null, new Uint8Array(exportedKey))),
      importedKey: importedKey ? 'Successfully imported' : 'Import failed',
      wrappedKey: btoa(String.fromCharCode.apply(null, new Uint8Array(wrappedKey))),
      unwrappedKey: unwrappedKey ? 'Successfully unwrapped' : 'Unwrap failed',
      digest: digest,
      keyPair: {
        publicKey: 'Generated',
        privateKey: 'Generated'
      },
      signature: btoa(String.fromCharCode.apply(null, new Uint8Array(signature))),
      isVerified: isVerified,
      derivedKey: derivedKey ? 'Successfully derived' : 'Derivation failed',
      derivedBits: btoa(String.fromCharCode.apply(null, derivedBits))
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// Generate a random 256-bit AES key
async function generateKey() {
  // name: algorithm name is not case sensitive, length: must be 128, 192, or 256
  return await crypto.subtle.generateKey(
    { name: 'AES-CBC', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Encrypt data
async function encryptData(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const iv = crypto.getRandomValues(new Uint8Array(16));

  // name: algorithm name is not case sensitive, iv: must be 16 bytes
  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-CBC', iv },
    key,
    encodedData
  );

  return {
    iv: Array.from(iv),
    encryptedData: encryptedData,
  };
}

// Decrypt data
async function decryptData(encryptedObj, key) {
  const iv = new Uint8Array(encryptedObj.iv);

  // name: algorithm name is not case sensitive, iv: must be 16 bytes
  const decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-CBC', iv },
    key,
    encryptedObj.encryptedData
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedData);
}

// Export key
async function exportKey(key) {
  // raw: only supports symmetric and EC public keys, such as AES-CBC here
  // jwk: not supported yet
  return await crypto.subtle.exportKey('raw', key);
}

// Import key
async function importKey(keyData) {
  // format: raw: only supports symmetric and EC public keys, such as AES-CBC here
  // format: jwk: not supported yet
  // algorithm: algorithm name is not case sensitive
  return await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'AES-CBC' },
    true,
    ['encrypt', 'decrypt']
  );
}

// Wrap key
async function wrapKey(key, wrappingKey) {
  // format: raw: only supports symmetric and EC public keys, such as AES-CBC here
  // format: jwk: not supported yet
  // wrapAlgo: algorithm name is not case sensitive, iv: must be 16 bytes
  return await crypto.subtle.wrapKey('raw', key, wrappingKey, {
    name: 'AES-CBC',
    iv: crypto.getRandomValues(new Uint8Array(16)),
  });
}

// Unwrap key
async function unwrapKey(wrappedKey, unwrappingKey) {
  const iv = crypto.getRandomValues(new Uint8Array(16));

  // format: raw: only supports symmetric and EC public keys, such as AES-CBC here
  // format: jwk: not supported yet
  // unwrapAlgo: algorithm name is not case sensitive, iv: must be 16 bytes
  return await crypto.subtle.unwrapKey(
    'raw',
    wrappedKey,
    unwrappingKey,
    { name: 'AES-CBC', iv: iv },
    { name: 'AES-CBC' },
    true,
    ['encrypt', 'decrypt']
  );
}

// Digest data
async function digestData(data, algorithm = 'SHA-256') {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  // algorithm: algorithm must be one of the following: SHA-1, SHA-256, SHA-384, SHA-512
  // data: data length must be less than 200MB
  const hashBuffer = await crypto.subtle.digest(algorithm, encodedData);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Generate key pair for signing and verifying, here we use RSASSA-PKCS1-v1_5
async function generateKeyPair() {
  return await crypto.subtle.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  );
}

// Sign data
async function signData(data, privateKey) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  // RSASSA-PKCS1-v1_5: algorithm name is not case sensitive
  // data: data length must be less than 200MB
  return await crypto.subtle.sign(
    { name: 'RSASSA-PKCS1-v1_5' },
    privateKey,
    encodedData
  );
}

// Verify signature
async function verifySignature(data, signature, publicKey) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  // RSASSA-PKCS1-v1_5: algorithm name is not case sensitive
  // signature: signature length must be less than 512
  // data: data length must be less than 200MB
  return await crypto.subtle.verify(
    { name: 'RSASSA-PKCS1-v1_5' },
    publicKey,
    signature,
    encodedData
  );
}

// Derive key, here we use PBKDF2
async function deriveKey(rawKey, salt, keyUsages = ['encrypt', 'decrypt']) {
  const encoder = new TextEncoder();
  const saltBuffer = encoder.encode(salt);

  // export key
  const exportedKey = await crypto.subtle.exportKey('raw', rawKey);

  // Create a PBKDF2 key using the exported key material
  const pbkdf2Key = await crypto.subtle.importKey(
    'raw',
    exportedKey,
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedKey = await crypto.subtle.deriveKey(
    {
      // for PBKDF2:
      // name: algorithm name is not case sensitive
      // salt: recommended 16 bytes, less than 64 bytes
      // iterations: at least 1000, recommended 10000, less than 100000
      // hash: algorithm name is not case sensitive
      name: 'PBKDF2',
      salt: saltBuffer,
      iterations: 10000,
      hash: 'SHA-256',
    },
    // key length cannot exceed the derived maximum bytes and meet the constraints of generateKey
    pbkdf2Key,
    { name: 'AES-CBC', length: 256 },
    false,
    keyUsages
  );

  return derivedKey;
}

// Derive bits, here we use PBKDF2
async function deriveBits(rawKey, salt, length = 256) {
  const encoder = new TextEncoder();
  const saltBuffer = encoder.encode(salt);
  // export key
  const exportedKey = await crypto.subtle.exportKey('raw', rawKey);

  // Create a PBKDF2 key using the exported key material
  const pbkdf2Key = await crypto.subtle.importKey(
    'raw',
    exportedKey,
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltBuffer,
      iterations: 10000,
      hash: 'SHA-256',
    },
    pbkdf2Key,
    length
  );
  
  return new Uint8Array(derivedBits);
}