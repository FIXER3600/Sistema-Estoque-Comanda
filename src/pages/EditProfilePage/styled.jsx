
import styled from "styled-components"

export const Container = styled.div`
  margin: 60px 0;
  font-family: "Roboto";
`

export const ProfileDetails = styled.div`
  margin: 64px 0 80px 0;
`
export const UserImg=styled.img`
 margin-left: 5rem;
 max-width:200px;
 max-height: 2000px;
`

export const DatesDiv = styled.div`
  margin-right: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const UserName = styled.span`
  height: auto;
  margin: 1rem;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  margin-left: 2.5rem;
  
  
`
export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem 1rem;
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`
export const AddressTitle = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  margin: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: grey;
`
export const Email = styled.span`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.125rem 1rem 0.5rem;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  
`
export const DivEmail=styled.div`

p{margin: 1rem;}
input{margin-left:1rem; margin-bottom:1rem}
border-bottom: 0.1rem solid black;
`
export const DivCPF=styled.div`
p{margin: 1rem;}
input{margin-left:1rem}
border-bottom: 0.1rem solid black;
`
export const DivTel=styled.div`
p{margin: 1rem;}
input{margin-left:1rem}
border-bottom: 0.1rem solid black;
`
export const Tel=styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const CPF = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`

export const Path = styled.div`
  height: 0.063rem;
  margin: 0.5rem 1rem 1rem;
  border: solid 1px black;
`

export const Input=styled.input`
display: none;
`