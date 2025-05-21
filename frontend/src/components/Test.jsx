import { useState } from 'react';
import Editor from "@monaco-editor/react";

const Test = () => {
    const [code, setCode] = useState("// Enter your code here ...");
    //const [userCode, setUserCode] = useState("");

    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.defineTheme('beardedTheme', {
            base: 'vs-dark', // Must match your color palette
            inherit: true,
            rules: [
                { token: 'comment', foreground: '6A9955' },
                { token: 'keyword', foreground: 'C586C0' },
                { token: 'identifier', foreground: '9CDCFE' },
                { token: 'number', foreground: 'B5CEA8' },
                { token: 'string', foreground: 'CE9178' },
                { token: 'type', foreground: '4EC9B0' },
                { token: 'delimiter', foreground: 'D4D4D4' },
                { token: 'operator', foreground: 'D4D4D4' },
                { token: 'function', foreground: 'DCDCAA' },
                { token: 'constant', foreground: '569CD6' },
                { token: 'entity.name.function', foreground: 'DCDCAA' },
                { token: 'entity.name.type', foreground: '4EC9B0' },
                { token: 'markup.bold', fontStyle: 'bold' },
                { token: 'markup.italic', fontStyle: 'italic' },
                { token: 'meta', foreground: '9CDCFE' },
                { token: 'support.function', foreground: 'DCDCAA' },
                { token: 'variable', foreground: '9CDCFE' },
                { token: 'punctuation', foreground: 'D4D4D4' },
                { token: 'storage', foreground: '569CD6' },
                { token: "interface", foreground: "e5c07b" },
                { token: "class", foreground: "e5c07b" },
                { token: "enum", foreground: "e5c07b" },
                { token: "typeParameter", foreground: "e5c07b" },
                { token: "property", foreground: "abb2bf" },
                { token: "macro", foreground: "c678dd" },
                { token: "annotation", foreground: "c678dd" }
            ],
            colors: {
                'editor.background': '#1E1E1E',
                'editor.foreground': '#D4D4D4',
                'editor.lineHighlightBackground': '#2D2D30',
                'editorCursor.foreground': '#AEAFAD',
                'editorWhitespace.foreground': '#333333',
                'editorIndentGuide.background': '#404040',
                'editorLineNumber.foreground': '#858585',
                'editor.selectionBackground': '#264F78',
                'editor.inactiveSelectionBackground': '#3A3D41',
                'editor.selectionHighlightBackground': '#ADD6FF26',
            }
        });

        monaco.editor.setTheme("beardedTheme");
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/run', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({code})
            });
            const data = await response.json();
            alert (data.output);
        } catch (error) {
            alert("Error connecting to the server.");
        }
    }
    
    return (
        <div style={{ height: "60vh", width: "90vh", color: "black", margin: "auto" }}>
            <h1>Coding test</h1>
            <div style={{overflow: "hidden",
                borderRadius: "10px",
                height: "100%",
            }}>
            <Editor
                height="100%"
                defaultLanguage="c"
                defaultValue={code}
                onMount={handleEditorDidMount}
                onChange={(value) => setCode(value)}
                options={{
                    minimap: { enabled: false },
                    fontSize: 20,
                    automaticLayout: true,
                    lineHeight: 40,
                    padding: {
                        top: 18,
                    }
                }}
            />
            </div>
            <button style={{margin: "2vh 70vh"}}
            onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default Test;


