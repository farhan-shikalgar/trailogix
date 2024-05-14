import React from "react";
import { getPosts } from "@/lib/data";
import styles from "./adminBooks.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import Link from "next/link";
const AdminBooks = async () => {
  const posts = await getPosts();
  console.log(typeof posts);

  return (
    <div className={styles.container}>
      <h1>Bookings</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Trailer Type</th>
            <th>ID</th>
            <th>Pickup</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className={styles.detail}>
                  <Image
                    src={`/${post.trailerType}.png`}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <span className={styles.postTitle}>{post.trailerType}</span>
                </div>
              </td>
              <td className={styles.postTitle}>{post.slug}</td>
              <td className={styles.postTitle}>
                {post.pickupDateTime.toString().slice(3, 15)}
              </td>
              <td>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={post.slug} />

                  <Link href={`/booking/${post.slug}`}>
                    <button className={styles.postButton1}>View</button>
                  </Link>
                </form>
              </td>
              <td>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={post.id} />
                  <button className={styles.postButton}>Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooks;
