import { useGovenorModule } from './../providers/govenor/hooks/useGovenorModule';
import { useCallback, useEffect } from 'react';
import { useTransaction } from '../contexts/web3Data/transactions';
import { BigNumberish, ethers } from 'ethers';
import { useWeb3Provider } from '../contexts/web3Data/hooks/useWeb3Provider';
import { ProposalData } from '../providers/govenor/types';
import { useBlockchainData } from '../contexts/blockchainData';

const useBetTransaction = ({
  bet,
  value,
}: {
  bet: BigNumberish | undefined;
  value: BigNumberish | undefined;
}) => {
  const {
    state: { signerOrProvider },
  } = useWeb3Provider();
  const { dwinContract } = useBlockchainData();

  const [contractCallBetTransaction] = useTransaction();

  let queueTransaction = useCallback(() => {
    if (!signerOrProvider || !bet || !dwinContract || !value) {
      return;
    }
    console.log('hfrei');

    contractCallBetTransaction({
      contractFn: () => dwinContract.makeBet(2, bet, { value: ethers.utils.parseEther('.001') }),
      pendingMessage: 'Placing Bet Transaction...',
      failedMessage: 'Bet Failed',
      successMessage: 'Betting Completed',
    });
  }, [bet, contractCallBetTransaction, dwinContract, signerOrProvider, value]);
  return queueTransaction;
};

export default useBetTransaction;
