import useFetch from "../assets/useFetch";
import {
  Avatar,
  Heading,
  Box,
  Text,
  Button,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const UserInfo = () => {
  const { repos: data } = useFetch("https://api.github.com/users/victorrmark");

  return (
    <>
      {data ? (
        <Box
          display={{ base: "flex", lg: "block" }}
          position="fixed"
        >
          <Avatar
            size={{ base: "md", lg: "2xl" }}
            src={data.avatar_url}
            mr={{ base: "10px" }}
          />
          <Box>
            <Heading as="h5" size="lg" color="white">
              {data.name}
            </Heading>
            <Box>
              <Box display="flex" gap="10px" color="white">
                <Text as="b">UserName:</Text>
                <Text>{data.login}</Text>
              </Box>
              <Button
                as="a"
                target="_blank"
                href={data.html_url}
                mt="10px"
                size={{ base: "sm", lg: "md" }}
              >
                View Profile
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box padding="2" boxShadow="lg" display={{ base: "flex", lg: "block" }}>
          <SkeletonCircle size="10" mr="2" />
          <SkeletonText
            mt={{ base: "0", lg: "4" }}
            noOfLines={{base: 2, lg: 4}}
            spacing={{ base: "2", lg: "4" }}
            skeletonHeight={{ base: "1", lg: "2" }}
            maxWidth='500px'
          />
        </Box>
      )}
    </>
  );
};

export default UserInfo;
