import { useState, useEffect } from 'react';
import useCastVote from '../../hooks/useCastVote';
import { PrimaryButton, SecondaryButton } from '../ui/forms/Button';
import Check from '../ui/svg/Check';
import ContentBanner from '../ui/ContentBanner';
import { ProposalData, ProposalState } from '../../providers/govenor/types';
import useBetTransaction from '../../hooks/useBetTransaction';
import { BigNumberish } from 'ethers';
import Input from '../ui/forms/Input';

function CastBet({}: {}) {
  // Vote Enum
  // Against => 0
  // For => 1
  // Abstain => 2
  const [newBet, setNewVote] = useState<BigNumberish>();
  const [newValue, setNewValue] = useState<BigNumberish>();

  const castbet = useBetTransaction({
    bet: newBet,
    value: newValue,
  });

  function NoSelected() {
    return newBet === 0 ? <Check /> : null;
  }
  function YesSelected() {
    return newBet === 1 ? <Check /> : null;
  }
  return (
    <>
      <div className="flex flex-col bg-gray-600 my-2 p-2 pb-4 w-3/5 rounded-md">
        <div className="flex mx-2 my-2 text-gray-25 text-lg font-semibold">Place Bet</div>
        <hr className="mx-2 mb-6 border-gray-200" />
        <div className="flex flex-col gap-4">
          <SecondaryButton
            onClick={() => setNewVote(1)}
            icon={<YesSelected />}
            disabled={false}
            label="Bet Yes"
            isIconRight
            isSpaceBetween
            isLarge
          />
          <SecondaryButton
            onClick={() => setNewVote(0)}
            icon={<NoSelected />}
            disabled={false}
            label="Bet No"
            isIconRight
            isSpaceBetween
            isLarge
          />
          <Input
            type="number"
            value={newValue?.toString()}
            onChange={e => setNewValue(e.target.value)}
            label="Place Bet"
            helperText=""
          />
          <PrimaryButton
            className="mt-4"
            onClick={() => castbet()}
            disabled={false}
            label={'Make Bet'}
            isLarge
          />
        </div>
      </div>
    </>
  );
}

export default CastBet;
