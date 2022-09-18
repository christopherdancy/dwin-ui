import { ProposalData } from '../../providers/govenor/types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProposalCardDetailed from './ProposalCardDetailed';
import ProposalVotes from './ProposalVotes';
import ProposalQueue from './ProposalQueue';
import ProposalExecute from './ProposalExecute';
import CastVote from './CastVote';
import { useGovenorModule } from '../../providers/govenor/hooks/useGovenorModule';
import { useBlockchainData } from '../../contexts/blockchainData';
import useDwinEvents from '../../providers/treasury/hooks/useDwinEvents';
import ProposalBet from './MarketBet';
import Input from '../ui/forms/Input';
import CastBet from './CastBet';

function ProposalDetails() {
  const params = useParams();

  const { dwinContract } = useBlockchainData();
  const markets = useDwinEvents(dwinContract);
  const [proposal, setProposal] = useState<any>();

  useEffect(() => {
    if (markets === undefined || params === undefined) {
      setProposal(undefined);
      return;
    }

    const foundProposal = markets.proposalsCreated.find(p => p.id.toNumber() === 2);
    if (foundProposal === undefined) {
      setProposal(undefined);
      return;
    }
    setProposal(foundProposal);
  }, [markets, params, params.proposalNumber]);

  if (proposal === undefined) {
    return <div className="text-white">Proposals loading...</div>;
  }

  return (
    <div>
      {/* <ProposalQueue proposal={proposal} /> */}
      {/* {<ProposalBet></ProposalBet>} */}
      {/* <ProposalExecute proposal={proposal} /> */}
      <ProposalCardDetailed
        id={proposal.id}
        description={proposal.description}
      />
      <div className="flex">
        <CastBet />
        <ProposalVotes proposal={proposal} />
      </div>
    </div>
  );
}

export default ProposalDetails;
