I used the [Starlight Obsidian](https://github.com/HiDeoo/starlight-obsidian) plugin for rendering my Obsidian vault in this site ([[00000 the nulspace]]). But there was a catch: Markdown files were copied as Markdown files. Which is okay, but I wanted them to be copied as MarkdownX files for support of React components.

What I ended up doing was forking the project and modifying `packages/starlight-obsidian/libs/markdown.ts` like this:

```diff
      aliases: file.data.aliases,
      content: String(file),
      skip: file.data.skip === true,
-     type: file.data.isMdx === true ? 'mdx' : 'markdown',
+     type: 'mdx',
    }
  }
```

With this change, all files were copied as MarkdownX, enabling React support out of the box.