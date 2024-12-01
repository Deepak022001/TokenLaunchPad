import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  function requestAirdrop() {
    const publicKey = wallet.publicKey;
    const amount = document.getElementById('Amount').value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  }
  return (
    <div>
      <input
        id='Amount'
        type='text'
        placeholder='Amount...'
      />
      <button onClick={requestAirdrop}>Request Airdrop</button>
      {/* {wallet.publicKey?.toBase58()} */}
    </div>
  );
};

export default RequestAirdrop;
