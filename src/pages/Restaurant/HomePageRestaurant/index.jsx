import { HeaderRestaurant } from "../../../components/Header/HeaderRestaurant";
import plusIcon from "../../../assets/button-icon.jpg";
import { Container, PlusIcon } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToRegisterAttendant } from "../../../routes/coordinator";
import attendantList from "../../Attendant/attendantList";
import { useState } from "react";
import Attendant from "../../../components/Attendant"
export const HomePageRestaurant = () => {
  const navigate = useNavigate();
  const [searchBar, setSearchBar] = useState("");
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
    });

    if (searchedAttendants.length) {
      return searchedAttendants;
    } else {
      return <span> Não encontramos 🙁 </span>;
    }
  };

  return (
    <Container>
      <HeaderRestaurant searchBar={searchBar} handleSearch={handleSearch} />
      {searchBar !== "" ? filterBySearch() : attendantsList}
      <PlusIcon
        src={plusIcon}
        onClick={() => goToRegisterAttendant(navigate)}
      />
    </Container>
  );
};
