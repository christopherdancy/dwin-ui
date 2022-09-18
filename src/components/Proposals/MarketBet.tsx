import { useState } from 'react';
import { ProposalData, ProposalState } from '../../providers/govenor/types';
import useQueueTransaction from '../../hooks/useQueueTransaction';
import { ProposalAction } from './ProposalAction';
import { BigNumberish } from 'ethers';
import useBetTransaction from '../../hooks/useBetTransaction';

function ProposalBet({ bet }: { bet?: BigNumberish }) {
  return (
    <ProposalAction
      btnLabel="Place Bet"
      label=""
    />
  );
}

export default ProposalBet;
