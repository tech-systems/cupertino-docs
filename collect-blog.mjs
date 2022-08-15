import fs from 'node:fs/promises'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

const articles = await fs.readdir('./docs/blog/')

const data = await Promise.all(
  articles.filter(file => file !== 'index.md')
    .map(async (article) => {
      const file = matter.read(`./docs/blog/${article}`, {
        excerpt: true,
        excerpt_separator: '<!-- more -->'
      })

      const { data, excerpt, path } = file
      const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)

      return {
        ...data,
        title: contents[0].replace(/\s{2,}/g, '').trim(),
        path: path.replace(/\.md$/, '.html').replace('docs/blog/', ''),
        excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
      }
  })
)

await fs.writeFile('./docs/public/blog-data.json', JSON.stringify(data), 'utf-8')