import React from 'react'
import styles from './booking.module.css'
import BookCard from '@/components/bookCard/bookCard'
import { getPosts } from '@/lib/data'


//using this by me for api calls
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/booking", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Bookingpage = async () => {
//with api
const posts = await getData();

  ////without api for testing local run
  // const posts = await getPosts()
  // console.log(posts)
  return (
    <div className={styles.container}>
      {posts.map((post) =>(
      <div className={styles.post} key={post.userId}>
        <BookCard post={post}/>
      </div>
      ))}
    
      </div>
  )
}

export default Bookingpage