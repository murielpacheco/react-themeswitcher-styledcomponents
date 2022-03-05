import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;

   background-color: ${props => props.theme.colors.backgroundColor};
`

export const Content = styled.div`
   display: flex;
   height: 85%;
   margin-top: 2rem;
   gap: 2rem;
   padding: 0 2rem;
`

export const LeftContent = styled.aside`
   width: 60%;
   height: 70%;
   background-color: ${props => props.theme.colors.lightGray};
   border-radius: 5px;

`
export const RightContent = styled.aside`
   width: 40%;
   height: 60%;
   background-color: ${props => props.theme.colors.lightGray};
   border-radius: 5px;
`