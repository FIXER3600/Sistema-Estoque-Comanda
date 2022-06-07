import { BrowserRouter, Route, Routes } from "react-router-dom";

import { EditProfilePage } from "../pages/EditProfilePage";
import { HomePage } from "../pages/Client/HomePageClient";
import { InitialPage } from "../pages/InitialPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterAttendant } from "../pages/Attendant/RegisterAttendant";
import { RegisterClient } from "../pages/Client/RegisterClient";
import { RegisterRestaurant } from "../pages/Restaurant/RegisterRestaurant";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import NewPasswordPage from "../pages/NewPasswordPage";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import { HomePageAttendant } from "../pages/Attendant/HomePageAttendant";
import { HomePageRestaurant } from "../pages/Restaurant/HomePageRestaurant";
import { RegisterProduct } from "../pages/Product/RegisterProduct";
import { AttendantDetailsPage } from "../pages/Attendant/AttendantDetailsPage";
import { RestaurantDetailsPage } from "../pages/Restaurant/RestaurantDetailsPage";
import { OrderDetailsPage } from "../pages/Order/OrderDetailsPage";
import { CartPage } from "../pages/Client/CartPage";
import { ProductPage } from "../pages/Product";
import { ProductDetailsPage } from "../pages/Product/ProductDetailsPage";
import { ProductEditPage } from "../pages/Product/ProductEditPage";
import { TablesPage } from "../pages/TablesPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/newpassword" element={<NewPasswordPage />} />
        <Route path="/verifyemail" element={<VerifyEmailPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homeAttendant" element={<HomePageAttendant />} />
        <Route path="/homeRestaurant" element={<HomePageRestaurant />} />
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/registerAttendant" element={<RegisterAttendant />} />
        <Route path="/registerRestaurant" element={<RegisterRestaurant />} />
        <Route path="/registerProduct" element={<RegisterProduct />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/order/:id" element={<OrderDetailsPage />} />
        <Route path="/attendant/:id" element={<AttendantDetailsPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/product/edit/:id" element={<ProductEditPage />} />
        <Route path="/tables" element={<TablesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
