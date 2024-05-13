"use client";



import { addPost } from "@/lib/action";
import styles from "./bookingForm.module.css";
import { useFormState } from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Link from "next/link";


// const uniqueSlug = Date.now().toString();
// const uniqueSlug = `${uuidv4()}-${Date.now()}`; 
// const uniqueSlug = `${uuidv4()}${Date.now()}`.replace(/[^0-9]/g, '').substring(0, 10);




const BookingForm = ({userId}) => {
    // const [state, formAction] = useFormState(addPost);
    // const [isBookingSubmitted, setIsBookingSubmitted] = useState(false); 
    const [formData, setFormData] = useState({
      customerName: "",
      phoneNumber: "",
      trailerType: "",
      loadType: "",
      pickupDateTime: "",
      deliveryDateTime: "",
      specialRequest: ""
  });
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [error, setError] = useState(null);
  // console.log(userId)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Name:', name);
    console.log('Value:', value);
    setFormData({ ...formData, [name]: value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const uniqueSlug = `${uuidv4()}${Date.now()}`.replace(/[^0-9]/g, '').substring(0, 10);
      const bookingData = { 
          userId,
          customerName: formData.customerName,
          phoneNumber: formData.phoneNumber,
          trailerType: formData.trailerType,
          loadType: formData.loadType,
          pickupDateTime: formData.pickupDateTime,
          deliveryDateTime: formData.deliveryDateTime,
          specialRequest: formData.specialRequest,
          slug: uniqueSlug
      };
      console.log(bookingData)
      await addPost(bookingData); // Call function to add booking
      setIsBookingSubmitted(true); // Update state to indicate booking is submitted
      setFormData({ // Clear form fields after submission
          customerName: "",
          phoneNumber: "",
          trailerType: "",
          loadType: "",
          pickupDateTime: "",
          deliveryDateTime: "",
          specialRequest: ""
      });
  } catch (error) {
      setError("Failed to submit booking. Please try again."); // Handle error
  }
};
  
  return (
    <div className={styles.cont}>
    <form  onSubmit={handleSubmit} className={styles.container}>
      <h1>Do a new Booking</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" />
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      
  <select id="trailerType" name="trailerType"   value={formData.trailerType} onChange={handleChange} required>
    <option value="" disabled selected>Select Trailer Type</option>
    <option value="Truck">Truck</option>
    <option value="Flat Deck">Flat Deck</option>
    <option value="Step Deck">Step Deck</option>
    <option value="Double Drop">Double Drop</option>
    <option value="Temperature Controlled Dry Van">Temperature Controlled Dry Van</option>
  </select>


  <select id="loadType" name="loadType" value={formData.loadType}  onChange={handleChange}  required>
    <option value="" disabled selected>Select Load Type</option>
    <option value="Light">Light</option>
    <option value="Medium">Medium</option>
    <option value="Heavy">Heavy</option>
  </select>

<input type="datetime-local" name="pickupDateTime" value={formData.pickupDateTime} onChange={handleChange} placeholder="Pickup Date and Time" required/>
<input type="datetime-local" name="deliveryDateTime" value={formData.deliveryDateTime} onChange={handleChange} placeholder="Delivery Date and Time"/>

<input type="text" name="specialRequest"  value={formData.specialRequest} onChange={handleChange} placeholder="Special Request" />
<input type="hidden" name="slug"  />    
      
      <button type="submit">Book!</button>
      {/* {state?.error} */}
    </form>
      {isBookingSubmitted && <Link className={styles.container} href="/booking"><button ><p>Booking submitted successfully!.Check bookings</p></button></Link>}

    </div>
  );
};
export default BookingForm