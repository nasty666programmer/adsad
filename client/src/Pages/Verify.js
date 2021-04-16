import {Container,VerifyBlock,InfoVerify,MailInfo,VerifyInputWrapper,ForgotEmail,VerifyInput} from '../css/HomePage-Verify';
import completeIcon from '../img/complete.png';
import pen from '../img/pen.png';


function Verify () {
    return (
        <div>
            <Container>
                <InfoVerify>
                    <img src={completeIcon} alt={'complete'}/>
                        <p>Verification email has been sent to</p>
                        <MailInfo>
                        <h3>elizabetmaconaughey@gmail.complete</h3>
                            <span>
                                <img src={pen} />    
                            </span> 
                        </MailInfo>
                </InfoVerify>
                <VerifyBlock>
                    <VerifyInputWrapper>
                        <h2>Verify your account</h2>
                        <span>Please, enter the code here or follow the link from the email. Link expires <p>in 48 hours.</p></span>
                        <VerifyInput>
                            <input /><input /><input /><input />
                        </VerifyInput>
                    </VerifyInputWrapper>
                    <ForgotEmail>
                        <p>Haven’t got an email? Check spam folder or <span>Resend</span></p>
                    </ForgotEmail>
                </VerifyBlock>
            </Container>
        </div>
    )
}

export default Verify;