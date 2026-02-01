import Link from "next/link";
import styles from "./Footer.module.css";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Pencil,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* BRAND */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Pencil size={20} />
            <span>PaperLeaf</span>
          </div>
          <p className={styles.tagline}>
            Thoughts, stories & ideas — written simply. Sharing insights on lifestyle, fashion, travel, tech, and everything in between to inspire your daily life.
          </p>
        </div>

         {/* TAGS */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Tags</h4>
          <div className={styles.tags}>
            <span className={styles.tag}>Tech</span>
            <span className={styles.tag}>Style</span>
            <span className={styles.tag}>Travel</span>
            <span className={styles.tag}>Fashion</span>
          </div>
        </div>

        {/* LINKS */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Links</h4>
          <div className={styles.tags}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>

       

        {/* SOCIAL */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Social</h4>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
       © 2024 PaperLeaf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
