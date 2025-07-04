import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import MyState from "./context/myState";
import ServicePage from "./pages/ServicePage";
import ScrollTop from "./components/scrollTop";
import AllProductsPage from "./pages/AllProductsPage";
import UserProfile from "./components/UserProfile";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/adminDashboard/pages/AdminDashBoard";
import AdminHomePage from "./pages/adminDashboard/pages/AdminHomePage";
import AdminProfile from "./pages/adminDashboard/pages/AdminProfile";
import AdminViewBlogsPage from "./pages/adminDashboard/pages/AdminViewBlogsPage";
import AdminAddBlogs from "./pages/adminDashboard/pages/AdminAddBlogs";
import AdminViewUserAndAdministration from "./pages/adminDashboard/pages/AdminViewUserAndAdministration";
import BlogBySlug from "./components/blog/BlogBySlug";
import Blog from "./pages/Blog";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogBySlug />} />
          <Route path="/*" element={<NoPage />} />

          <>
            <Route
              path="admin-dashboard"
              element={
                <>
                  <AdminDashboard />
                </>
              }
            >
              <Route
                index={true}
                path="admin-home-page"
                element={<AdminHomePage />}
              />

              <Route
                path="admin-view-user-and-administration"
                element={<AdminViewUserAndAdministration />}
              />

              <Route
                path="admin-add-blog"
                element={<AdminAddBlogs />}
              />

              <Route
                path="admin-view-blogs"
                element={<AdminViewBlogsPage />}
              />

              <Route path="admin-profile-page" element={<AdminProfile />} />
            </Route>
          </>
        </Routes>
      </Router>
    </MyState>
  )
}

export default App