import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    padding:16px;
    width: 588px;
    height: 466px;
    background:inherit;
    border-radius: 8px;
    margin:0 auto;
`
const VerifyBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    width: 588px;
    height: 310px;
    
    flex-direction:column;
`

const InfoVerify = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    width: 588px;
    height: 132px;
    left: 0px;
    top: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 24px;

    div {
        display:flex;
        align-items: center;
    }
    p {
        font-family: Sora;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
    }
`

const MailInfo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
h3 {
    letter-spacing: -0.1px;
    font-family: Sora;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #252728;
}

span {
    width: 24px;
    height: 24px;
    background: #E1E3E6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const VerifyInput = styled.div`
display:flex;
  & input {
      text-align:center;
      font-size:2rem;
    width: 48px;
    height: 62px;
    margin:5px;
    border-bottom-color: gray; 
    border-top: none;
    border-left: none;
    border-right: none;
    outline:none;
    &:focus {

    }
}
`
const VerifyInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 80px;

    background-color:#FFFFFF;
    width: 588px;
    height: 266px;
span > p {
    font-weight:bold;
}
    
`

const ForgotEmail = styled.div`
    p > span {
        color:green;
        cursor: pointer;
    }
`

export {Container,VerifyBlock,InfoVerify,MailInfo,VerifyInputWrapper,ForgotEmail,VerifyInput}