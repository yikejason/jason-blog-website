'use client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeHighLighter({
  lang,
  code,
}: {
  lang: string;
  code: string;
}) {
  return (
    <SyntaxHighlighter language={lang} style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
}

