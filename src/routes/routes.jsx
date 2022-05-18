import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStorage } from "../GlobalContext"
import { CommandPage } from "../pages/CommandPage"
import { EditProfilePage } from "../pages/EditProfilePage"
import { FinishRequestPage } from "../pages/FinishRequestPage"
import { HomePage } from "../pages/HomePage"
import { InitialPage } from "../pages/InitialPage"
import { LoginPage } from "../pages/LoginPage"
import { ProfilePage } from "../pages/ProfilePage"
import { RegisterAttendant } from "../pages/RegisterAttendant"
import { RequestPage } from "../pages/RequestPage"
import { RegisterClient } from "../pages/RegisterClient"
import { RegisterRestaurant } from "../pages/RegisterRestaurant"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"
import NewPasswordPage from "../pages/NewPasswordPage"
import VerifyEmailPage from "../pages/VerifyEmailPage"

const AppRoutes=()=>{
	return(
		<BrowserRouter>
		<GlobalStorage>
		<Routes>
			<Route path="/" element={<InitialPage/>}/>
			<Route path="/login" element={<LoginPage/>}/>
			<Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
			<Route path="/newpassword" element={<NewPasswordPage/>}/>
			<Route path="/verifyemail" element={<VerifyEmailPage/>}/>
			<Route path="/home" element={<HomePage/>}/>
			<Route path="/registerClient" element={<RegisterClient/>}/>
			<Route path="/registerAttendant" element={<RegisterAttendant/>}/>
			<Route path="/registerRestaurant" element={<RegisterRestaurant/>}/>
			<Route path="/profile" element={<ProfilePage/>}/>
			<Route path="/profile/edit" element={<EditProfilePage/>}/>
			<Route path="/command" element={<CommandPage/>}/>
			<Route path="/finishrequest" element={<FinishRequestPage/>}/>
			<Route path="/request" element={<RequestPage/>}/>
		</Routes>
		</GlobalStorage>
		</BrowserRouter>
	)
}
export default AppRoutes