import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-top: 5vh;
`

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const MainHeading = styled.h1`
  font-family: roboto;
  font-size: 35px;
  font-weight: 500;
  color: #1e293b;
`

export const ButtonsContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`

export const ResultContainer = styled.div`
  padding: 60px;
`

export const Image = styled.img`
  width: 100%;
`
