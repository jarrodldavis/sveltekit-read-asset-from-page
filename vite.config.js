import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasm_pack from './vite-plugin-wasm-pack';

export default defineConfig({
	build: {
		target: 'es2022'
	},
	plugins: [sveltekit(), wasm_pack()]
});
