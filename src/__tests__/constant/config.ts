import { EEnv } from '../../model';
import { BASE_IP } from './../../api/config';

export const PRE_BASE_URL = `${BASE_IP}:8081`;

export const QUERY_ALL_PREFIX = '/logger/query/all';

export const createLogPrefix = (env: EEnv) => `/logger/submit/${env}/log`;