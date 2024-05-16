import React from "react";
import styles from "./adminPreview.module.css";
import Image from "next/image";
import { Suspense } from "react";
import BookUser from "../bookUser/bookUser";

const getData = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/booking/${slug}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const AdminPreview = async ({ bookid }) => {
  const post = await getData(bookid);
  return (
    <div className={styles.container}>
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
        <div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.subtitle}>Booking ID</td>
                <td className={styles.value}>{post.slug}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Customer ID</td>
                <td className={styles.value}>{post.userId}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Customer Name</td>
                <td className={styles.value}>{post.customerName}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Phone No</td>
                <td className={styles.value}>{post.phoneNumber}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Trailer Type</td>
                <td className={styles.value}>{post.trailerType}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Trailer Load Type</td>
                <td className={styles.value}>{post.loadType}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Pickup date</td>
                <td className={styles.value}>{post.pickupDateTime}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Delivery date</td>
                <td className={styles.value}>{post.deliveryDateTime}</td>
              </tr>
              <tr>
                <td className={styles.subtitle}>Special request</td>
                <td className={styles.value}>{post.specialRequest}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPreview;
