import { useState, useEffect } from 'react';
import { useWeb3Provider } from '../web3Data/hooks/useWeb3Provider';
import { Dwin, Dwin__factory } from '../../assets/typechain-types/typechain-types/typechain-types';
import { useAddresses } from '../../hooks/useAddresses';

const useDWinContract = () => {
  const [DWinContract, setDWinContractContract] = useState<Dwin>();
  const {
    state: { signerOrProvider, chainId },
  } = useWeb3Provider();

  const { dwin } = useAddresses(chainId);

  useEffect(() => {
    if (!dwin || !signerOrProvider) {
      setDWinContractContract(undefined);
      return;
    }

    setDWinContractContract(Dwin__factory.connect(dwin.address, signerOrProvider));
  }, [dwin, signerOrProvider]);

  return DWinContract;
};

export default useDWinContract;
