import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding:16px;
    width: 520px;
    height:364px;
    background:#FFFFFF;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08), 0px 8px 24px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    margin:0 auto;
    div > a {
      position:absolute;
      top:0;
      right:0
    }
`
const Wrapper = styled.div`

font-family: Sora;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;


letter-spacing: -0.3px;
color: #252728;

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 24px;
width: 100%;
div {
  width: 100%;
}
h1 {
  font-family: Sora;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.3px;
  color: #252728;
}
`

const Title = styled.div`
margin: 0 auto;
letter-spacing: -0.1px;

color: #252728;

text-align: center;
order: 0;
flex-grow: 0;
margin: 24px 0px;
`

const labelForm = styled.div`
width: 136px;
height: 20px;
left: 0px;
top: 44px;

font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

color: #252728;
`
const Input = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 30px 0;
  position: relative;

  form {
    width:100%;
  }

  label {
    font-size: 12px;
    color: #BEC1C4;
    margin: 0 10px;
    font-family: Sora;
    position: absolute;
    left: 0;
    top: -15px;
    color: black;
    background-color: #FFFFFF;
  }

  input {
    width: 100%;
    outline: none;
    font-family: Sora, sans-serif;
    font-size: 16px;
    padding: 16px 0;
    color: black;
    border-radius: 8px;
    border: 1.5px solid #BEC1C4;
  }
  
`

const Button = styled.button`
display: flex;
align-items: center;
padding: 16px;

width: 100%;
height: 52px;
left: 0px;
top: 0px;
text-align:center;
background: #0A6629;
border-radius: 8px;
border: none;
outline: none;
color:#FFFFFF;
justify-content:center;
`
const Box = styled.div`
font-family: Sora;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;


letter-spacing: -0.3px;
color: #252728;

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 24px;
div {
  width: 100%;
  text-align: center;
}
`

const Hepler = styled.div`
font-family: Sora;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;


letter-spacing: -0.3px;
color: #252728;

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 24px;
width: 100%;
`

const SuccessMessage = styled.div`
font-family: Sora;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
/* identical to box height, or 117% */

letter-spacing: -0.3px;

/* Neutrals / 800 */

color: #252728;

`

export {Container,Wrapper,Title,labelForm,Input,Button,Box,Hepler,SuccessMessage}