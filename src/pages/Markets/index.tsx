import { Link } from 'react-router-dom';
import ProposalsList from '../../components/Proposals/ProposalsList';
import { SecondaryButton } from '../../components/ui/forms/Button';
import H1 from '../../components/ui/H1';

export function Markets() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <H1>Markets</H1>
        <div className="flex ml-auto mb-2 sm:mb-0 items-center sm:items-start">
          <Link to="new">
            <SecondaryButton label="Create Market" />
          </Link>
        </div>
      </div>
      <ProposalsList />
    </div>
  );
}
