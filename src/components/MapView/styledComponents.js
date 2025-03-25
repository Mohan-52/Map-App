import styled from "styled-components";
import { MapContainer } from "react-leaflet";

// Heading Style
export const StyledHeading = styled.h2`
  font-size: 1.8rem;
  color: #003366; /* Dark blue for a professional look */
  text-align: center;
  margin-bottom: 20px;
`;

// Map Wrapper
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #f8faff; /* Light bluish-white background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Map Container Styles
export const StyledMapContainer = styled(MapContainer)`
  height: 500px;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #007bff; /* Blue border for a polished UI */
`;
