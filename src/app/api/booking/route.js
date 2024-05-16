import { Booking } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";



export const GET = async (request) => {
    try {
      connectToDb();
  
      const posts = await Booking.find();
      return NextResponse.json(posts);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch Bookings(post)!");
    }
  };

  export const POST = async (request) => {
    try {
        connectToDb();

        const data = await request.json(); 

        const newBooking = new Booking(data); 

        await newBooking.save(); 

        return NextResponse.json(newBooking, { status: 201 }); 
    } catch (err) {
        console.log(err);
        throw new Error("Failed to add new booking!");
    }
};