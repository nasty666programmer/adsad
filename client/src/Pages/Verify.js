import {Container,VerifyBlock,InfoVerify,MailInfo,VerifyInputWrapper,ForgotEmail,VerifyInput} from '../css/HomePage-Verify';
import completeIcon from '../img/complete.png';
import pen from '../img/pen.png';
import {Get_Code} from '../GraphQL/Queries';
import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';

function Verify () {
    const {data,error,loading} = useQuery(Get_Code);
    const [dataServer,setDataServer] = useState([]);
    const [flagSuccess,setFlagSuccess] = useState('');
    const [dataCode,setDataCode] = useState({
        code1:'',
        code2:'',
        code3:'',
        code4:''
    });

    useEffect(() => {
        if (!loading) {
            setDataServer(data.getCode)
        } 
    },[data])

    const handleChange = (e) => {
        const {name,value} = e.currentTarget;
        setDataCode({...dataCode,
            [name]:value
        });
    }

        const validData = () => {
            let codeVal = Object.values(dataCode).join('');
            dataServer.filter(el => {
            if (el.verifyCode == codeVal) {
                setFlagSuccess('green');
            } else {
                setFlagSuccess('red')
            }
        })
        console.log(codeVal)
    }
    

    return (
        <div>
            <Container>
                <InfoVerify>
                    <img src={completeIcon} alt={'complete'}/>
                        <p>Verification email has been sent to</p>
                        <MailInfo>
                            {dataServer.map(elements => <h3>{elements.email}</h3>)}
                            <span>
                                <img src={pen} />    
                            </span> 
                        </MailInfo>
                </InfoVerify>
                <VerifyBlock>
                    <VerifyInputWrapper>
                        <h2>Verify your account</h2>
                        <span>Please, enter the code here or follow the link from the email. Link expires <p>in 48 hours.</p></span>
                        <VerifyInput >
                            <input style={{'color':flagSuccess}} type='text' maxLength='1' name='code1' tabIndex='1' value={dataCode.code1} onChange={handleChange} />
                            <input style={{'color':flagSuccess}} type='text' maxLength='1' name='code2' tabIndex='2' value={dataCode.code2} onChange={handleChange}/>
                            <input style={{'color':flagSuccess}} type='text' maxLength='1' name='code3' tabIndex='3' value={dataCode.code3} onChange={handleChange}/>
                            <input style={{'color':flagSuccess}} type='text' maxLength='1' name='code4' tabIndex='4' value={dataCode.code4} onChange={handleChange}/>
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