import styled, { css } from "styled-components";

// estas son las características del boton
const Boton = styled.button`
  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  width: ${(props) => (props.largo ? "100%" : "auto")};

  &:hover {
    background: #44a559;
    color: #fff;
  }

  /*estas líneas cambian las propiedades de cualquier objeto css
  a la que le ponga negro. (ver botones incremento/decremento)*/

  ${(props) =>
    props.negro &&
    css`
      background: #000;
      color: #fff;
    `}
  ${(props) =>
    props.margenSuperior &&
    css`
      margin-top: 10px;
    `}  
  ${(props) =>
    props.margenDerecho &&
    css`
      margin-right: 10px;
    `}
`;

export default Boton;
