import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ initialCode = "", onCodeChange, language = "jsx" }) => {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value) => {
    setCode(value);
    if (onCodeChange) {
      onCodeChange(value);
    }
  };

  return (
    <div
      className="border rounded-lg overflow-hidden"
      style={{  overflow: "auto" }}
    >
      <Editor
        height={"100vh"}
        width="100%"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          tabSize: 2,
          scrollBeyondLastLine: false,
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
