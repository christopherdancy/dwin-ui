import { GovernorModule } from './../../../assets/typechain-types/module-governor/contracts/Governor/GovernorModule';
import { useCallback } from 'react';
import { useTransaction } from '../../../contexts/web3Data/transactions';
import { useWeb3Provider } from '../../../contexts/web3Data/hooks/useWeb3Provider';
import { MarketExecuteData } from '../../../types/proposal';

const useCreateProposal = (governorModuleContract: GovernorModule | undefined) => {
  const {
    state: { signerOrProvider },
  } = useWeb3Provider();

  const [contractCallCreateProposal, contractCallPending] = useTransaction();

  const createProposal = useCallback(
    ({
      proposalData,
      successCallback,
    }: {
      proposalData: MarketExecuteData | undefined;
      successCallback: () => void;
    }) => {
      if (!signerOrProvider || !proposalData || !governorModuleContract) {
        return;
      }

      contractCallCreateProposal({
        contractFn: () =>
          governorModuleContract.propose(
            proposalData.targets,
            proposalData.values,
            proposalData.calldatas,
            proposalData.description
          ),
        pendingMessage: 'Creating Proposal...',
        failedMessage: 'Proposal Creation Failed',
        successMessage: 'Proposal Created',
        successCallback,
      });
    },
    [contractCallCreateProposal, governorModuleContract, signerOrProvider]
  );

  return [createProposal, contractCallPending] as const;
};

export default useCreateProposal;
