import styled from 'styled-components';


const ImageLogo = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 128px;
  height: 52px;
  left: 120px;
  top: 14px;
`
const Nav = styled.nav`
position: absolute;
width: 1440px;
height: 80px;
left: 0px;
top: 0px;

background: #FFFFFF;
box-shadow: inset 0px -1px 0px #E1E3E6;
`

const ContSign = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: absolute;
width: 154px;
height: 40px;
right: 120px;
top: calc(50% - 40px/2);

`

const LinkSignIn = styled.a`
/* Primary/Primary-small@default */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px;

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
margin: 0px 24px;
`
const LinksSign = styled.span`
position: static;
width: 41px;
height: 20px;
left: 0px;
top: 10px;

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
margin: 10px 0px;
`
const ButtonSignUp = styled.button`
/* Primary/Primary-small@default */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 10px 16px;

position: static;
width: 89px;
height: 40px;
left: 65px;
top: 0px;

/* Primary / 500 (Base) */

background: #0A6629;
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 24px;
`
 

export {ImageLogo,Nav,LinkSignIn,ContSign,ButtonSignUp,LinksSign}