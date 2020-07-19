import { UserModelState } from './user';
import { Location } from 'umi';

export interface ConnectProps {
  location: Location & { state: { from: string } };
}

export interface ConnectState {
  user: UserModelState;
}

export { UserModelState };
