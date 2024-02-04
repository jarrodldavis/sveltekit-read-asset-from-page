import path from 'node:path';

/**
 * @returns {import('vite').Plugin}
 */
export default function wasm_pack() {
	return {
		name: 'vite-plugin-wasm-pack',
		async load(id, options) {
			if (path.basename(id) !== 'Cargo.toml') {
				return null;
			}

			const dir = path.dirname(id);
			const name = path.basename(dir).replaceAll('-', '_');
			const js = `./pkg/${name}.js`;
			const wasm = `./pkg/${name}_bg.wasm`;

			if (options?.ssr) {
				return `
					import init from ${JSON.stringify(js)};
					import url from ${JSON.stringify(`${wasm}?url`)};
					console.log('url:', url);
					import { read } from "$app/server";
					const response = read(url);
					response.headers.set('content-type', 'application/wasm');
					await init(response);
					export * from ${JSON.stringify(js)};
				`;
			}

			return `
				import init from ${JSON.stringify(js)};
				await init();
				export * from ${JSON.stringify(js)};
			`;
		}
	}
}
