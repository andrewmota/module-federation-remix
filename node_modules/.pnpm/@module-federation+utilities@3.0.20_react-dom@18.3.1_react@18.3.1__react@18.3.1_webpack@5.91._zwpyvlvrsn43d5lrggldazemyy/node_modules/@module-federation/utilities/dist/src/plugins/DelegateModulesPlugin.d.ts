import type { Compiler, Compilation, Chunk, NormalModule } from 'webpack';
declare class DelegateModulesPlugin {
    options: {
        debug: boolean;
        [key: string]: any;
    };
    _delegateModules: Map<string, NormalModule>;
    constructor(options: {
        debug?: boolean;
        [key: string]: any;
    });
    getChunkByName(chunks: Iterable<Chunk>, name: string): Chunk | undefined;
    private addDelegatesToChunks;
    private addModuleAndDependenciesToChunk;
    removeDelegatesNonRuntimeChunks(compilation: Compilation, chunks: Iterable<Chunk>): void;
    apply(compiler: Compiler): void;
}
export default DelegateModulesPlugin;
