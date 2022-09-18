import { useEffect, useMemo, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import Essentials from '../../components/ProposalCreate/Essentials';
import { PrimaryButton } from '../../components/ui/forms/Button';
import H1 from '../../components/ui/H1';
import { TransactionData } from '../../types/transaction';
import { MarketExecuteData } from '../../types/proposal';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddresses } from '../../hooks/useAddresses';
import { useWeb3Provider } from '../../contexts/web3Data/hooks/useWeb3Provider';
import useCreateMarket from '../../hooks/useCreateMarketTransaction';
import useCreateMarketTransaction from '../../hooks/useCreateMarketTransaction';

const defaultTransaction = {
  targetAddress: '',
  functionName: '',
  functionSignature: '',
  parameters: '',
};

interface IMarketCreate {
  submitMarket: (market: {
    marketData: MarketExecuteData | undefined;
    successCallback: () => void;
  }) => void;
}

function MarketCreate() {
  const [proposalDescription, setProposalDescription] = useState<string>('');
  const [transactions, setTransactions] = useState<TransactionData[]>([defaultTransaction]);
  const [marketData, setMarketData] = useState<MarketExecuteData>();
  const navigate = useNavigate();
  const params = useParams();
  const createMarketTransaction = useCreateMarketTransaction({
    proposalDescription: proposalDescription,
  });

  const successCallback = () => {
    setProposalDescription('');
    setTransactions([]);
    setMarketData(undefined);

    navigate('/bets');
  };

  // useEffect(() => {
  //   try {
  //     let hasError: boolean = false;
  //     transactions.forEach((transaction: TransactionData) => {
  //       if (transaction.addressError || transaction.fragmentError) {
  //         hasError = true;
  //       }
  //     });
  //     if (hasError) {
  //       return;
  //     }
  //     const proposal = {
  //       targets: transactions.map(transaction => transaction.targetAddress),
  //       values: transactions.map(() => BigNumber.from('0')),
  //       calldatas: transactions.map(transaction => {
  //         const funcSignature = `function ${transaction.functionName}(${transaction.functionSignature})`;
  //         const parametersArr = `[${transaction.parameters}]`;
  //         return new ethers.utils.Interface([funcSignature]).encodeFunctionData(
  //           transaction.functionName,
  //           JSON.parse(parametersArr)
  //         );
  //       }),
  //       description: proposalDescription,
  //     };
  //     setProposalData(proposal);
  //   } catch {
  //     // catches errors related to `ethers.utils.Interface` and the `encodeFunctionData`
  //     // these errors are handled in the onChange of the inputs in transactions
  //   }
  // }, [transactions, proposalDescription]);

  // const isNextDisabled = useMemo(
  //   () => !isUserAuthorized || !proposalDescription.trim().length,
  //   [isUserAuthorized, proposalDescription]
  // );
  // const isCreateDisabled = useMemo(
  //   () => !isUserAuthorized || !isValidProposal || pendingCreateTx,
  //   [pendingCreateTx, isValidProposal, isUserAuthorized]
  // );

  return (
    <div>
      <div>
        <H1>Create Market</H1>
        <form onSubmit={e => e.preventDefault()}>
          <Essentials
            proposalDescription={proposalDescription}
            setProposalDescription={setProposalDescription}
          />
        </form>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <PrimaryButton
            type="button"
            onClick={createMarketTransaction}
            disabled={false}
            label="Create Proposal"
            isLarge
          />
        </div>
      </div>
    </div>
  );
}

export default MarketCreate;
