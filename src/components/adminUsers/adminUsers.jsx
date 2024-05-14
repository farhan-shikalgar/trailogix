import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  console.log(typeof users);

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Image
                  src={user.img || "/noAvatar.png"}
                  alt=""
                  width={50}
                  height={50}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={styles.userButton}>Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
