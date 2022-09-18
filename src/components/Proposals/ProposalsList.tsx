import { useBlockchainData } from '../../contexts/blockchainData';
import { useGovenorModule } from '../../providers/govenor/hooks/useGovenorModule';
import useDwinEvents from '../../providers/treasury/hooks/useDwinEvents';
import ProposalCard from './ProposalCard';

function ProposalsList() {
  // const { proposals } = useGovenorModule();
  const { dwinContract } = useBlockchainData();
  const markets = useDwinEvents(dwinContract);

  if (markets.proposalsCreated === undefined) {
    return <div className="text-white">Proposals loading...</div>;
  }

  if (markets.proposalsCreated.length === 0) {
    return <div className="text-white">No proposals</div>;
  }

  return (
    <div className="flex flex-col -my-2">
      {[...markets.proposalsCreated].reverse().map(proposal => (
        <ProposalCard
          key={proposal.id.toString()}
          id={proposal.id.toString()}
          description={proposal.description}
        />
      ))}
    </div>
  );
}

export default ProposalsList;
