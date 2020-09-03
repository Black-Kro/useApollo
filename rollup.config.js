import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import clean from 'rollup-plugin-clean';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/composables/index.ts',
    output: [
        {
            format: 'esm',
            file: 'dist/index.esm.js'
        },
        {
            format: 'cjs',
            file: 'dist/index.common.js'
        },
    ],
    external: ['vue'],
    plugins: [
        commonjs(),
        clean(),
        typescript({
            useTsconfigDeclarationDir: true,
            rollupCommonJSResolveHack: true,
            tsconfigOverride: {
                emit: false,
                emitDeclarationOnly: true,
            }
        }),
        vue({
            target: 'browser',
            preprocessStyles: true,
        }),
        terser(),
    ]
}