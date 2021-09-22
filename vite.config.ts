import React from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { pascalCase } from 'scule'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import reactJsx from 'vite-react-jsx'

import AutoImportResolver from './resolver/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname)}/`,
    },
  },

  base: './',

  plugins: [
    React(),
    reactJsx(),
    WindiCSS(),
    AutoImport({
      // output dir + name of the d.ts file
      dts: './src/auto-imports.d.ts',
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      resolvers: [
        // Components auto import resolver
        AutoImportResolver({
          path: resolve(__dirname, 'src/components'),
          resolve: (_, slice) => ({
            module: `~/components/${pascalCase(slice)}`,
            name: pascalCase(slice),
            from: 'default',
          }),
        }),
        // React Use auto import resolver
        AutoImportResolver({
          path: resolve(__dirname, 'node_modules/react-use/lib'),
          resolve: (name) => {
            return {
              module: 'react-use',
              name,
            }
          },
        }),
        // Forma components auto import resolver
        AutoImportResolver({
          path: resolve(__dirname, 'node_modules/@contentful/forma-36-react-components/dist/components'),
          prefix: 'forma', // i.e. you use the components as <FormaComponent />, feel free to use your preferred prefix
          resolve: (name, slice) => ({
            module: '@contentful/forma-36-react-components',
            name,
            from: pascalCase(slice),
          }),
        }),
      ],
      imports: [
        'react',
        {
          scule: ['pascalCase', 'camelCase', 'kebabCase', 'snakeCase', 'upperFirst', 'lowerFirst', 'splitByCase'],
        },
      ],
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-use', '@contentful/app-sdk'],
  },
})
