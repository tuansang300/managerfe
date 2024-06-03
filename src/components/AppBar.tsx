"use client";

import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session, status } = useSession();

  // Xử lý trạng thái tải
  if (status === "loading") {
    return (
      <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
        <p>Đang tải...</p>
      </header>
    );
  }

  // Tạo một mảng liên kết để giảm sự trùng lặp
  const links = [
    { href: "/", label: "Trang Chủ" },
    ...(session && session.user
      ? [{ href: "/dashboard", label: "Quản Lý" }]
      : []),
  ];

  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      {links.map((link) => (
        <Link
          key={link.href}
          className="text-2xl font-bold transition-colors hover:text-blue-500"
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
      <SignInButton />
    </header>
  );
};

export default AppBar;
