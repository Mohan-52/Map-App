import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const Form = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
`;

export const Already = styled.p`
  margin: 20px 0;
`;
