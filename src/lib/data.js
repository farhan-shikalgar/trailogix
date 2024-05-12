// const users=[
//   {
//     "userId": "user123",
//     "id": 1,
//     "name": "John Doe",
//     "email": "john@example.com",
//     "phone": "1234567890",
//     "img": "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   },
//   {
//     "userId": "user456",
//     "id": 2,
//     "name": "Jane Smith",
//     "email": "jane@example.com",
//     "phone": "9876543210",
//     "img": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   },
//   {
//     "userId": "user789",
//     "id": 3,
//     "name": "Alice Johnson",
//     "email": "alice@example.com",
//     "phone": "5557778888",
//     "img": "https://randomuser.me/api/portraits/women/3.jpg"
//   },
//   {
//     "userId": "user321",
//     "id": 4,
//     "name": "Emma Davis",
//     "email": "emma@example.com",
//     "phone": "1231231234",
//     "img": "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     "userId": "user654",
//     "id": 5,
//     "name": "Michael Brown",
//     "email": "michael@example.com",
//     "phone": "5555555555",
//     "img": "https://randomuser.me/api/portraits/men/5.jpg"
//   },
//   {
//     "userId": "user987",
//     "id": 6,
//     "name": "Sophia Wilson",
//     "email": "sophia@example.com",
//     "phone": "9876543210",
//     "img": "https://randomuser.me/api/portraits/women/6.jpg"
//   },
//   {
//     "userId": "user654",
//     "id": 7,
//     "name": "Ethan Martinez",
//     "email": "ethan@example.com",
//     "phone": "1234567890",
//     "img": "https://randomuser.me/api/portraits/men/7.jpg"
//   },
//   {
//     "userId": "user987",
//     "id": 8,
//     "name": "Olivia Taylor",
//     "email": "olivia@example.com",
//     "phone": "5557778888",
//     "img": "https://randomuser.me/api/portraits/women/8.jpg"
//   }
// ]



  



// const posts= [
//   {
//     "userId": "user123",
//     "id": 1,
//     "customerName": "John Doe",
//     "phoneNumber": "1234567890",
//     "trailerType": "Flat Deck",
//     "loadType": "Medium",
//     "pickupDateTime": "2024-05-15T10:00",
//     "deliveryDateTime": "2024-05-20T14:00",
//     "specialRequest": "Handle with care"
//   },
//   {
//     "userId": "user456",
//     "id": 2,
//     "customerName": "Jane Smith",
//     "phoneNumber": "9876543210",
//     "trailerType": "Truck",
//     "loadType": "Heavy",
//     "pickupDateTime": "2024-05-18T09:30",
//     "deliveryDateTime": "2024-05-25T12:00",
//     "specialRequest": "Fragile items"
//   },
//   {
//     "userId": "user789",
//     "id": 3,
//     "customerName": "Alice Johnson",
//     "phoneNumber": "5557778888",
//     "trailerType": "Step Deck",
//     "loadType": "Medium",
//     "pickupDateTime": "2024-05-20T14:00",
//     "deliveryDateTime": "2024-05-27T10:30",
//     "specialRequest": ""
//   },
//   {
//     "userId": "user321",
//     "id": 4,
//     "customerName": "Emma Davis",
//     "phoneNumber": "1231231234",
//     "trailerType": "Temperature Controlled Dry Van",
//     "loadType": "Light",
//     "pickupDateTime": "2024-05-22T11:00",
//     "deliveryDateTime": "2024-05-28T16:45",
//     "specialRequest": "Perishable goods"
//   },
//   {
//     "userId": "user654",
//     "id": 5,
//     "customerName": "Michael Brown",
//     "phoneNumber": "5555555555",
//     "trailerType": "Double Drop",
//     "loadType": "Heavy",
//     "pickupDateTime": "2024-05-25T08:00",
//     "deliveryDateTime": "2024-05-31T14:30",
//     "specialRequest": "Large equipment"
//   },
//   {
//     "userId": "user987",
//     "id": 6,
//     "customerName": "Sophia Wilson",
//     "phoneNumber": "9876543210",
//     "trailerType": "Truck",
//     "loadType": "Medium",
//     "pickupDateTime": "2024-05-27T13:30",
//     "deliveryDateTime": "2024-06-03T09:00",
//     "specialRequest": ""
//   },
//   {
//     "userId": "user654",
//     "id": 7,
//     "customerName": "Ethan Martinez",
//     "phoneNumber": "1234567890",
//     "trailerType": "Flat Deck",
//     "loadType": "Light",
//     "pickupDateTime": "2024-05-30T10:30",
//     "deliveryDateTime": "2024-06-05T16:15",
//     "specialRequest": "Fragile items"
//   },
//   {
//     "userId": "user987",
//     "id": 8,
//     "customerName": "Olivia Taylor",
//     "phoneNumber": "5557778888",
//     "trailerType": "Step Deck",
//     "loadType": "Heavy",
//     "pickupDateTime": "2024-06-02T14:00",
//     "deliveryDateTime": "2024-06-08T11:45",
//     "specialRequest": "Handle with care"
//   }
// ]


// export const getPosts = async ()=>{
//     return posts;
// }

// export const getPost = async (id)=>{
//     const post = posts.find((post)=>post.id === parseInt(id));
//     return post;
// }

// export const getUser= async (id) =>{
//     return users.find((user) => user.id === parseInt(id));
// }
import { Booking,User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Booking.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bookings!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Booking.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  console.log(id)
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    console.log(user)
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};