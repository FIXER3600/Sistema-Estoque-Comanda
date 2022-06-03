import { Attendant } from "../../../components/Attendant";
import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant";
import plusIcon from "../../../assets/button-icon.jpg";
import { Container, PlusIcon } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToRegisterAttendant } from "../../../routes/coordinator";

export const HomePageRestaurant = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderRestaurant />
      <Attendant
        profileImg="https://s2.glbimg.com/XfSOZixA_jMLhaGTdeN0t4TVDYk=/i.glbimg.com/og/ig/infoglobo1/f/original/2019/04/25/garcom.png"
        name="José"
        age="27"
        gender="Masculino"
      />
      <Attendant
        profileImg="https://www.pr.senac.br/cursos/cursos_images/p/introducao_aos_servicos_de_garcom_21641063.jpg"
        name="Jessica"
        age="25"
        gender="Feminino"
      />

      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterAttendant(navigate)}
      />
    </Container>
  );
};
