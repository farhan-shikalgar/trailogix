import React from 'react'
import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminBooks from '@/components/adminBooks/adminBooks';
import AdminPreview from '@/components/adminPreview/adminPreview';
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminBooks />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPreview bookid = "second-booking"/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;