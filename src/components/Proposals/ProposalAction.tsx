import { useState } from 'react';
import useBetTransaction from '../../hooks/useBetTransaction';
import ContentBox from '../ui/ContentBox';
import { PrimaryButton } from '../ui/forms/Button';
import Input from '../ui/forms/Input';

interface ProposalActionProps {
  label: string;
  btnLabel: string;
  pending?: boolean;
  actionFunc?: (...args: any | undefined) => void;
}

export function ProposalAction({ actionFunc, pending, label, btnLabel }: ProposalActionProps) {
  const [bet, setBet] = useState('');
  return (
    <ContentBox>
      <Input
        type="number"
        value={bet}
        onChange={e => setBet(e.target.value)}
        label="Place Bet"
        helperText=""
      />
      <div className="flex justify-between items-center">
        <div className="text-gray-25">{label}</div>
        <PrimaryButton
          label={btnLabel}
          className="mr-0"
          onClick={() => {}}
          disabled={pending}
        />
      </div>
    </ContentBox>
  );
}
