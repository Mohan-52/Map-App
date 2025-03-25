import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CityItem,
  CityImage,
  CityDetails,
  CityName,
} from "./styled.Components";

function City(props) {
  const { cityDetails } = props;
  const { id, country, imageUrl, name, population, region } = cityDetails;

  const navigate = useNavigate();
  const handleCityClick = () => {
    navigate(`/map/${id}`);
  };

  return (
    <CityItem onClick={handleCityClick}>
      <CityImage src={imageUrl} alt={name} />
      <CityName>{name}</CityName>
      <CityDetails>{country}</CityDetails>
      <CityDetails>Population: {population}</CityDetails>
      <CityDetails>Region: {region}</CityDetails>
    </CityItem>
  );
}

export default City;
