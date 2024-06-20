import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import useFetch from "../assets/useFetch";
import { RepoDetailSkeleton as Skeleton } from "./Skeleton";
import {
  Button,
  Card,
  HStack,
  Stack,
  Divider,
  Text,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  // SkeletonText,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RepoDetail = () => {
  const { name } = useParams();
  const { repos: repo } = useFetch(
    "https://api.github.com/repos/victorrmark/" + name,
  );

  return (
    <>
      <Helmet>
        <title>Repo Detail</title>
      </Helmet>
      <Box
        as="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bg="gray.700"
      >
        {repo ? (
          <Card
            maxWidth="550px"
            width="100%"
            height={{ base: "100vh", lg: "auto" }}
            p="20px"
          >
            <CardHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              rowGap="10px"
            >
              <Heading size="md" textTransform="uppercase">
                {repo.name}
              </Heading>
              <Button
                as="a"
                variant="solid"
                href={repo.html_url}
                target="_blank"
              >
                View Repo
              </Button>
            </CardHeader>

            <CardBody>
              <HStack spacing="4" pt="10px" pb="10px">
                <Box width="200px">
                  <Text size="xs">
                    <span fontWeight="bold">Branch: </span>
                    <span>{repo.default_branch}</span>
                  </Text>
                </Box>
                <Box>
                  <Text size="xs">
                    <span fontWeight="bold">Forks: </span>
                    <span>{repo.forks}</span>
                  </Text>
                </Box>
              </HStack>

              <Divider />

              <HStack spacing="4" pt="10px" pb="10px">
                <Box width="200px">
                  <Text size="xs">
                    <span fontWeight="bold">Language: </span>
                    <span>{repo.language}</span>
                  </Text>
                </Box>
                <Box>
                  <Text size="xs">
                    <span fontWeight="bold">Visibility: </span>
                    <span>{repo.visibility}</span>
                  </Text>
                </Box>
              </HStack>

              <Divider />

              <HStack spacing="4" pt="10px" pb="10px">
                <Box width="200px">
                  <Text size="xs">
                    <span fontWeight="bold">Stars: </span>
                    <span>{repo.stargazers_count}</span>
                  </Text>
                </Box>
                <Box>
                  <Text size="xs">
                    <span fontWeight="bold">Created: </span>
                    <span>{repo.created_at}</span>
                  </Text>
                </Box>
              </HStack>
            </CardBody>

            <CardFooter>
              <Stack spacing={5} direction="row">
                
                <Button as={Link} to="/" leftIcon={<ArrowBackIcon />}>
                  Go Back
                </Button>

                {repo.homepage && (
                  <Button
                    as="a"
                    colorScheme="blue"
                    href={repo.homepage}
                    target="_blank"
                  >
                    Live Site
                  </Button>
                )}
                
              </Stack>
            </CardFooter>
          </Card>
        ) : (
          <Skeleton />
        )}
      </Box>
    </>
  );
};

export default RepoDetail;
