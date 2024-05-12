import { Booking } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";



export const GET = async (request,{params}) => {

    const {slug} = params;
    try {
      connectToDb();
  
      const post = await Booking.findOne({slug});
      return NextResponse.json(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post(booking)!");
    }
  };

//to  delete use method:"DELETE"
  export const DELETE = async (request,{params}) => {

    const {slug} = params;
    try {
      connectToDb();
  
      await Booking.deleteOne({slug});
      return NextResponse.json("booking post Deleted");
    } catch (err) {
      console.log(err);
      throw new Error("Failed to Delete post(booking)!");
    }
  };