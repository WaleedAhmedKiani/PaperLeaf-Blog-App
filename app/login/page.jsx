'use client'

import { signIn, useSession } from 'next-auth/react';
import styles from './loginpage.module.css'
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



const Loginpage = () => {
  const { data, status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === 'authenticated') {
      // console.log("User is authenticated, redirecting to home page. " + session?.user?.email);
      router.push('/');

    }
  }, [status, router]);


  if (status === 'loading') {
    return <div className={styles.LoadingContainer}>
      <Loader2 size={42} className={styles.spinner} />

    </div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} >
        <div className={styles.socialButton} onClick={() => signIn("google")} >Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
        <div className={styles.socialButton}>Sign in with Github</div>

      </div>



    </div>
  )
}

export default Loginpage
