import { defineConfig } from 'rollup'
// import swc from '@rollup/plugin-swc'
import tsp from 'rollup-plugin-ts'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'es',
    format: 'esm',
  },
  plugins: [
    // 特别注意项目的应用场景：轻量级工具库实现，无需考虑打包第三方依赖，无需实现框架相关组件
    nodeResolve({
      extensions: ['.ts', '.js'],
    }),
    // swc(),
    tsp({
      transpiler: 'swc',
    }),
  ],
})
