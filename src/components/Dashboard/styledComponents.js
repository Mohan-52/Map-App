import styled from "styled-components";

export const CityList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

export const LoadingCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const FailureImage = styled.img`
  width: 300px;
  max-width: 100%;
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  color: #003366; /* Dark blue */
  margin: 10px 0;
`;

export const RetryButton = styled.button`
  background-color: #007bff; /* Primary blue */
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue */
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0;
  font-size: 1.1rem;
  color: #003366;
  flex-wrap: wrap;

  @media (max-width: 320px) {
    gap: 5px;
    font-size: 0.9rem;
  }
`;

export const PageInfo = styled.p`
  margin: 0;
  font-weight: bold;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #b0c4de;
    cursor: not-allowed;
  }

  @media (max-width: 320px) {
    padding: 6px 10px;
    font-size: 0.85rem;
  }
`;

export const PageNumberButton = styled(PaginationButton)`
  background-color: transparent;
  color: #003366;
  border: 2px solid #007bff;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  ${({ active }) =>
    active === "true" &&
    `
    background-color: #007bff;
    color: white;
  `}

  @media (max-width: 320px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`;
export const Heading = styled.h1`
  font-size: 2rem;
  color: #003366; /* Dark blue */
  text-align: center;
  margin: 10px;
  font-weight: bold;
  text-transform: capitalize;
`;
