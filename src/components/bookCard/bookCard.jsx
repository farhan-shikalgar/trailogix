import React from 'react'
import styles from './bookCard.module.css'
import Image from 'next/image'
import Link from 'next/link'



const BookCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <div className={styles.imgContainer}>
          <Image src={`/${post.trailerType}.png`} alt="" width={300} height={200}/>

          <h1>{post.customerName}</h1>
          <h1>{post.loadType}</h1>
          <h1>{post.trailerType}</h1>
        </div>
        <span className={styles.date}>{post.createdAt?.toString().slice(0, 10)}</span>
      </div>
      <div className={styles.bottom}>
       
        
        <div>
        <Link className={styles.link} href={`/booking/${post.slug}`}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard