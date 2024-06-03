/**
 * Type definition for RemoteUrl
 * @typedef {string | function} RemoteUrl
 */
type RemoteUrl = string | (() => Promise<string>);
/**
 * Interface for ImportRemoteOptions
 * @interface
 * @property {RemoteUrl} url - The url of the remote module
 * @property {string} scope - The scope of the remote module
 * @property {string} module - The module to import
 * @property {string} [remoteEntryFileName] - The filename of the remote entry
 * @property {boolean} [bustRemoteEntryCache] - Flag to bust the remote entry cache
 */
export interface ImportRemoteOptions {
    url: RemoteUrl;
    scope: string;
    module: string;
    remoteEntryFileName?: string;
    bustRemoteEntryCache?: boolean;
    esm?: boolean;
}
/**
 * Function to import remote
 * @async
 * @function
 * @param {ImportRemoteOptions} options - The options for importing the remote
 * @returns {Promise<T>} A promise that resolves with the imported module
 */
export declare const importRemote: <T>({ url, scope, module, remoteEntryFileName, bustRemoteEntryCache, esm, }: ImportRemoteOptions) => Promise<T>;
export {};
