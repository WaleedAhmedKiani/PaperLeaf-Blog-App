import styles from "./singlePage.module.css";
import Menu from "../../components/Menu/Menu";
import Image from "next/image";
import SafeHtml from "../../components/safeHtml/SafeHtml";
import Comments from "../../components/comments/Comments";

const getData = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = await params;
    const data = await getData(slug);
   

    


    return (
        <div className={styles.container}>
            {/* TOP INFO */}
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data.title}</h1>

                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src={data.user?.image || "/images/userName.png"}
                                width={50}
                                height={50}
                                alt={data.user?.name || "User"}
                                className={styles.userImg}
                            />
                        </div>

                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {data.user?.name || "Unknown Author"}
                            </span>

                            <span className={styles.userRole}>
                                {data.user?.role || "Author"}
                            </span>

                            <span className={styles.date}>
                                {new Date(data.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                {/* POST IMAGE */}
                <div className={styles.imageContainer}>
                    {data.img && (
                        <Image
                            src={data.img}
                            width={300}
                            height={300}
                            alt={data.title}
                            className={styles.image}
                        />
                    )}
                </div>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>{data.desc}</p>
                    </div>

                    <div className={styles.postContent}>
                        {/* If content is HTML from editor */}

                        {data.content?.trim() ? (
                            <SafeHtml html={data.content} />
                        ) : (
                            <p>No content available</p>
                        )}

                    </div>

                    <div className={styles.commentsSection}>
                        <Comments postId={data.id} />
                    </div>
                </div>

                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
