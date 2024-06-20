import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const RepoSkeleton = () => {
  return (
    <Card padding="6" boxShadow="lg" bg="white" height="250px">
      <CardHeader>
        <SkeletonText noOfLines={1} skeletonHeight="2" />
      </CardHeader>
      <CardBody>
        <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
      <CardFooter>
        <SkeletonText noOfLines={1} skeletonHeight="2" />
      </CardFooter>
    </Card>
  );
};

const RepoDetailSkeleton = () => {
  return (
    <Card
      padding="6"
      boxShadow="lg"
      bg="white"
      maxWidth="550px"
      width="100%"
      height={{ base: "100vh", lg: "350px" }}
    >
      <CardHeader>
        <SkeletonText mt="4" noOfLines={1} skeletonHeight="2" />
      </CardHeader>
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
      <CardFooter>
        <Button as={Link} to="/" leftIcon={<ArrowBackIcon />}>
          Go Back
        </Button>
      </CardFooter>
    </Card>
  );
};

export { RepoDetailSkeleton, RepoSkeleton };
