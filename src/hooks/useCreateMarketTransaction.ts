import { useCallback, useEffect } from 'react';
import { useTransaction } from '../contexts/web3Data/transactions';
import { useWeb3Provider } from '../contexts/web3Data/hooks/useWeb3Provider';
import { useBlockchainData } from '../contexts/blockchainData';
import { useNavigate } from 'react-router-dom';
const useCreateMarketTransaction = ({
  proposalDescription,
}: {
  proposalDescription: string | undefined;
}) => {
  const {
    state: { signerOrProvider },
  } = useWeb3Provider();

  const navigate = useNavigate();
  const { dwinContract } = useBlockchainData();

  const [contractCall] = useTransaction();

  let createMarket = useCallback(() => {
    if (!dwinContract || !proposalDescription || !signerOrProvider) {
      return;
    }

    contractCall({
      contractFn: () => dwinContract.openMarket(proposalDescription),
      pendingMessage: 'Creating Project...',
      failedMessage: 'Project Creation Failed',
      successMessage: 'Project Creation Succeeded',
      successCallback: () => navigate('/bets'),
    });
  }, [dwinContract, proposalDescription, signerOrProvider, contractCall, navigate]);

  return createMarket;
};

export default useCreateMarketTransaction;
