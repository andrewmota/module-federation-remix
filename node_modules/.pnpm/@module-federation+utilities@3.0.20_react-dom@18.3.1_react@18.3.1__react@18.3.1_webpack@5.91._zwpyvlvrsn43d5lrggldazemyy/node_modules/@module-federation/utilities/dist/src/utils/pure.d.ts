import { RemoteVars, RuntimeRemote, RuntimeRemotesMap } from '../types';
export declare const remoteVars: RemoteVars;
export declare const extractUrlAndGlobal: (urlAndGlobal: string) => [string, string];
export declare const loadScript: (keyOrRuntimeRemoteItem: string | RuntimeRemote) => any;
export declare const getRuntimeRemotes: () => RuntimeRemotesMap;
