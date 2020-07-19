import request from '@/utils/request';

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export function queryDetail() {}
export function fakeAccountLogout() {}
