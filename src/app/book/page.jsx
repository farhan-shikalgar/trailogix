import React from "react";
import { auth } from "@/lib/auth";
import BookingForm from "@/components/bookingForm/bookingForm";
import styles from "./book.module.css";

const Contact = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <BookingForm userId={session.user.id} />
    </div>
  );
};

export default Contact;
