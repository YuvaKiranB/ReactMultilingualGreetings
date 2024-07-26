import styled from 'styled-components'

export const ButtonContainer = styled.li``

export const Button = styled.button`
  padding: 8px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 50px;
  font-family: roboto;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #db1c48;
  cursor: pointer;
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
`
