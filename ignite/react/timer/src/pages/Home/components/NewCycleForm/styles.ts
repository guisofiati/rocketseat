import styled from "styled-components"

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme["gray-100"]};
`

const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  height: 2.5rem;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${props => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color:  ${props => props.theme["green-500"]};
  }

  &::placeholder {
    color:  ${props => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`