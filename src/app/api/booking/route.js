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