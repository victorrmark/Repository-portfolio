import { useState, useContext } from 'react'
import UserContext from '../assets/UserContext';
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'


const SearchFilter = () => {
  const {repos, setFilteredRepos} = useContext(UserContext)
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = repos.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredRepos(filteredItems);
  };

  return (
    <InputGroup maxWidth="550px" margin="0 auto">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search Repo"
          value={searchItem}
          onChange={handleInputChange}
          maxWidth="550px"
        />
      </InputGroup>
  )
}

export default SearchFilter