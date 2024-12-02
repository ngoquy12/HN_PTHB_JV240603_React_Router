import React from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <h3>UserLayout</h3>
      <header>Header layout</header>
      {/* Hiển thị ra nội dung của các component con */}
      <Outlet />
      <footer>Footer layout</footer>
    </div>
  );
}
