import styled from 'styled-components';


const ContainerContacts = styled.div`
* Contact Us */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 0px 24px;
position: absolute;
width: 636px;
height: 220px;
left: 402px;
top: -260px;
text-align:center;

/* Neutrals / 200 */

background: #F5F6F7;
border-radius: 8px;
`

const NeedHelp = styled.span`
/* Need help? */


position: static;
width: 336px;
height: 24px;
left: 150px;
top: 0px;


font-family: Sora;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

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

const InfoUser = styled.div`
/* Contact methods */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: 588px;
height: 108px;
left: 24px;
top: 48px;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;
`
const Chat = styled.div`
/* Customer care */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 16px 0px;

position: static;
width: 180px;
height: 108px;
left: 0px;
top: 0px;

background: #FFFFFF;
/* Survey/Option L */

box-shadow: 0px 3px 7px rgba(1, 48, 36, 0.07);
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 1;
margin: 0px 24px;
`

const Email = styled.div`
/* Email */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 16px 0px;

position: static;
width: 180px;
height: 108px;
left: 204px;
top: 0px;

background: #FFFFFF;
/* Survey/Option L */

box-shadow: 0px 3px 7px rgba(1, 48, 36, 0.07);
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
margin: 0px 24px;
`
const AskQuestion = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 0px;

position: static;
width: 180px;
height: 108px;
left: 408px;
top: 0px;

background: #FFFFFF;
/* Survey/Option L */

box-shadow: 0px 3px 7px rgba(1, 48, 36, 0.07);
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 1;
margin: 0px 24px;
`
const Phone = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

position: static;
width: 336px;
height: 40px;
left: 150px;
top: 180px;

filter: drop-shadow(0px 3px 7px rgba(1, 48, 36, 0.07));
border-radius: 8px;

/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 24px 0px;
`
const Date = styled.div`
position: static;
width: 336px;
height: 16px;
left: 0px;
top: 24px;

/* Body / Body-03 */

font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-align: center;

/* Neutrals / 500 (Base) */

color: #87898C;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;
`

const InfoCalls = styled.div`
/* Frame 2895 */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 145px;
height: 16px;
left: 95.5px;
top: 0px;

margin: 0 auto;


flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
`
const CallUs = styled.span`
/* Call Us: */


position: static;
width: 46px;
height: 16px;
left: 0px;
top: 0px;

/* Body / Body-03 */

font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-align: center;

/* Neutrals / 500 (Base) */

color: #87898C;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;
`
const Number = styled.span`
/* 1 855 932 4048 */


position: static;
width: 91px;
height: 16px;
left: 54px;
top: 0px;

/* Body / Body-03 */

font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-align: center;

/* Neutrals / 500 (Base) */

color: #87898C;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
`

const ImgChats = styled.img`
position: absolute;
left: 4.17%;
right: 4.17%;
top: 12.5%;
bottom: 4.17%;
background: #252728;
`

const ImgMail = styled.img`
position: absolute;
left: 8.33%;
right: 8.33%;
top: 6.51%;
bottom: 12.5%;

/* Neutrals / 800 */

background: #252728;
`

const ImgQuestion = styled.img`
position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;
background: #252728;
`

export {
    ContainerContacts,
    NeedHelp,
    InfoUser,
    Chat,
    Email,
    AskQuestion,
    Phone,
    Date,
    InfoCalls,
    CallUs,
    Number,
    ImgChats,
    ImgQuestion,
    ImgMail
}