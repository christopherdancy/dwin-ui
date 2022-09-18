import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Bets from '../pages/Bets/index';
import MarketCreate from '../pages/MarketCreate';
import ProposalDetails from './Proposals/ProposalDetails';
// import { useDWinContract } from '../providers/markets/hooks/useDWinContract';

function Body() {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
      <Route
        path="bets/*"
        element={<Bets />}
      />
      <Route
        path="bets/new"
        element={<MarketCreate />}
      />
      <Route
        path="bets/betNumber/*"
        element={<ProposalDetails />}
      />
    </Routes>
  );
}

export default Body;
