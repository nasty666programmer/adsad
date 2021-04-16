import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    padding:16px;
    width: 520px;
    height:364px;
    background:#FFFFFF;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08), 0px 8px 24px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    margin:0 auto;
`
const Wrapper = styled.div`
// width: 164px;
// height: 28px;
// left: 98px;


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
padding: 0px 24px;
width: 100%;
`

const Title = styled.div`
margin: 0 auto;
letter-spacing: -0.1px;

/* Neutrals / 800 */

color: #252728;


/* Inside Auto Layout */

flex: none;
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
// width: 360px;
// height: 56px;
// background: #FFFFFF;
// border: 1.5px solid #BEC1C4;
// box-sizing: border-box;
// border-radius: 8px;
// margin: 0px 0px;


// label {
//     font-size: 12px;
//     color: #BEC1C4;
//     margin: 0 10px;
//     font-family: Sora;
//     position: absolute;
//     top: -10px;
//     background-color: #FFFFFF;
//   }

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid #BEC1C4;
  margin: 30px 0;
  position: relative;
  input {
    width: 100%;
    outline: none;
    font-family: Sora, sans-serif;
    font-size: 16px;
    padding: 16px;
    border: none;
    color: black;
  }
  label {
    font-size: 12px;
    color: #BEC1C4;
    margin: 0 10px;
    font-family: Sora;
    position: absolute;
    top: -10px;
    color: black;
`

const Button = styled.button`
display: flex;
align-items: center;
padding: 16px;

width: 360px;
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


export {Container,Wrapper,Title,labelForm,Input,Button}