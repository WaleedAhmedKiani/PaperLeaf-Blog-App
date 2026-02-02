import Link from "next/link";
import styles from "./CategoryList.module.css";
import { categoryIcons } from "../../../lib/categoryIcons";

const getData = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}/api/categories`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.containers}>
      <h1 className={styles.title}>Trending Topics</h1>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/blog?category=${cat.slug.toLowerCase()}`}
            className={styles.category}
          >
            {categoryIcons[cat.slug] ?? null}
            <span>{cat.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
