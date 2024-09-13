import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
	const env = process.env;
	return {
		plugins: [react()],
		base: mode === 'production' ? '/my-production-base/' : '/',
		define: {
			__APP_ENV__: env.VITE_ENV_NAME,
		},
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		server: {
			proxy: {
				'/api': {
					target: env.VITE_API_BASE_URL,
					changeOrigin: true,
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
