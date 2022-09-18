import { Link } from 'react-router-dom';
import ContentBox from '../../components/ui/ContentBox';
import { PrimaryButton, SecondaryButton } from '../../components/ui/forms/Button';
import H1 from '../../components/ui/H1';

function Home() {
  return (
    <div>
      <H1>DWin</H1>
      <ContentBox title="Betting on Good">
        <div className="md:grid md:grid-cols-2 gap-6 flex flex-col items-center py-4">
          <Link
            to="/bets"
            className="w-full"
          >
            <SecondaryButton
              label="Betting Markets"
              isLarge
              className="w-full"
            />
          </Link>
        </div>
      </ContentBox>
    </div>
  );
}

export default Home;
