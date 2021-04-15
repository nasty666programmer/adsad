import styled from 'styled-components';

const Footers = styled.div`
    position: absolute;
    width:100%;
    height: 356px;
    left: 0px;
    bottom: 0px;
    background-color:#FFFFFF;
`

const ContainerContacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 24px;

    position: absolute;
    width: 636px;
    height: 220px;
    left: 402px;
    top: 0px;

    /* Neutrals / 200 */

    background: #F5F6F7;
    border-radius: 8px;
`

export {Footers,ContainerContacts}