import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
            
			title: 'IRL Streaming Info',
            customCss: [
                    './src/styles/custom.css',
                  ],
            head: [
                {
                  tag: 'script',
                  attrs: { src: '/scripts/table-logic.js', defer: true },
                },
              ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/9philip/irlstreaminginfo' }],
			sidebar: [
				{
                    label: 'Glossary',
                    autogenerate: { directory: 'glossary' },
                },
                {
                    label: 'Cloud Hosted Services',
                    autogenerate: { directory: 'cloud hosted services' },
                },

			],
		}),
	],
});
