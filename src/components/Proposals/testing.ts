import { useState } from 'react';
import { useBlockchainData } from '../../contexts/blockchainData';
import { useGovenorModule } from '../../providers/govenor/hooks/useGovenorModule';
import ProposalCard from './ProposalCard';

export async function TestingProposalsList() {
  const { dwinContract } = useBlockchainData();

  if (dwinContract === undefined) {
    return;

  }
  const test = [];

  const proposalCreated = dwinContract.filters.ProposalCreated();

  return dwinContract.queryFilter(proposalCreated).then(marks => marks.map(res => test.push(res)));
}
