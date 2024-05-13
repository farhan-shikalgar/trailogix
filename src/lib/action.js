"use server"
import { connectToDb } from "./utils";
import { Booking,User } from "./models";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs"
import { signIn, signOut } from "./auth";


//this is server side code for fetch and deleting
export const addPost = async (formData) => {

    console.log(formData)
    const { userId, 
        customerName,
        phoneNumber,
        trailerType,
        loadType,
        pickupDateTime,
        deliveryDateTime,
        specialRequest,
        slug  } = formData;

try {
    connectToDb();
    const newBooking = new Booking({
        userId,
        customerName,
        phoneNumber,
        trailerType,
        loadType,
        pickupDateTime,
        deliveryDateTime,
        specialRequest,
        slug 
    });

    await newBooking.save();
    console.log("saved to db");
    revalidatePath("/booking");
    revalidatePath("/admin")
    }catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
}

};


export const deletePost = async (formData) => {

    console.log(formData)
    const { id } = Object.fromEntries(formData);

try {
    connectToDb();
    

    await Booking.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/booking");
    }catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
}

};

export const addUser = async (prevState,formData) => {
  const { name, email,phone, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      name,
      email,
      phone,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};



//Here the api route starts





export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };




export const handleLogout = async () => {
    "use server";
    await signOut();
  };


  export const register = async (previousState, formData) => {
    const { name, email, phone , password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ name });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name,
        email,
        phone,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const login = async (prevState, formData) => {
    const { name, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { name, password });
    } catch (err) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };