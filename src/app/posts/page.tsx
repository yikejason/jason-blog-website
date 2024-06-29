import Link from 'next/link';
import { getAllPosts } from '@/lib/post';
import Layout from '@/src/components/Layout';

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <Layout>
      {posts?.map((post: any) => (
        <div key={post.slug} className="mb-6">
          <h1 className="text-3xl mb-6">{post.meta?.title}</h1>
          <li className="flex items-center justify-between prose prose-custom dark:prose-invert max-w-none mb-3">
            <Link
              href={`/posts/${post.slug}`}
              className="hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
            >
              {post.meta?.description}
            </Link>
            <span className="text-sm text-neutral-300">{post.meta?.date}</span>
          </li>
        </div>
      ))}
    </Layout>
  );
}

