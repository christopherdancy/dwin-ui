import { BigNumber } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { TreasuryModule } from '../../../assets/typechain-types/module-treasury';
import { TypedEvent } from '../../../assets/typechain-types/module-treasury/common';
import { Dwin } from '../../../assets/typechain-types/typechain-types/typechain-types';
import { useBlockchainData } from '../../../contexts/blockchainData';
import { ERC20TokenEvent, TokenEventType, ProposalCreatedEvent, ProposalEventType } from '../types';

const useDwinEvents = (dwinContract?: Dwin) => {
  // const [erc20TokenDeposits, setErc20TokenDeposits] = useState<ERC20TokenEvent[]>([]);
  const [proposalsCreated, setProposalsCreated] = useState<ProposalCreatedEvent[]>([]);

  /**
   * retreives past events and sets it to state
   *
   * @param treasuryModuleContract
   * @param filter contract query filter for specific event
   */
  const getPastEvents = useCallback(async (dwin: Dwin, filter: any) => {
    const events = await dwin.queryFilter(filter);
    return events;
  }, []);

  /**
   * listener for erc20 token deposits
   * @param contractAddresses
   * @param senders
   * @param amounts
   * @param event
   */
  // const proposalCreatedListener = (
  //   ids: BigNumber,
  //   descriptions: string,
  //   event: TypedEvent<any, any>
  // ) => {
  //   setProposalsCreated(prevProposals => [
  //     ...(prevProposals || []),
  //     {
  //       ids,
  //       descriptions,
  //       transactionHash: event.transactionHash,
  //       blockNumber: event.blockNumber,
  //       eventType: ProposalEventType.CREATED,
  //     },
  //   ]);
  // };

  const resetState = () => {
    setProposalsCreated([]);
  };

  /**
   * handles deposit events for erc20 tokens on treasury module contract
   * sets an event listener for erc20 tokens deposit
   */
  useEffect(() => {
    if (!dwinContract) {
      resetState();
      return;
    }
    // retreive past erc20 token deposit events
    getPastEvents(dwinContract, dwinContract.filters.ProposalCreated()).then(
      (events: TypedEvent<any, any>[]) => {
        // if no events do nothing
        if (!events.length) {
          setProposalsCreated([]);
          return;
        }
        // normalize erc20 token deposit events
        const proposals = events.map(event => {
          return {
            id: event.args[0],
            description: event.args[1],
            transactionHash: event.transactionHash,
            blockNumber: event.blockNumber,
            eventType: ProposalEventType.CREATED,
          };
        });
        setProposalsCreated(proposals);
      }
    );

    // adds listener for real-time events
    // dwinContract.on(dwinContract.filters.ProposalCreated(), proposalCreatedListener);

    // return () => {
    //   dwinContract.off(dwinContract.filters.ProposalCreated(), proposalCreatedListener);
    // };
  }, [getPastEvents, dwinContract]);

  return {
    proposalsCreated,
  };
};

export default useDwinEvents;
