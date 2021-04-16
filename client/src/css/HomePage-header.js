import styled from 'styled-components';


const ImageLogo = styled.img`
  width: 128px;
  height: 52px;
`
const PageHeader = styled.header`
width: 100%;
padding: 40px 0;
display: flex;
justify-content: space-between;

background: #FFFFFF;
box-shadow: inset 0px -1px 0px #E1E3E6;
`

const Container = styled.div`
  width: 100%;
  margin: 0 120px;
  display: flex;
  justify-content: space-between;
`

const ContSign = styled.div`
width: 100%;
max-width: 155px;
display: flex;
justify-content: space-between;
align-items: center;

`

const LinkSignIn = styled.a`
/* Primary/Primary-small@default */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

position: static;
width: 41px;
height: 40px;
left: 0px;
top: 0px;

border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LinksSign = styled.span`
position: static;
width: 41px;
height: 20px;
left: 0px;
top: 10px;
cursor: pointer;

/* CTA / Button-regular */

font-family: Sora;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


/* Neutrals / 800 */

color: #252728;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
`
const ButtonSignUp = styled.button`
/* Primary/Primary-small@default */


/* Auto Layout */

display: flex;
justify-content: center;
align-items: center;
padding: 10px 16px;
border: none;
outline: none;
position: static;
width: 89px;
height: 40px;
left: 65px;
top: 0px;
color:white;
/* Primary / 500 (Base) */

background: #0A6629;
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
a {
  text-decoration: none;
  color: #ffffff;
}
`


 

export {ImageLogo,PageHeader,LinkSignIn,ContSign,ButtonSignUp,LinksSign, Container}