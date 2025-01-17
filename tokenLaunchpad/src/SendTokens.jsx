import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

const SendTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  async function sendTokens() {
    let to = document.getElementById('to').value;
    let amount = document.getElementById('amount').value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    alert('Sent ' + amount + 'Sol to' + to);
  }
  return (
    <div>
      <input
        id='to'
        type='text'
        placeholder='To'
      />
      <input
        type='text'
        id='amount'
        placeholder='Amount'
      />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
};

export default SendTokens;
// NGUtfPeXA1N3BvUb7uB1d5WK2z2FQKBNWCtHVqtm2jA
// 25
