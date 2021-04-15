import styled from 'styled-components';


const ImageLogo = styled.img`
  padding:0px;
  width:120px;
  height:52px;
  position:absolute;
  top:14px;
  left:120px;
`
const Nav = styled.nav`
  width:100%;
  height:80px;
  background-color:white;
  padding:14px,0px,14px,120px;
`

const ContSign = styled.div`
position: absolute;
width: 154px;
height: 40px;
right: 120px;
top:20px;
`

const LinkSignIn = styled.a`

`
const ButtonSignUp = styled.button`
     flex-direction: column;
     align-items: center;
     padding: 10px 16px;

    position: static;
    width: 89px;
    height: 40px;
    left: 65px;
    top: 0px;
    color:white;
    background: #0A6629;
    border-radius: 8px;
`
 

export {ImageLogo,Nav,LinkSignIn,ContSign,ButtonSignUp}