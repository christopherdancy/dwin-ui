import { Routes, Route } from 'react-router-dom';
import { Markets } from '../Markets';
function Bets() {
  return (
    <Routes>
      <Route
        index
        element={<Markets />}
      />
    </Routes>
  );
}

export default Bets;
