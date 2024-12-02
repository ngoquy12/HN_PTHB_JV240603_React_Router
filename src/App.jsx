import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import React, { Suspense, useEffect } from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";

// Ứng dụng lazy loading
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ListProduct = React.lazy(() => import("./pages/ListProduct"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const UserLayout = React.lazy(() => import("./pages/UserLayout"));
const Profile = React.lazy(() => import("./pages/Profile"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ProductManager = React.lazy(() => import("./pages/ProductManager"));
const UserManager = React.lazy(() => import("./pages/UserManager"));
const ListPost = React.lazy(() => import("./pages/ListPost"));

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Chuyển vè trang trước đấy
  const handlePrev = () => {
    navigate(-1);
  };

  // Chuyển sang trang tiếp theo
  const handleNext = () => {
    navigate(2);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Base componet lazy loading
  const BaseLazyLoad = ({ children }) => {
    return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: 16,
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/list-post">List post</NavLink>
      </nav>
      {/* <nav>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </nav> */}
      <Routes>
        <Route
          path="/"
          element={
            <BaseLazyLoad>
              <Home />
            </BaseLazyLoad>
          }
        />
        <Route
          path="/about"
          element={
            <BaseLazyLoad>
              <About />
            </BaseLazyLoad>
          }
        />
        <Route
          path="/contact"
          element={
            <BaseLazyLoad>
              <Contact />
            </BaseLazyLoad>
          }
        />
        <Route
          path="/list-product"
          element={
            <BaseLazyLoad>
              <ListProduct />
            </BaseLazyLoad>
          }
        />
        <Route
          path="/product-detail/:productId/:productName"
          element={
            <BaseLazyLoad>
              <ProductDetail />
            </BaseLazyLoad>
          }
        />
        <Route
          path="*"
          element={
            <BaseLazyLoad>
              <NotFound />
            </BaseLazyLoad>
          }
        />
        <Route
          path="/user"
          element={
            <BaseLazyLoad>
              <UserLayout />
            </BaseLazyLoad>
          }
        >
          {/* Những route con trực tiếp của component UserLayout */}
          <Route
            path="profile"
            element={
              <BaseLazyLoad>
                <Profile />
              </BaseLazyLoad>
            }
          />
          <Route
            path="change-password"
            element={
              <BaseLazyLoad>
                <ChangePassword />
              </BaseLazyLoad>
            }
          />
        </Route>

        <Route
          path="/admin"
          element={
            <BaseLazyLoad>
              <ProtectedRoutes>
                <AdminLayout />
              </ProtectedRoutes>
            </BaseLazyLoad>
          }
        >
          <Route
            index={true}
            element={
              <BaseLazyLoad>
                <Dashboard />
              </BaseLazyLoad>
            }
          />
          <Route
            path="product-manager"
            element={
              <BaseLazyLoad>
                <ProductManager />
              </BaseLazyLoad>
            }
          />
          <Route
            path="user-manager"
            element={
              <BaseLazyLoad>
                <UserManager />
              </BaseLazyLoad>
            }
          />
        </Route>

        <Route
          path="/list-post"
          element={
            <BaseLazyLoad>
              <ListPost />
            </BaseLazyLoad>
          }
        />
      </Routes>
    </>
  );
}

export default App;
