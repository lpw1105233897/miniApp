import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig(({mode}) => {
	return {
		plugins: [react(), commonjs()],
		base: mode === 'production' ? '/miniApp/' : '/',

		resolve: {
			alias: {
				'@': '/src',
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
