import { BigNumber } from 'ethers';
import { ProposalData } from '../../providers/govenor/types';
import ContentBox from '../ui/ContentBox';
import ProposalCreatedBy from '../ui/proposal/ProposalCreatedBy';
import ProposalDescription from '../ui/proposal/ProposalDescription';
import ProposalId from '../ui/proposal/ProposalId';
import ProposalNumber from '../ui/proposal/ProposalNumber';
import ProposalTime from '../ui/proposal/ProposalTime';
import StatusBox from '../ui/StatusBox';

function ProposalCardDetailed({ description, id }: { description: string, id: BigNumber }) {
  return (
    <div>
      <ContentBox>
        <div className="flex items-center">
          <StatusBox status={1} />
          <ProposalNumber proposalNumber={id.toNumber()} />
          <ProposalTime
            proposalStartString={'9/18/22'}
            proposalEndString={'9/21/22'}
          />
        </div>
        <ProposalDescription proposalDesc={description} />
        <div className="pt-4 border-t border-gray-200">
          <ProposalCreatedBy
            proposalProposer={'DWIN'}
            addedClasses={'justify-between items-center'}
            includeClipboard
          />
          <ProposalId
            proposalId={id}
            proposalIdSub={id.toString()}
            addedClasses={'justify-between items-center'}
            includeClipboard
          />
        </div>
      </ContentBox>
    </div>
  );
}

export default ProposalCardDetailed;
