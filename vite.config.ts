import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({mode}) => {
	return {
		plugins: [react(), commonjs(), basicSsl()],
		base: mode === 'production' ? '/miniApp' : '/',
		server: {
			headers: {
				'Cache-Control': 'no-cache, no-store, must-revalidate',
				Pragma: 'no-cache',
				Expires: '0',
			},
		},
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		build: {
			rollupOptions: {
				output: {
					// 保证所有路由都指向 index.html
					entryFileNames: `[name].[hash].js`,
					chunkFileNames: `[name].[hash].js`,
					assetFileNames: `[name].[hash].[ext]`,
				},
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
			},
		},
	};
});
