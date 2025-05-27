import React, { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected wallet connection");
      }
    } else {
      alert("Por favor instala MetaMask o wallet compatible");
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Pionlink for Pi - Demo Wallet Connect</h1>
      {account ? (
        <p>Wallet conectada: {account}</p>
      ) : (
        <button onClick={connectWallet}>Conectar Wallet</button>
      )}
    </div>
  );
}

export default App;
