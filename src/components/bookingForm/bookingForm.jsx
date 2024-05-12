"use client";



import { addPost } from "@/lib/action";
import styles from "./bookingForm.module.css";
import { useFormState } from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


const uniqueSlug = Date.now().toString();



const BookingForm = ({userId}) => {
    // const [state, formAction] = useFormState(addPost);
  console.log(userId)


  
  return (
    <form action={addPost} className={styles.container}>
      <h1>Do a new Booking</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="customerName" placeholder="Customer Name" />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" />
      <div>
  <select id="trailerType" name="trailerType" required>
    <option value="" disabled selected>Select Trailer Type</option>
    <option value="Truck">Truck</option>
    <option value="Flat Deck">Flat Deck</option>
    <option value="Step Deck">Step Deck</option>
    <option value="Double Drop">Double Drop</option>
    <option value="Temperature Controlled Dry Van">Temperature Controlled Dry Van</option>
  </select>
</div>
<div>
  <select id="loadType" name="loadType" required>
    <option value="" disabled selected>Select Load Type</option>
    <option value="Light">Light</option>
    <option value="Medium">Medium</option>
    <option value="Heavy">Heavy</option>
  </select>
</div>
<input type="datetime-local" name="pickupDateTime" placeholder="Pickup Date and Time" required/>
<input type="datetime-local" name="deliveryDateTime" placeholder="Delivery Date and Time"/>
<input type="text" name="specialRequest" placeholder="specialRequest" rows={10} />
<input type="hidden" name="slug" value={uniqueSlug} />    
      
      <button>Add</button>
      {/* {state?.error} */}
    </form>
  );
};
export default BookingForm