import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Trailogix</h2>
        <h1 className={styles.title}>
        With Trailogix, booking a trailer is simple and convenient.
        </h1>
        <p className={styles.desc}>
        Trailogix is your go-to platform for easily booking trailers for your transportation needs.
         Whether youre moving furniture, hauling equipment, or embarking on a road trip, find the perfect trailer quickly and securely
         With a seamless booking process and a range of trusted providers, Trailogix makes renting trailers hassle-free
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3 +</h1>
            <p>Loaded Truck Type</p>
          </div>
          <div className={styles.box}>
            <h1>5 +</h1>
            <p>Trailer Type</p>
          </div>
          <div className={styles.box}>
            <h1>1 +</h1>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;