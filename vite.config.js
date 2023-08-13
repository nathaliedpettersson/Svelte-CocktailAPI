import { sveltekit } from '@sveltejs/kit/vite';
// import { isCSSRequest, loadEnv, buildErrorMessage } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
