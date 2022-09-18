import { useState } from 'react';
import ContentBox from '../ui/ContentBox';
import ContentBoxTitle from '../ui/ContentBoxTitle';
import Input from '../ui/forms/Input';
import InputBox from '../ui/forms/InputBox';

function Essentials({
  proposalDescription,
  setProposalDescription,
}: {
  proposalDescription: string;
  setProposalDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  return (
    <ContentBox>
      <ContentBoxTitle>Essentials Market Details</ContentBoxTitle>
      <InputBox>
        <Input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          label="DAO Address"
          helperText="What is the address of the DAO?"
          disabled={false}
        />
      </InputBox>
      <InputBox>
        <Input
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
          label="Proposal ID"
          helperText="What is the ID you would like to start a market for?"
          disabled={false}
        />
      </InputBox>
      <InputBox>
        <Input
          type="text"
          value={proposalDescription}
          onChange={e => setProposalDescription(e.target.value)}
          label="Proposal Description"
          helperText="What's the goal of this proposal? Explain the desired outcome and why it matters"
          disabled={false}
        />
      </InputBox>
    </ContentBox>
  );
}

export default Essentials;
