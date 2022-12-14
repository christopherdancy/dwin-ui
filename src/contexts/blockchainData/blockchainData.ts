import { MetaFactory } from '../../assets/typechain-types/metafactory';
import useDisplayName from '../../hooks/useDisplayName';
import { useWeb3Provider } from '../web3Data/hooks/useWeb3Provider';
import useCurrentBlockNumber from './useCurrentBlockNumber';
import useCurrentTimestamp from './useCurrentTimestamp';
import useMetaFactoryContract from './useMetaFactoryContract';
import useDWinContract from './useDWinContract';
import { Dwin } from '../../assets/typechain-types/typechain-types/typechain-types';

export interface BlockchainData {
  currentBlockNumber: number | undefined;
  currentTimestamp: number;
  metaFactoryContract: MetaFactory | undefined;
  accountDisplayName: string;
  dwinContract: Dwin | undefined;
}

export type BlockchainDataContext = BlockchainData;

export const defaultBlockchainDataResponse = {} as BlockchainData;

const useBlockchainDatas = () => {
  const {
    state: { account },
  } = useWeb3Provider();

  const currentBlockNumber = useCurrentBlockNumber();
  const currentTimestamp = useCurrentTimestamp(currentBlockNumber);
  const metaFactoryContract = useMetaFactoryContract();
  const dwinContract = useDWinContract();
  const accountDisplayName = useDisplayName(account);

  const blockchainData: BlockchainData = {
    currentBlockNumber,
    currentTimestamp,
    metaFactoryContract,
    accountDisplayName,
    dwinContract,
  };

  return blockchainData;
};

export default useBlockchainDatas;
