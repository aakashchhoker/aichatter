import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ initialCode = "", onCodeChange, language = "jsx", className = "" }) => {
  const [code, setCode] = useState(initialCode);
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  
  // Update local state when initialCode prop changes
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);
  
  // Handle editor mounting
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ height: "100%", minHeight: "300px" }}
    >
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
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
          lineNumbers: "on",
          renderLineHighlight: "all",
          cursorBlinking: "smooth",
          fixedOverflowWidgets: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
