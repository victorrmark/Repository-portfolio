import { Grid, GridItem } from "@chakra-ui/react";
import { Helmet } from 'react-helmet-async'
import UserInfo from "./UserInfo";
import Repos from "./Repos";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Github Repo Portfolio</title>
      </Helmet>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem
          colSpan={{ base: 5, lg: 1 }}
          bg="gray.700"
          minHeight={{ base: "150px", lg: "100vh" }}
          p="30px"
          position={{ base: "fixed", lg: "relative" }}
          width={{ base: "100vw", lg: "auto" }}
          zIndex={1}
        >
          <UserInfo />
        </GridItem>
        <GridItem
          colSpan={{ base: 5, lg: 4 }}
          pl={{ base: "5px", lg: "50px" }}
          pr={{ base: "5px", lg: "50px" }}
          mt={{ base: "170px", lg: 0 }}
        >
          <Repos />
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
