import mongoose from "mongoose";

const userSchema = new mongoose.Schema({   
 

    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
        type: String,
      },
    phone: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
      },
    
  },{ timestamps: true }
);



const trailerBookingSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    
    customerName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    trailerType: {
      type: String,
      required: true
    },
    loadType: {
      type: String,
      required: true
    },
    pickupDateTime: {
      type: Date,
      required: true
    },
    deliveryDateTime: {
      type: Date
    },
    specialRequest: {
      type: String,
      
    },
    slug: {
        type: String,
        required: true,
        unique: true,
      },
  },{ timestamps: true }
);


export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Booking = mongoose.models?.Booking || mongoose.model("Booking", trailerBookingSchema);