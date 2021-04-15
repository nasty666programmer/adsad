import styled from 'styled-components';

const Footers = styled.div`
position: absolute;

width: 1440px;
height: 356px;
left: 0px;
bottom: 0px;

/* Neutrals / 100 (White) */

background: #FFFFFF;
`

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

const InfoUser = styled.div`
position: static;
width: 336px;
height: 24px;
left: 150px;
top: 0px;

/* Headings / Title-03 */

font-family: Sora;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

text-align: center;
letter-spacing: -0.1px;

/* Neutrals / 800 */

color: #252728;
`

export {Footers,ContainerContacts,InfoUser}