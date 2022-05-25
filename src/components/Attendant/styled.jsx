import styled from "styled-components";

export const Container = styled.div`
  width: 20.5rem;
  height: auto;
  margin-top: 4rem;
  border-radius: 8px;
  border: 1px solid rgb(184, 184, 184);
  cursor: pointer;
  img {
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: fill;
  }
  span {
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.75rem 1rem 0.25rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: red;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  span {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: rgb(184, 184, 184);
  }
`;

export const ShippingText = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: grey;
  text-align: end;
`;
