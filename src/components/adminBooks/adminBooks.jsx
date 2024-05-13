import React from 'react'
import { getPosts } from "@/lib/data";
import styles from "./adminBooks.module.css";
import Image from "next/image";
import { deletePost } from '@/lib/action';

const AdminBooks = async() => {
    const posts = await getPosts();
    console.log(typeof posts)

    return (
      <div className={styles.container}>
        <h1>Bookings</h1>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
              <Image
                src={`/${post.trailerType}.png`}
                alt=""
                width={50}
                height={50}
              />
              
              <span className={styles.postTitle}>{post.trailerType}</span>
              <span className={styles.postTitle}>ID - {post.slug}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    );
}

export default AdminBooks