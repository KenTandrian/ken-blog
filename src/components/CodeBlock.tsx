import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import dracula from "react-syntax-highlighter/dist/esm/styles/hljs/dracula";

SyntaxHighlighter.registerLanguage("sh", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("typescript", typescript);

interface CodeBlockValue {
  _type: "code";
  code: string;
  filename?: string;
  language?: string;
}

interface CodeBlockProps {
  value: CodeBlockValue;
}

export default function CodeBlock({ value }: CodeBlockProps) {
  const { code, language, filename } = value;
  if (!code) return null;

  return (
    <div className="my-6 rounded-md overflow-hidden shadow-lg">
      {filename && (
        <div className="bg-gray-800 text-gray-400 px-4 py-2 text-sm font-mono border-b border-gray-700">
          {filename}
        </div>
      )}
      <SyntaxHighlighter
        language={language || "text"}
        style={dracula}
        showLineNumbers={true}
        customStyle={{ padding: "1.25rem", margin: 0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
