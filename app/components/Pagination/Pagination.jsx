'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.css';

const Pagination = ({ page = 1, total, pageSize, category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / pageSize);

  const goToPage = (newPage) => {
    const params = new URLSearchParams(searchParams);

    if (category) params.set("category", category);
    params.set('page', newPage);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
      >
        Previous
      </button>

      <span className={styles.page}>
        Page {page} of {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={page >= totalPages}
        onClick={() => goToPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
