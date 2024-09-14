<div align="left">
  Language:
  <a title="中文" href="README.zh-CN.md">中文</a>
  <a title="English" href="README.md">English</a>
</div>

# AES-CBC Encryption Example

This example demonstrates how to use the AES-CBC encryption algorithm to encrypt and decrypt data. AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data.

## What is AES-CBC?

AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data. CBC (Cipher Block Chaining) is a mode of AES that enhances security by XORing each plaintext block with the previous ciphertext block. The AES-CBC mode uses an initialization vector (IV) to ensure that the same plaintext produces different ciphertexts in different encryption processes.

### How CBC Works

1. **Initialization Vector (IV)**: The CBC mode requires a randomly generated IV. The IV ensures that the same plaintext produces different ciphertexts in different encryption processes.
2. **Encryption Process**:
   - The first plaintext block is XORed with the IV to produce an intermediate value.
   - This intermediate value is then encrypted to produce the first ciphertext block.
   - Subsequent plaintext blocks are XORed with the previous ciphertext block before encryption, producing the corresponding ciphertext blocks.
3. **Decryption Process**: During decryption, the same key and IV are used to decrypt each block, and the previous ciphertext block is XORed to recover the plaintext.

## How It Works

1. Generate a 256-bit AES key.
2. Encrypt the data using a randomly generated initialization vector (IV).
3. Return the encrypted data along with the IV.
4. Decrypt the data using the same key and IV to verify the correctness of encryption and decryption.

## Sample Preview

![AES-CBC Example Preview](../../assets/images/aes-cbc-preview.avif)

## Use Cases

This technique is particularly useful in the following scenarios:

- Protecting sensitive data in transit, such as user information and payment details.
- Implementing secure API communication.
- Storing encrypted data to prevent unauthorized access.

## Considerations

- Ensure the security of the key to prevent leakage.
- Use a strong random number generator to generate the IV.
- Regularly update the key to enhance security.

By implementing AES-CBC encryption at the edge, you can effectively secure data and prevent it from being tampered with or stolen during transmission.