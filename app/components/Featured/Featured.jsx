import styles from './Featured.module.css';
import { Pen, BookOpen, Newspaper } from 'lucide-react';

const sampleItems = [
{
id: 1,
title: 'Mastering Next.js 15 — What’s New?',
desc: 'A deep dive into new features, routing upgrades, and performance improvements.',
icon: 'Pen'
},
{
id: 2,
title: 'Postgres vs MongoDB — Guide',
desc: 'Choosing the right database for your next full‑stack application in 2025.',
icon: 'BookOpen'
},
{
id: 3,
title: 'How to Build Scalable APIs',
desc: 'Essential architecture patterns for Node.js, Express, and serverless apps.',
icon: 'Newspaper'
}
];

const Featured = () => {
  return (
    <section className={styles.featured} aria-labelledby="featured-heading">
<div className={styles.header}>
<h1 id="featured-heading" className={styles.title}><b>Discover Inspiring Articles!</b> Curated to Spark Creativity, Expand Knowledge,
    and Elevate Your Digital Journey </h1>
<p className={styles.subtitle}><i> Dive into a thoughtfully selected collection of insightful blog posts crafted
    to keep you informed, inspired, and ahead of the curve. From development
    strategies and modern frameworks to productivity hacks and creative
    workflows, these articles are designed to empower your learning and help you
    grow through clear guidance and meaningful ideas.</i></p>
</div>


<ul className={styles.grid}>
{sampleItems.map(item => (
<li key={item.id} className={styles.card}>
<div className={styles.media} aria-hidden="true">
{/* Placeholder box for product image. Replace with <img> when you have images. */}
{item.icon === 'Pen' && <Pen size={32} />}
{item.icon === 'BookOpen' && <BookOpen size={32} />}
{item.icon === 'Newspaper' && <Newspaper size={32} />}

</div>


<div className={styles.content}>
<h3 className={styles.cardTitle}>{item.title}</h3>
<p className={styles.cardDesc}>{item.desc}</p>
<div className={styles.row}>
<span className={styles.price}>{item.price}</span>
<button className={styles.btn} aria-label={`View ${item.title}`}>View</button>
</div>
</div>
</li>
))}
</ul>
</section>
  )
}

export default Featured