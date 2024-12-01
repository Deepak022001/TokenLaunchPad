import { useWallet } from '@solana/wallet-adapter-react';
import { ed25519 } from '@noble/curves/ed25519';

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    try {
      if (!publicKey) throw new Error('Wallet not connected');
      if (!signMessage)
        throw new Error('Wallet does not support message signing');

      const message = document.getElementById('message').value;
      const encodedMessage = new TextEncoder().encode(message);

      const signature = await signMessage(encodedMessage);

      const isValid = ed25519.verify(
        signature,
        encodedMessage,
        publicKey.toBytes()
      );

      if (!isValid) throw new Error('Message signature invalid');

      alert('Message successfully signed and verified!');
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      <div>
        <input
          type='text'
          id='message'
          placeholder='Message'
        />
        <button onClick={onClick}>Sign Message</button>
      </div>
    </div>
  );
};

export default SignMessage;
