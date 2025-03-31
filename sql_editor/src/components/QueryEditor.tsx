import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import styled from "styled-components";

type QueryEditorProps = {
  query: string;
  onChange: (value: string) => void;
};

const EditorContainer = styled.div`
  border: 1px solid #dfe3e8;
  width: 38vw;
  border-radius: 8px;
  background-color: #f9fafc; 
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e0;
  }
`;

const QueryEditor: React.FC<QueryEditorProps> = ({ query, onChange }) => {
  return (
    <EditorContainer>
      <CodeMirror
        value={query}
        extensions={[sql()]}
        onChange={onChange}
        basicSetup={{ lineNumbers: true }}
        height="300px"
      />
    </EditorContainer>
  );
};

export default QueryEditor;
