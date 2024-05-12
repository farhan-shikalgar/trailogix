import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Trailer Booking Site.</h1>
        <p className={styles.desc}>
        Welcome to Traillogix, your premier destination for hassle-free trailer bookings! 
         Traillogix has you covered.Offering various sizes and features to suit your needs.
        </p>
        <div className={styles.buttons}>
         <Link href="/about"><button className={styles.button}>Learn More</button></Link>
          <Link href="/book"><button className={styles.button}>Book Now</button></Link>
        </div>
        
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;