"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    const router = useRouter();
    router.push("./login");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
