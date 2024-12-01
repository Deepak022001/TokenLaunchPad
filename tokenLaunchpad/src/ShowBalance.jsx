import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

const ShowBalance = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  async function getMeUserbalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById('balance').innerHTML = balance / 1e9;
    }
  }
  useEffect(() => {
    if (wallet.publicKey) {
      getMeUserbalance();
    }
  }, [wallet.publicKey]);
  return (
    <div>
      Balance: <span id='balance'></span>SOL
    </div>
  );
};

export default ShowBalance;
