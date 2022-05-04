import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStorage } from "../GlobalContext"
import { CommandPage } from "../pages/CommandPage"
import { EditProfilePage } from "../pages/EditProfilePage"
import { FinishRequestPage } from "../pages/FinishRequestPage"
import { HomePage } from "../pages/HomePage"
import { InitialPage } from "../pages/InitialPage"
import { LoginPage } from "../pages/LoginPage"
import { ProfilePage } from "../pages/ProfilePage"
import { RequestPage } from "../pages/RequestPage"
import { SignInPage } from "../pages/SignInPage"

const AppRoutes=()=>{
	return(
		<BrowserRouter>
		<GlobalStorage>
		<Routes>
			<Route path="/" element={<InitialPage/>}/>
			<Route path="/login" element={<LoginPage/>}/>
			<Route path="/home" element={<HomePage/>}/>
			<Route path="/sign" element={<SignInPage/>}/>
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