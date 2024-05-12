import React from 'react'
import styles from './singlebooking.module.css'
import Image from 'next/image'
import BookUser from '@/components/bookUser/bookUser'
import { getPost } from '@/lib/data'
import { Suspense } from 'react'


// for api using this
const getData = async (slug) => {
  const res = await fetch(`${process.env.API_URL}/api/booking/${slug}` ) ;
  //to use DElETE write method:"DELETE above in fectch after link"
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};



const SinglebookingPage =  async({params}) => {
  console.log(params)
  const {slug} = params;

  //with api 
  const post = await getData(slug)
  
  // //without api for test
  // const post = await getPost (slug);
  return (
    <div className={styles.container}>
    
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/5410923/pexels-photo-5410923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2f" alt="" fill className={styles.img} />
      </div>
    
    <div className={styles.textContainer}>
      <h1 className={styles.title}>{post?.trailerType}</h1>
      <div className={styles.detail}>
        <Image 
          className={styles.avatar}
          src={`/${post.trailerType}.png`}
          alt=""
          width={100}
          height={100}
          />       
           {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <BookUser userId={post.userId} />
            </Suspense>
          )}
       
        
      </div>
      <div className={styles.texts}>
      <div className={styles.subtitle}>Customer Id    - </div><div className={styles.value}>{post.userId}</div>
        <div className={styles.subtitle}>Customer Name     - </div><div className={styles.value}>{post.customerName}</div>
        <div className={styles.subtitle}>Phone No          - </div><div className={styles.value}>{post?.phoneNumber}</div>
        <div className={styles.subtitle}> Trailer Type      -</div><div className={styles.value}>{post?.trailerType}</div>
        <div className={styles.subtitle}>Trailer Load Type - </div><div className={styles.value}>{post?.loadType}</div>
        <div className={styles.subtitle}>Pickup date       - </div>
        <div className={styles.value}>{post.pickupDateTime} </div>
        <div className={styles.subtitle}>Delivery date     - </div>
        <div className={styles.value}>{post.deliveryDateTime}</div>
        <div className={styles.subtitle}>Special request   -</div><div className={styles.value}>{post.specialRequest}</div>
      </div>
    </div>
  </div>
  )
}

export default SinglebookingPage