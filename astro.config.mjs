import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
            customCss: [
            	'./src/styles/custom.css',
				],
			title: 'IRL Streaming Info',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
			sidebar: [
                {
                    label: 'Cloud Hosted Services',
                    autogenerate: { directory: 'cloud hosted services' },
                },
			],
		}),
	],
});
