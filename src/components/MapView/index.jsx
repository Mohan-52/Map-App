import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { ClipLoader } from "react-spinners";
import { TileLayer, Marker, Popup } from "react-leaflet";
import {
  LoadingCon,
  ErrorContainer,
  FailureImage,
  ErrorText,
  RetryButton,
} from "../Dashboard/styledComponents";
import {
  StyledHeading,
  MapWrapper,
  StyledMapContainer,
} from "./styledComponents";

import Cookies from "js-cookie";
import "leaflet/dist/leaflet.css";

const statusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

function MapView() {
  const { cityId } = useParams();
  const [mapData, setMapData] = useState(null);
  const [apiStatus, setApiStatus] = useState(statusConstants.initial);

  useEffect(() => {
    async function fetchMapData() {
      setApiStatus(statusConstants.inProgress);
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        method: "Get",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      let apiUrl = cityId
        ? `https://syncthreadsassignment.onrender.com/api/map/${cityId}`
        : "https://syncthreadsassignment.onrender.com/api/map";

      try {
        const response = await fetch(apiUrl, options);

        const data = await response.json();
        if (response.ok) {
          setApiStatus(statusConstants.success);
          setMapData(data);
        } else {
          setApiStatus(statusConstants.failure);
        }
      } catch (error) {
        console.error("Error fetching map data:", error);
        setApiStatus(statusConstants.failure);
      }
    }

    fetchMapData();
  }, [cityId]);

  const loadingView = () => (
    <LoadingCon>
      <ClipLoader size={50} color={`#007bff`} />
    </LoadingCon>
  );

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
      <MapWrapper>
        <StyledHeading>
          {cityId ? `City: ${mapData.name}` : "India View"}
        </StyledHeading>
        <StyledMapContainer
          center={[mapData.latitude, mapData.longitude]}
          zoom={mapData.zoom}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {cityId && (
            <Marker position={[mapData.latitude, mapData.longitude]}>
              <Popup>{mapData.name}</Popup>
            </Marker>
          )}
        </StyledMapContainer>
      </MapWrapper>
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

export default MapView;
