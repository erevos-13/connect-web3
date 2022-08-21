import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { CHAINS } from "../utils/chains";

const useConnectWeb3 = () => {
  const [network, setNetwork] = useState(null);
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();
  const { ethereum } = window;

  const getNetWork = () => {};

  const connectWithWallet = async () => {
    try {
      activate(injectedConnector);
      getNetWork();
    } catch (error) {
      console.log({ error });
    }
  };

  const checkIsWalletConnected = () => {
    if (!ethereum) {
      console.log("you have not metamask");
      return;
    }
    console.log("metamask is install");
  };
  useEffect(() => {
    if (active) {
      console.log(account);
    }
    if (chainId) {
      getNetWork();
      const network = CHAINS[chainId as number];
      setNetwork(network?.name);
    }
  }, [account, active, chainId]);

  return { checkIsWalletConnected, connectWithWallet, network, account };
};

export { useConnectWeb3 };
