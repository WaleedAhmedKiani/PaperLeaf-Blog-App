"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useRef } from "react";
import Toolbar from "./Toolbar";
import styles from "./TipTapEditor.module.css";

const TipTapEditor = ({ value, onChange, placeholder }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || "Write your post content here...",
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
     const html = editor.getHTML(); 
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: styles.editor,
        "data-placeholder": placeholder || "Write your post content here...",
      },
    },
  });

  const initialized = useRef(false);
  useEffect(() => {
    if (editor && !initialized.current) {
      onChange(editor.getHTML());
      initialized.current = true;
    }
  }, [editor, onChange]);

  if (!editor) return null;

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
