import styled from "styled-components";

export const CityItem = styled.li`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  cursor: pointer;
`;

export const CityImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CityName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 8px 0;
`;

export const CityDetails = styled.p`
  margin: 4px 0;
  color: #555;
`;
