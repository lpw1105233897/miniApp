import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({mode}) => {
	return {
		plugins: [react(), commonjs(), basicSsl()],
		base: mode === 'production' ? '/miniApp' : '/',

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
