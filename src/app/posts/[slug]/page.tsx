import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/post';
import Layout from '@/src/components/Layout';
import Button from '@/src/components/mdx/Button';
import CodeHighLighter from '@/src/components/mdx/CodeHighLighter';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(params: Props['params']) {
  const post = getPostBySlug(params.slug);
  return { post };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
  const { post } = await getPost(params);
  console.log(post.content);

  return (
    <Layout>
      <h1 className="text-2xl">{post.meta.title}</h1>
      <time className="text-gray-600">{post.meta?.date.toString()}</time>
      <MDXRemote
        source={post.content}
        components={{ Button, CodeHighLighter }}
        options={{}}
      />
    </Layout>
  );
}

