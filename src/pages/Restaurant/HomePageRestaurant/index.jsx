import { Attendant } from "../../../components/Attendant";
import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant";
import plusIcon from "../../../assets/button-icon.jpg"
import { Container, PlusIcon } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToRegisterAttendant } from "../../../routes/coordinator";

export const HomePageRestaurant = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderRestaurant />
      <Attendant />
      <Attendant />
      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterAttendant(navigate)}
      />
    </Container>
  );
};
