import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant";
import plusIcon from "../../../assets/button-icon.jpg";
import { Container, PlusIcon } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToAttendantDetailsPage, goToRegisterAttendant } from "../../../routes/coordinator";
import attendantList from "../../Attendant/attendantList";
import { useState } from "react";
import Attendant from "../../../components/Attendant"
import { useDispatch } from "react-redux";
import {Select} from "@chakra-ui/react"
export const HomePageRestaurant = () => {

  const navigate = useNavigate();
  const [searchBar, setSearchBar] = useState("");
  const [ocupation,setOcupation]=useState("");

  const handleOcupation=({target})=>{
    setOcupation(target.value)
  }

  const handleSearch = ({ target }) => {
    setSearchBar(target.value);
  };
  const attendantsList = attendantList?.map((attendant) => {

    return (
      <Attendant
      attendant={attendant}
        key={attendant.id}
      
      />
    );
  });
  const filterBySearch = () => {
    const searchedAttendants = attendantsList.filter(({props}) => {
      return props.attendant.name
        ?.toLowerCase()
        .includes(searchBar.toLowerCase());
    })

    if (searchedAttendants.length) {
      return searchedAttendants;
    } else {
      return <p> Não encontramos 🙁 </p>;
    }
  };

  const filterByOcupation=()=>{
    const ocupationAttendants=attendantsList.filter(({props})=>{
      console.log(props);
      return props.attendant.status
      .includes(ocupation)
    })
    return ocupationAttendants
  }

  return (
    <Container>
      <Select
        type="text"
        size="md"
        mt="3rem"
        w="20rem"
        placeholder="Atividade atual"
        onChange={handleOcupation}>
        <option value="Ocupado">Ocupado</option>
        <option value={"Desocupado"}>Desocupado</option>
      </Select>
      <HeaderRestaurant searchBar={searchBar} handleSearch={handleSearch} />
      {ocupation !== "" ? filterByOcupation(): searchBar !== "" ? filterBySearch() : attendantsList}
      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterAttendant(navigate)}
      />
      
    </Container>
  );
};
