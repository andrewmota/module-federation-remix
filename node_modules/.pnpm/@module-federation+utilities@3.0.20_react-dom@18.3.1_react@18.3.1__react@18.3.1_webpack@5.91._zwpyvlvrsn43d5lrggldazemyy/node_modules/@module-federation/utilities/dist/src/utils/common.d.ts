import type { GetModuleOptions, RemoteData, Remotes, RuntimeRemote, WebpackRemoteContainer } from '../types';
/**
 * Return initialized remote container by remote's key or its runtime remote item data.
 *
 * `runtimeRemoteItem` might be
 *    { global, url } - values obtained from webpack remotes option `global@url`
 * or
 *    { asyncContainer } - async container is a promise that resolves to the remote container
 */
export declare const injectScript: (keyOrRuntimeRemoteItem: string | RuntimeRemote) => Promise<WebpackRemoteContainer>;
/**
 * Creates runtime variables from the provided remotes.
 * If the value of a remote starts with 'promise ' or 'external ', it is transformed into a function that returns the promise call.
 * Otherwise, the value is stringified.
 * @param {Remotes} remotes - The remotes to create runtime variables from.
 * @returns {Record<string, string>} - The created runtime variables.
 */
export declare const createRuntimeVariables: (remotes: Remotes) => Record<string, string>;
/**
 * Returns initialized webpack RemoteContainer.
 * If its' script does not loaded - then load & init it firstly.
 */
export declare const getContainer: (remoteContainer: string | RemoteData) => Promise<WebpackRemoteContainer | undefined>;
/**
 * Return remote module from container.
 * If you provide `exportName` it automatically return exact property value from module.
 *
 * @example
 *   remote.getModule('./pages/index', 'default')
 */
export declare const getModule: ({ remoteContainer, modulePath, exportName, }: GetModuleOptions) => Promise<any>;
