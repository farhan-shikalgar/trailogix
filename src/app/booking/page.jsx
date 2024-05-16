// "use client";
import React from "react";
import styles from "./booking.module.css";
import BookCard from "@/components/bookCard/bookCard";
import { auth } from "@/lib/auth";
// import { useEffect, useState } from "react";
import { getPosts } from "@/lib/data";

//using this by me for api calls
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/booking`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Bookingpage = async () => {
  // const [posts, setPosts] = useState([]);

  //with api
  const session = await auth();
  console.log(session);
  const data = await getData();
  const currentUserPosts = data.filter(
    (post) => post.userId === session.user.id
  );
  const posts = currentUserPosts;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();

  //   const intervalId = setInterval(fetchData, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  ////without api for testing local run
  // const posts = await getPosts()
  // console.log(posts)
  
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.userId}>
          <BookCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Bookingpage;
