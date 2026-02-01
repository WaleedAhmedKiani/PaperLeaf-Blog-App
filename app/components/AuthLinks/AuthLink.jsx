'use client';
import React from 'react';
import Link from 'next/link';
import styles from './AuthLink.module.css';
import { signOut, useSession } from 'next-auth/react';


const AuthLink = () => {
  const [open, setOpen] = React.useState(false);
  const status = useSession().status;
  return (
    <div className={styles.authLinks}>
      
      {status === 'unauthenticated' ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
         <Link href="/write" className={styles.link}>Write</Link>
         <span className={styles.link} onClick={() => {signOut()}}>Logout</span>
        </>
       
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

      </div>
      {
        open && (
          <div className={styles.responsiveMenu} >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
               {status === 'notauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
         <Link href="/write">Write</Link>
         <span className={styles.link}>Logout</span>
        </>
       
      )}
          </div>
        )
      }
    </div>
  )
}

export default AuthLink