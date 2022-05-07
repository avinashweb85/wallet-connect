import './App.css';
import React,{useState} from 'react';


function App() {
 
  const [address, setAddress] = useState("");
  const[caddress, setCaddress] = useState("");

  const unlockWallet = async () => {
    let walletProvider = await window.ethereum.providers.find((x) => x.isMetaMask);
    walletProvider.request({ method: 'eth_requestAccounts' });

    setAddress(walletProvider.selectedAddress);
  }

  const unlock = async () => {
    let walletProvider1 = await window.ethereum.providers.find((x) => x.isCoinbaseWallet);
    walletProvider1.request({ method: 'eth_requestAccounts' });
    setCaddress(walletProvider1._addresses);
    
  }

  return (
    <div className="App">
      <h1>Address: {address}</h1>
      <button onClick={unlockWallet}>Connect Metamask Wallet</button>
      <h1>Address: {caddress}</h1>
      <button onClick={unlock}>Connect Coinbase Wallet</button>
      
    </div>
  );
}

export default App;
