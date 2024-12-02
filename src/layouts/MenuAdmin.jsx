import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuAdmin() {
  return (
    <div>
      <menu className="menu-admin">
        <NavLink end to="/admin">
          Dashboard
        </NavLink>
        <NavLink to="/admin/user-manager">User Manager</NavLink>
        <NavLink to="/admin/product-manager">Product Manager</NavLink>
      </menu>
    </div>
  );
}
