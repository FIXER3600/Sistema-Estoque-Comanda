export const goToLoginPage=(navigate)=>{
	navigate("/login")
}
export const goToHomePage=(navigate)=>{
	navigate("/home")
}
export const goToRegisterClient=(navigate)=>{
	navigate("/registerClient")
}
export const goToRegisterAttendant=(navigate)=>{
	navigate("/registerAttendant")
}
export const goToRegisterRestaurant=(navigate)=>{
	navigate("/registerRestaurant")
}
export const goToNewPasswordPage=(navigate)=>{
	navigate("/newpassword")
}
export const goToVerifyEmailPage=(navigate)=>{
	navigate("/verifyemail")
}
export const goToProfilePage=(navigate)=>{
	navigate("/profile")
}
export const goToEditProfilePage=(navigate)=>{
	navigate("/profile/edit")
}
export const goToCommandPage=(navigate)=>{
	navigate("/command")
}
export const goToFinishReqPage=(navigate)=>{
	navigate("/finishrequest")
}
export const goToRequestPage=(navigate)=>{
	navigate("/request")
}
export const goToRestaurantPage=(navigate,id)=>{
	navigate(`/restaurant/${id}`)
}

