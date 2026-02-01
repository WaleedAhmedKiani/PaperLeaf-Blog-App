import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

// const data = [
//   {
//     img: "/images/code.jpg",
//     title: "Learn Coding Through Simple Guides and Practical Examples",
//     category: "Coding",
//     date: "12.07.2024",
//     desc: "Explore the world of coding with tutorials, real-case examples, and expert insights designed for all skill levels.",
//     link: "/posts/learn-coding"
//   },
//   {
//     img: "/images/fashion.jpg",
//     title: "Trendy Fashion Ideas and Style Inspiration",
//     category: "Fashion",
//     date: "14.07.2024",
//     desc: "Discover the latest fashion trends, outfit ideas, and styling tips to elevate your everyday look.",
//     link: "/posts/fashion-style"
//   },
//   {
//     img: "/images/travels.jpg",
//     title: "Travel the World With Beautiful Stories & Guides",
//     category: "Travel",
//     date: "15.07.2024",
//     desc: "Get inspired by destinations, travel guides, and real experiences that help you plan your next adventure.",
//     link: "/posts/travel-world"
//   }
// ];

const Card = ({item}) => {
  return (
    <div className={styles.list}>
      
        <div className={styles.container} >
          
          {/* IMAGE */}
          <div className={styles.imgContainer}>
            <Image 
              src={item.img || "/images/code.jpg"}
              alt={item.title}
              width={250}
              height={250}
              className={styles.image}
            />
          </div>

          {/* TEXT */}
          <div className={styles.textContainer}>
            <div className={styles.detail}>
              <span className={styles.date}>
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className={styles.category}>
                {item.category?.title || "General"}
              </span>
            </div>

            <h1 className={styles.heading}>{item.title}</h1>

            <p className={styles.desc}>{item.desc}</p>

            <Link href={`/posts/${item.slug}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>

        </div>
      
    </div>
  );
}

export default Card
