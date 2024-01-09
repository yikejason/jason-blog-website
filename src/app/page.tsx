import BasicLayout from '@/src/components/Layout';
export default function Home() {
  return (
    <BasicLayout>
      <h2 className="text-3xl md:text-4xl text-black">关于</h2>
      <p className="text-gray-600 max-w-5xl">
        专注于前端的全栈工程师，参与工作距今已经有十多年，有着丰富的2B系统开发及架构经验。早年从事UI设计工作，因此对用户体验及交互上具有一定的把控。目前主要以前端开发为主，对服务端技术如：nodejs、next、nest也具备一定的掌握。擅长以React为核心的各类技术栈进行软件开发，喜欢工程化方面领域，喜欢交互设计。
      </p>
      <ul className="mb-4 font-light text-gray-400">
        <li>
          🎉
          技术栈包括:javascript、typescript、nodejs、react.js、next.js、mongoDB、prisma、tailwind
          css等。
        </li>
        <li>🌱 目前正在学习Rust这门语言及自动化测试方面的知识。</li>
      </ul>
    </BasicLayout>
  );
}

