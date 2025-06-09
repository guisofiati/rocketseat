import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secoundary" | "danger" | "success"

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: "purple",
  secoundary: "orange",
  danger: "red",
  success: "green",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.secoundary};
  color: ${props => props.theme.white};
  
  /* ${props => {
    return css`
      background-color: ${buttonVariant[props.variant]}
    `
  }} */
`
