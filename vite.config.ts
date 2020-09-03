import { UserConfig } from 'vite';
import path from 'path';

const alias = {
    '/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
    optimizeDeps: {
        include: [
            'fast-json-stable-stringify',
            'zen-observable',
            'graphql-tag'
        ]
    },
    rollupInputOptions: {
        external: [
            'react',
            'fast-json-stable-stringify'
        ]
    },
    alias
}

export default config;
