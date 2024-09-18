<div align="left">
  Language:
  <a title="English" href="README.md">English</a>
  <a title="中文" href="README.zh-CN.md">中文</a>
</div>

# RSA-OAEP Encryption Example

This example demonstrates how to use the RSA-OAEP encryption algorithm to encrypt and decrypt data. RSA (Rivest–Shamir–Adleman) is an asymmetric encryption algorithm widely used for secure data transmission.

## What is RSA-OAEP?

RSA-OAEP (Optimal Asymmetric Encryption Padding) is a padding scheme for RSA encryption. It enhances the security of RSA by adding a random element to the encryption process, making it resistant to various attacks.

### How RSA-OAEP Works

1. **Key Generation**: Generate a pair of public and private keys.
2. **Encryption Process**:
   - Apply OAEP padding to the plaintext.
   - Encrypt the padded message using the recipient's public key.
3. **Decryption Process**: 
   - Decrypt the ciphertext using the recipient's private key.
   - Remove the OAEP padding to recover the original message.

## How It Works

1. Generate an RSA key pair (public and private keys).
2. Use the public key to encrypt the data.
3. Use the private key to decrypt the encrypted data.
4. Verify the correctness of encryption and decryption.

## Example Preview

![RSA-OAEP Example Preview](../../assets/images/rsa-oaep-preview.avif)

## Use Cases

This technique is particularly useful in the following scenarios:

- Secure exchange of symmetric encryption keys.
- Protecting sensitive data transmission, such as passwords or financial information.
- Implementing secure communication channels in client-server applications.
- Digital signatures and certificate-based authentication systems.

## Considerations

- Ensure the security of the private key; never share it.
- Use appropriate key lengths (e.g., 2048 bits or more) for adequate security.
- RSA-OAEP is computationally intensive, so it's typically used for small amounts of data or key exchange.
- Consider using hybrid encryption (RSA for key exchange, symmetric encryption for data) for large data sets.

By implementing RSA-OAEP encryption at the edge, you can effectively protect sensitive data, ensure secure key exchange, and enhance the overall security of your application.