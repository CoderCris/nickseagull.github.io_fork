// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'
import starlightThemeObsidian from 'starlight-theme-obsidian'


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: "https://nickseagull.dev",
  integrations: [starlight({
    title: 'nulspace',
    components: {
      Sidebar: './src/overrides/Sidebar.astro'
    },
    social: {
      github: 'https://github.com/nickseagull/',
      linkedin: 'https://www.linkedin.com/in/nickseagull/',
      twitter: 'https://x.com/NickSeagull',
      twitch: 'https://www.twitch.tv/codeseagull',
      youtube: 'https://www.youtube.com/@CodeSeagull',
      mastodon: 'https://mastodon.social/@NickSeagull'
    },
    sidebar: [
      obsidianSidebarGroup,
    ],
    customCss: [
      '@fontsource/xanh-mono/400.css',
      './src/style/custom.css'
    ],
    plugins: [
      // Generate the Obsidian vault pages.
      starlightObsidian({
        vault: './content',
        sidebar: {
          label: "nulspace"
        },
      }),
      starlightThemeObsidian()
    ],
  }), react()],
});
