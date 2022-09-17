import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useConnectWeb3 } from "./hooks/useConnectWeb3";
import Web3 from "web3";
function App() {
  const { checkIsWalletConnected, connectWithWallet, network, account } = useConnectWeb3();

  useEffect(() => {
    checkIsWalletConnected();
  }, []);

  return (
    <div className="flex  justify-center">
      <div className="flex flex-col justify-start">
        <div className="rounded-full hover:rounded-lg border-green-500 bg-slate-600 w-40 flex justify-center items-center">
          <button style={{ color: "white" }} onClick={connectWithWallet}>
            Connect
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <p>
            Network: <span>{network}</span>
          </p>
          <p>
            Account: <span>{account}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
