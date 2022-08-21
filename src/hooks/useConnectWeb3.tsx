import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { Injected } from "../utils";
import { CHAINS } from "../utils/chains";

const useConnectWeb3 = () => {
  const [network, setNetwork] = useState(null);

  const { chainId, account, activate, active } =
    useWeb3React<Web3Provider>();
  const { ethereum } = window;

  const getNetWork = () => {};

  const connectWithWallet = async () => {
    try {
      activate(Injected);
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
