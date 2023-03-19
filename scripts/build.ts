import esbuild from 'esbuild';
import * as _package from '../package.json';

async function main() {
  try {
    console.log(`📦 Building ${_package.name}...`);
    const startTime = Date.now();
    await esbuild.build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      platform: 'node',
      packages: 'external',
      target: ['node18.0'],
      format: 'esm',
      minify: true,
      sourcemap: true,
      outdir: 'dist',
      tsconfig: 'tsconfig.json'
    });
    console.log(`✨ Build successful (took ${Date.now() - startTime}ms)`);
  } catch (error) {
    console.error('❌ Build error:', error);
  }
}

main();
