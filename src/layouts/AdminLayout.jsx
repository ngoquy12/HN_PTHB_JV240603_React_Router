import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import MenuAdmin from "./MenuAdmin";

// export default function AdminLayout() {
//   const isLogin = false;
//   return (
//     <div>
//       {!isLogin ? (
//         <Navigate to={"/"} />
//       ) : (
//         <>
//           <HeaderAdmin />
//           <div className="layout-flex">
//             <MenuAdmin />
//             <div className="main-content">
//               <Outlet />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

export default function AdminLayout() {
  return (
    <>
      <HeaderAdmin />
      <div className="layout-flex">
        <MenuAdmin />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
