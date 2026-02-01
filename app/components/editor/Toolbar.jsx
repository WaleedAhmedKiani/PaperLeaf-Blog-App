"use client";

import styles from "./Toolbar.module.css";

const Toolbar = ({ editor }) => {
    if (!editor) return null;

    return (
        <div className={styles.toolbar}>
            <button type="button"
                className={`${styles.button} ${editor.isActive("bold") ? styles.buttonActive : ""
                    }`}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                Bold
            </button>

            <button type="button"
                className={`${styles.button} ${editor.isActive("heading", { level: 2 }) ? styles.buttonActive : ""
                    }`}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                H2
            </button>

            <button type="button"
                className={`${styles.button} ${editor.isActive("heading", { level: 3 }) ? styles.buttonActive : ""
                    }`}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
            >
                H3
            </button>

            <button type="button"
                className={`${styles.button} ${editor.isActive("bulletList") ? styles.buttonActive : ""
                    }`}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                List
            </button>
        </div>
    );
};

export default Toolbar;
