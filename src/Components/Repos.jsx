import { Link as ReactLink } from "react-router-dom";
import { useState } from "react";
import SearchFilter from "./SearchFilter";
import useFetch from "../assets/useFetch";
import NewRepoModal from "./NewRepoModal";
import UserContext from "../assets/UserContext";
import Paginate from "./Paginate";
import { RepoSkeleton as Skeleton } from "./Skeleton";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";

const Repos = () => {
  const { repos, setRepos, filteredRepos, setFilteredRepos, error } = useFetch(
    "https://api.github.com/users/victorrmark/repos",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    filteredRepos && filteredRepos.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages =
    filteredRepos && Math.ceil(filteredRepos.length / postsPerPage);

  return (
    <UserContext.Provider value={{repos, setRepos, setFilteredRepos, currentPage, setCurrentPage, numberOfPages}}>

      <Box
        as="div"
        pt={{ base: 0, lg: "35px" }}
        height="100%"
      >

        <SearchFilter  />

        <Divider borderColor="gray.200" mt='15px'/>

        {filteredRepos && filteredRepos.length === 0 && (
          <Box>
            <Heading
              as="h4"
              size="md"
              margin="0 auto"
              mt="30px"
              textAlign="center"
            >
              No repository matches your search term
            </Heading>
          </Box>
        )}

        {error && (
          <Box textAlign='center' mt="10px" > 

          <Heading as="h4" size="md" margin="0 auto" >
            Error: {error}
          </Heading>
          <Text fontSize="xl" >
              Check your Internet Connection and Reload the page
            </Text>
          </Box>
        )}

        {repos && filteredRepos ? (
          <Box as="div" p="20px">
            <Box mb='15px' display='flex' justifyContent='flex-end'>
              {/* <Heading>Repository Portfolio</Heading> */}
              <NewRepoModal />
            </Box>
            <SimpleGrid spacing={10} minChildWidth={{ lg: "350px" }}>
              {currentPosts.map((d) => {
                return (
                  <Card key={d.id}>
                    <CardHeader>
                      <Heading as="h3" size="md" textTransform="uppercase">
                        {d.name}
                      </Heading>
                    </CardHeader>
                    <Divider borderColor="gray.200" />
                    <CardBody>
                      <Text>Language: {d.language}</Text>
                      <Text>Created: {d.created_at}</Text>
                      <Text>Visibility: {d.visibility}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button
                        as={ReactLink}
                        to={`/repos/${d.name}`}
                        variant="ghost"
                      >
                        View More
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </SimpleGrid>
            <Paginate />
          </Box>
        ) : (
          <SimpleGrid p="20px" spacing={8} minChildWidth={{ lg: "350px" }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </SimpleGrid>
        )}
      </Box>
    </UserContext.Provider>
  );
};

export default Repos;
