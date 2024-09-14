<div align="left">
  Language:
  <a title="中文" href="README.zh-CN.md">中文</a>
  <a title="English" href="README.md">English</a>
</div>

# AES-GCM Encryption Example

This example demonstrates how to use the AES-GCM encryption algorithm to encrypt and decrypt data. AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data.

## What is AES-GCM?

AES-GCM (Galois/Counter Mode) is a mode of operation for the AES algorithm that provides both confidentiality and data integrity. It combines the counter mode of encryption with Galois field multiplication for authentication, making it an authenticated encryption algorithm.

### How AES-GCM Works

1. **Initialization Vector (IV)**: AES-GCM uses a unique IV for each encryption operation. The IV ensures that the same plaintext encrypted multiple times with the same key will produce different ciphertexts.
2. **Encryption Process**:
   - The plaintext is encrypted using AES in counter mode, producing the ciphertext.
   - Simultaneously, a Galois field multiplication is performed to generate an authentication tag.
3. **Authentication Tag**: The authentication tag ensures the integrity and authenticity of the data. It is generated during encryption and verified during decryption.
4. **Decryption Process**:
   - The ciphertext is decrypted using the same AES key and IV.
   - The authentication tag is verified to ensure that the data has not been tampered with.

## How It Works

1. Generate a 256-bit AES key.
2. Use a randomly generated initialization vector (IV) to encrypt the data.
3. The encryption process generates both ciphertext and an authentication tag.
4. Return the encrypted data along with the IV and authentication tag.
5. Use the same key and IV to decrypt the data and verify the authentication tag to ensure integrity.

## Sample Preview

![AES-GCM Example Preview](../../assets/images/aes-gcm-preview.avif)

## Use Cases

This technique is particularly useful in the following scenarios:

- **Secure Communication**: Ensuring the confidentiality and integrity of data transmitted over networks.
- **Data Storage**: Protecting sensitive data stored in databases or files.
- **Authentication Systems**: Verifying the authenticity of messages and preventing tampering.
- **Real-time Applications**: Providing fast and secure encryption for applications requiring real-time data processing.

## Notices

- **IV Uniqueness**: Always use a unique IV for each encryption operation to prevent security vulnerabilities.
- **Key Management**: Securely generate, store, and manage encryption keys to maintain data security.
- **Authentication Tag Length**: Ensure that the authentication tag length meets the security requirements of your application.
- **Error Handling**: Properly handle authentication failures to prevent unauthorized data access.
- **Performance Considerations**: AES-GCM is optimized for high performance, but ensure that it meets the performance requirements of your specific use case.

By implementing AES-GCM encryption at the edge, you can effectively secure data against unauthorized access and tampering during transmission, ensuring both confidentiality and integrity.