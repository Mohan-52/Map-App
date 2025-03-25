import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import NavBar from "../NavBar";
import City from "../City";
import Cookies from "js-cookie";
import {
  CityList,
  LoadingCon,
  ErrorContainer,
  FailureImage,
  ErrorText,
  RetryButton,
  PaginationContainer,
  PageInfo,
  PaginationButton,
  PageNumberButton,
  Heading,
} from "./styledComponents";

const statusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

function Dashboard() {
  const [apiStatus, setApiStatus] = useState(statusConstants.initial);
  const [cities, setCities] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getDashboard() {
      setApiStatus(statusConstants.inProgress);
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = `https://syncthreadsassignment.onrender.com/api/dashboard?page=${currentPage}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        const updatedData = data.map((city) => ({
          id: city.id,
          country: city.country,
          imageUrl: city.image_url,
          latitude: city.latitude,
          longitude: city.longitude,
          name: city.name,
          population: city.population,
          region: city.region,
        }));

        if (response.ok) {
          setApiStatus(statusConstants.success);
          setCities(updatedData);
        } else {
          setApiStatus(statusConstants.failure);
        }
      } catch (error) {
        console.log(error);
        setApiStatus(statusConstants.failure);
      }
    }

    getDashboard();
  }, [currentPage]);

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onNext = () => {
    if (currentPage < 5) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const loadingView = () => (
    <LoadingCon>
      <ClipLoader size={50} color={`#007bff`} />
    </LoadingCon>
  );

  const Pagination = () => {
    const totalPages = 5;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <PaginationContainer>
        <PageInfo>{`${(currentPage - 1) * 12 + 1} to ${
          currentPage * 12
        } of 60`}</PageInfo>

        <PaginationButton onClick={onPrevious} disabled={currentPage === 1}>
          Prev
        </PaginationButton>

        {pages.map((page) => (
          <PageNumberButton
            key={page}
            onClick={() => setCurrentPage(page)}
            active={(currentPage === page).toString()}
          >
            {page}
          </PageNumberButton>
        ))}

        <PaginationButton
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    );
  };

  const renderFailureView = () => (
    <ErrorContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure-img"
      />
      <ErrorText>Something went wrong! Please try again.</ErrorText>
      <RetryButton onClick={() => window.location.reload()}>Retry</RetryButton>
    </ErrorContainer>
  );
  const succesView = () => (
    <>
      <Heading>Home Dashboard</Heading>
      <CityList>
        {cities.map((cityDetails) => (
          <City cityDetails={cityDetails} key={cityDetails.id} />
        ))}
      </CityList>
      {Pagination()}
    </>
  );

  const renderViews = () => {
    switch (apiStatus) {
      case statusConstants.inProgress:
        return loadingView();
      case statusConstants.success:
        return succesView();
      case statusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar />

      {renderViews()}
    </div>
  );
}

export default Dashboard;
