<div align="left">
  Language:
  <a title="中文" href="README.zh-CN.md">中文</a>
  <a title="English" href="README.md">English</a>
</div>

# AES-CBC Encryption Example

This example demonstrates how to use the AES-CBC encryption algorithm to encrypt and decrypt data. AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data.

## What is AES-CBC?

CBC (Cipher Block Chaining) is a mode of AES that enhances security by XORing each plaintext block with the previous ciphertext block. The AES-CBC mode uses an initialization vector (IV) to ensure that the same plaintext produces different ciphertexts in different encryption processes.

### Use Cases

AES-CBC mode is suitable for the following scenarios:

- Suitable for scenarios that require sequential processing of data blocks.
- Protecting sensitive data in transit, such as user information and payment details.
- Implementing secure API communication to ensure confidentiality and integrity of data.
- Storing encrypted data to prevent unauthorized access.

### Considerations

- Each block depends on the previous block, which can lead to performance bottlenecks as encryption and decryption cannot be parallelized.
- The security of the IV is crucial; reusing the IV can lead to security vulnerabilities.

## Sample Preview

![AES-CBC Example Preview](../../assets/images/aes-cbc-preview.avif)

## Considerations

- Ensure the security of the key to prevent leakage.
- Use a strong random number generator to generate the IV.
- Regularly update the key to enhance security.

By implementing AES-CBC encryption at the edge, you can effectively secure data and prevent it from being tampered with or stolen during transmission.