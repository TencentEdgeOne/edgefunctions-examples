async function signMessage(message, privateKey) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return await crypto.subtle.sign(
    {
      name: 'RSA-PSS',
      saltLength: 32,
    },
    privateKey,
    data
  );
}

async function verifyMessage(message, signature, publicKey) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return await crypto.subtle.verify(
    {
      name: 'RSA-PSS',
      saltLength: 32,
    },
    publicKey,
    signature,
    data
  );
}

async function generateKeyPair() {
  return await crypto.subtle.generateKey(
    {
      name: 'RSA-PSS',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  );
}

async function handleRequest() {
  const text =
    'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';

  const keyPair = await generateKeyPair();
  const signed = await signMessage(text, keyPair.privateKey);
  const result = await verifyMessage(text, signed, keyPair.publicKey);

  return new Response(JSON.stringify({ result }));
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest());
});
