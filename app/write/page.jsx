"use client";

import React, { useEffect, useState } from "react";
import styles from "./write.module.css";
import { Plus, Image, Upload, Video } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TipTapEditor from "../components/editor/TipTapEditor";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // media states
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { status } = useSession();
  const router = useRouter();

  // redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Cloudinary upload function
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  // upload when file selected
  useEffect(() => {
    if (!file) return;

    const upload = async () => {
      try {
        setUploading(true);
        const url = await uploadToCloudinary(file);
        if (file.type.startsWith("video")) {
          setVideoUrl(url);
        } else {
          setImageUrl(url);
        }

      } catch (err) {
        console.error("Upload failed", err);
      } finally {
        setUploading(false);
      }
    };

    upload();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("CONTENT BEFORE SAVE:", content);
    if (!desc || !title) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          content,
          category,
          imageUrl,
          videoUrl,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to publish post");
      }

      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }


  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Write a New Story</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* MEDIA TOOLBAR */}
        <div className={styles.editorBar}>
          <button
            type="button"
            className={styles.plusBtn}
            onClick={() => setOpen(!open)}
          >
            <Plus size={20} />
          </button>

          {open && (
            <div className={styles.mediaBox}>
              {/* ADD IMAGE */}
              <button
                type="button"
                title="Add Image URL"
                onClick={() => setImageUrl("")}
              >
                <Image size={18} />
              </button>

              {/* UPLOAD IMAGE */}
              <label htmlFor="uploadImage" title="Upload Image">
                <Upload size={18} />
              </label>

              {/* ADD VIDEO */}
              <button
                type="button"
                title="Add Video URL"
                onClick={() => setVideoUrl("")}
              >
                <Video size={18} />
              </button>
            </div>
          )}
        </div>

        {/* hidden file input */}
        <input
          type="file"
          id="uploadImage"
          hidden
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Title */}
        <input
          type="text"
          placeholder="Post title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Category */}
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="coding">Coding</option>
          <option value="food">Food</option>
          <option value="fashion">Fashion</option>
          <option value="style">Style</option>
          <option value="culture">Culture</option>
          <option value="travel">Travel</option>
        </select>

        {/* Description */}

        <textarea
          placeholder="write description ...."
          className={styles.input}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
        />

        {/* TipTap Editor */}
        <TipTapEditor value={content} onChange={(html)=>{
          console.log("TipTap HTML:", html);
          setContent(html);
        }} placeholder="Write your post content here..." />


        {/* Image URL input */}
        {imageUrl !== "" && (
          <input
            type="text"
            placeholder="Paste image URL"
            className={styles.input}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        )}

        {/* Video URL input */}
        {videoUrl !== "" && (
          <input
            type="text"
            placeholder="Paste video URL"
            className={styles.input}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        )}

        {/* Preview */}
        {uploading && <p>Uploading...</p>}
        {imageUrl && <img src={imageUrl} alt="preview" className={styles.preview} />}
        {videoUrl && (
          <video
            controls
            src={videoUrl}
            className={styles.preview}
          />
        )}

        <button className={styles.button} disabled={loading}>
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default Write;
