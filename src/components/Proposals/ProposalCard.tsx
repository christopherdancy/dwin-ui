import { Link } from 'react-router-dom';
import ContentBox from '../ui/ContentBox';
import StatusBox from '../ui/StatusBox';
import ProposalNumber from '../ui/proposal/ProposalNumber';
import ProposalTime from '../ui/proposal/ProposalTime';
import ProposalDescription from '../ui/proposal/ProposalDescription';
import ProposalCreatedBy from '../ui/proposal/ProposalCreatedBy';
import { ProposalData } from '../../providers/govenor/types';
import H1 from '../ui/H1';

function ProposalCard({ id, description }: { id: string; description: string }) {
  if (!id || !description) {
    return <></>;
  }
  return (
    <Link to={`betNumber/${id}`}>
      <ContentBox isLightBackground>
        <div className="flex items-center">
          {/* <StatusBox status={proposal.state} /> */}
          {/* <ProposalNumber
            proposalNumber={proposal.number}
            textSize="text-sm"
          />
          <ProposalTime
            proposalStartString={proposal.startTimeString}
            proposalEndString={proposal.endTimeString}
            textSize="text-sm"
          /> */}
        </div>
        <ProposalDescription proposalDesc={description} />
        <ProposalCreatedBy
          proposalProposer={'DWIN'}
          textSize="text-sm"
        />
      </ContentBox>
    </Link>
  );
}

export default ProposalCard;
