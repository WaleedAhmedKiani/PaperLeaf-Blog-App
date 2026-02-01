
import Link from 'next/link';
import styles from './Menu.module.css';
import Image from 'next/image';
import { categoryIcons } from '../../../lib/categoryIcons';



const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};



const Menu = async () => {
  const categories = await getCategories();


  return (
    <div className={styles.container}>
      <div className={styles.menu1}>
        <h2 className={styles.subtitle}>Trending </h2>
        <h1 className={styles.title}>Editor’s Choice</h1>
        <div className={styles.items} >
          <Link href="/" className={styles.item}>

            <div className={styles.textContainer} >
              <span className={styles.category}>Coding</span>
              <h3 className={styles.posttitle} >Master Coding with Clear Guides and Hands-On Examples</h3>
              <div className={styles.detail}>
                <span className={styles.username} >Jhon Doe</span>
                <span className={styles.date} >12.12.2024</span>

              </div>
            </div>


          </Link>
          <Link href="/" className={styles.item}>

            <div className={styles.textContainer} >
              <span className={styles.category}>Fashion</span>
              <h3 className={styles.posttitle} >Modern Fashion Ideas and Everyday Style Inspiration</h3>
              <div className={styles.detail}>
                <span className={styles.username} >Elia Smith</span>
                <span className={styles.date} >12.12.2024</span>

              </div>
            </div>


          </Link>



          <Link href="/" className={styles.item}>

            <div className={styles.textContainer} >
              <span className={styles.category}>Travel</span>
              <h3 className={styles.posttitle} >Travel the World With Beautiful Stories & Guides</h3>
              <div className={styles.detail}>
                <span className={styles.username} >Waleed Ahmed</span>
                <span className={styles.date} >12.12.2024</span>

              </div>
            </div>


          </Link>

        </div>
      </div>

      {/* Category List */}
      <div className={styles.menu1} >
        <h2 className={styles.subtitle}>Discover by topic </h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoryList} >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog?category=${cat.slug}`}
              className={styles.category}
            >
              {categoryIcons[cat.slug] || null}
              <span>{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>


      {/* second Menu Heading */}
      <h2 className={styles.subtitle}>Hot Picks </h2>
      <h1 className={styles.title}>Top Reads</h1>
      <div className={styles.items} >
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer} >
            <Image src="/images/code.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer} >
            <span className={styles.category}>Coding</span>
            <h3 className={styles.posttitle} >Master Coding with Clear Guides and Hands-On Examples</h3>
            <div className={styles.detail}>
              <span className={styles.username} >Jhon Doe</span>
              <span className={styles.date} >12.12.2024</span>

            </div>
          </div>


        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer} >
            <Image src="/images/fashion.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer} >
            <span className={styles.category}>Fashion</span>
            <h3 className={styles.posttitle} >Modern Fashion Ideas and Everyday Style Inspiration</h3>
            <div className={styles.detail}>
              <span className={styles.username} >Elia Smith</span>
              <span className={styles.date} >12.12.2024</span>

            </div>
          </div>


        </Link>



        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer} >
            <Image src="/images/travels.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer} >
            <span className={styles.category}>Travel</span>
            <h3 className={styles.posttitle} >Travel the World With Beautiful Stories & Guides</h3>
            <div className={styles.detail}>
              <span className={styles.username} >Waleed Ahmed</span>
              <span className={styles.date} >12.12.2024</span>

            </div>
          </div>


        </Link>

      </div>
    </div>
  )
}

export default Menu