import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postDir = join(process.cwd(), 'posts');

type MetaData = {
  title: string;
  date: Date;
  category: string;
  tags?: string[];
  description?: string;
  draft?: boolean;
};

// 根据文件名读取markdown内容
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postDir, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // 解析 markdown 元数据
  const { data, content, excerpt } = matter(fileContents, { excerpt: true });

  // 配置文章元数据
  const meta = { ...data } as MetaData;

  return { slug: realSlug, meta, content, excerpt };
}

// 获取 /posts文件夹下的所有markdown文档
export function getAllPosts() {
  const slugs = fs.readdirSync(postDir);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((c) => !/\.draft$/.test(c.slug));
  return posts.sort((a, b) => +b.meta.date - +a.meta.date);
}

