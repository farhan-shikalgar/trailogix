import React from "react";
import styles from "./bookCard.module.css";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={`/${post.trailerType}.png`}
            alt=""
            width={300}
            height={200}
          />
        <div className={styles.details}>
  <table className={styles.table}>
    <tbody>
      <tr>
        <td className={styles.label}>Name</td>
        <td>{post.customerName}</td>
      </tr>
      <tr>
        <td className={styles.label}>Trailer Type</td>
        <td>{post.trailerType}</td>
      </tr>
      <tr>
        <td className={styles.label}>Load Type</td>
        <td>{post.loadType}</td>
      </tr>
      <tr>
        <td className={styles.label}>ID</td>
        <td>{post.slug}</td>
      </tr>
      <tr>
        <td className={styles.label}>Pickup</td>
        <td>{post.pickupDateTime?.toString().slice(0, 10)}</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        {/* <span className={styles.date}>{post.createdAt?.toString().slice(0, 10)}</span> */}
      </div>
      <div className={styles.bottom}>
        <div>
          <Link className={styles.link} href={`/booking/${post.slug}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
