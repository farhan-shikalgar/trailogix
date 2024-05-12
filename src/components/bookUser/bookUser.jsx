import { getUser } from "@/lib/data";
import styles from "./bookUser.module.css";
import Image from "next/image";


// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BookUser = async ({ userId }) => {
  console.log(userId)

  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  console.log(user)

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Name</span>
        <span className={styles.username}>{user.name}</span>
      </div>
      <div className={styles.texts}>
        <span className={styles.title}>Phone No.</span>
        <span className={styles.username}>{user.phone}</span>
      </div>
      <div className={styles.texts}>
          <span className={styles.title}>Email</span>
          <span className={styles.username}>{user.email}</span>
      </div>
    </div>
  );
};

export default BookUser;