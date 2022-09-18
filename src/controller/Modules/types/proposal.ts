import { MarketExecuteData } from '../../../types/proposal';

export interface GovernanceProposalData {
  createProposal?: (data: {
    proposalData: MarketExecuteData;
    successCallback?: () => void;
  }) => void;
  pending?: boolean;
  isAuthorized?: boolean;
}
