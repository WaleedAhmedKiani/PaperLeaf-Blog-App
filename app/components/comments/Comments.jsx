'use client'
import { useSession } from 'next-auth/react';
import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';
import useSWR, { mutate } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Comments = ({ postId }) => {


    const { data: session, status } = useSession();
    const [desc, setDesc] = React.useState("");

    const { data, error, isLoading } = useSWR(postId ? `/api/comments?postId=${postId}` : null, fetcher);

    const handleSubmit = async () => {
        if (!desc.trim()) return;

       const res = await fetch("/api/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                desc,
                postId,
            }),
        });

        if (res.ok) {
            mutate(`/api/comments?postId=${postId}`);
            setDesc("");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.commentForm}>
                    <textarea className={styles.textarea} placeholder="Write a comment..."
                        value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login" className={styles.loginPrompt}>
                    Please log in to post a comment.
                </Link>
            )}
            <div className={styles.comments}>
                {isLoading && <p>Loading comments...</p>}
                {error && <p>Failed to load comments</p>}

                {data?.length === 0 && <p>No comments yet.</p>}

                {data?.map((comment) => (
                    <div className={styles.comment} key={comment.id}>
                        <div className={styles.user}>
                            <Image
                                src={comment.user?.image || "/images/userName.png"}
                                alt={comment.user?.name || "User"}
                                width={50}
                                height={50}
                                className={styles.userImg}
                            />
                        </div>

                        <div className={styles.userInfo}>
                            <span className={styles.userName}>
                                {comment.user?.name || "Anonymous"}
                            </span>

                            <span className={styles.commentDate}>
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </span>

                            <p className={styles.desc}>{comment.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Comments
