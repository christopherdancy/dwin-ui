import { BigNumber, BigNumberish, ethers } from 'ethers';
import { useState } from 'react';
import { useBlockchainData } from '../../contexts/blockchainData';
import { ProposalData } from '../../providers/govenor/types';

function VotesPercentage({ label, percentage }: { label: string; percentage: BigNumberish }) {
  return (
    <div className="flex flex-row mx-2 py-3 border-t border-gray-200">
      <div className="flex flex-grow mr-4 text-gray-50 font-medium">{label}</div>
      <div className="flex ml-2 text-gray-25 text-lg font-semibold font-mono">
        {percentage.toString()}
      </div>
    </div>
  );
}

function ProposalVotes({ proposal }: { proposal?: ProposalData }) {
  const { dwinContract } = useBlockchainData();
  const [balance, setbalance] = useState('');
  if (!dwinContract) {
    return <></>;
  }
  dwinContract.getTotalNetBets(2).then(res => setbalance(res.toString()));
  return (
    <div className="flex flex-grow flex-col h-full bg-gray-600 my-2 ml-4 p-2 pb-4 rounded-md">
      <div className="flex mx-2 my-2 text-gray-25 mb-3 text-lg font-semibold">Current Bets</div>
      <VotesPercentage
        label="TotalBets"
        percentage={balance}
      />
    </div>
  );
}

export default ProposalVotes;
