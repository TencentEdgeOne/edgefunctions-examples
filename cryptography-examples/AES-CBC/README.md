<div align="left">
  Language:
  <a title="中文" href="README.zh-CN.md">中文</a>
  <a title="English" href="README.md">English</a>
</div>

# AES-CBC Encryption Example

This example demonstrates how to use the AES-CBC encryption algorithm to encrypt and decrypt data. AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data.

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