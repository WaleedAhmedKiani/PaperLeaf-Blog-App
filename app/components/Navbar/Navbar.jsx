import Link from 'next/link';
import styles from './Navbar.module.css';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Pencil } from "lucide-react";
import AuthLink from '../AuthLinks/AuthLink';
import Toogletheme from '../ToggleTheme/Toogletheme';

const Navbar = () => {
  return (
    <div className={styles.container}>

      {/* SOCIAL ICONS */}
      <div className={styles.social}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} className={styles.icon} />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} className={styles.icon} />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} className={styles.icon} />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} className={styles.icon} />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube size={24} className={styles.icon} />
        </a>
      </div>

      {/* LOGO */}
      <div className={styles.logo}>
        <Pencil size={24} />
        <h5>PaperLeaf</h5>
      </div>

      {/* LINKS */}
      <div className={styles.links}>
        <div  className={styles.leftLinks}>
          <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        </div>
        
        
      
      <div className={styles.rightLinks}>
    <Toogletheme />
    <AuthLink />
  </div>
  </div>

    </div>
  );
};

export default Navbar;
