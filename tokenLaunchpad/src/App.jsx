// wallet adapter imports
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import ShowBalance from './ShowBalance';
import SendTokens from './SendTokens';
const App = () => {
  return (
    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      <WalletProvider
        autoConnect
        wallets={[]}
      >
        <WalletModalProvider>
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
            <RequestAirdrop />
            <ShowBalance />
            <SendTokens />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
