import { useState, useContext, useEffect } from "react";
import UserContext from "../assets/UserContext";
import { Button, Stack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Paginate = () => {
  const {currentPage, setCurrentPage, numberOfPages} = useContext(UserContext)
  const [focusedPage, setFocusedPage] = useState(1);
  const pageNumbers = [];

  useEffect(()=>{

    window.scrollTo(0, 0)
  }, [currentPage])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setFocusedPage(pageNumber);
  };

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setFocusedPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
      setFocusedPage(currentPage + 1);
    }
  };

  return (
    <Stack
      as="div"
      spacing={2}
      direction="row"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      maxWidth="550px"
      margin="50px auto 0"
    >
      <button
        aria-label="Previous Page"
        onClick={previousPage}
        className="prev-next"
        disabled={currentPage === 1}
      >
        <ArrowBackIcon />
      </button>
      {pageNumbers.map((number) => (
        <Button
          as="button"
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-btn ${currentPage === number ? "active" : ""} ${focusedPage === number ? "focused" : ""}`}
        >
          {number}
        </Button>
      ))}
      <button
        aria-label="Next Page"
        onClick={nextPage}
        className="prev-next"
        disabled={currentPage === numberOfPages}
      >
        <ArrowForwardIcon />
      </button>
    </Stack>
  );
};

export default Paginate;
