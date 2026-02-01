export const dynamic = "force-dynamic";

import Pagination from "../Pagination/Pagination";
import styles from "./CardList.module.css";
import Card from "../Card/Card";

const getData = async (category, page) => {
  const params = new URLSearchParams();

  if (category) params.set("category", category);
  params.set("page", page);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
};

const CardList = async ({ category = null, page = 1 }) => {
    console.log(" CATEGORY RECEIVED:", category);
  const data = await getData(category, page); 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {category ? `${category} Posts` : "Recent Posts"}
      </h1>

      <div className={styles.posts}>
        {data.posts.length === 0 && <p>No posts found.</p>}
        {data.posts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        page={page}
        total={data.totalPosts}
        pageSize={data.pageSize}
        category={category}
      />
    </div>
  );
};

export default CardList;
