import Page from "../Components/Page";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Container, Wrapper,Title,Input,Button, Box} from '../css/HomePage-modal_changeEmail';
import React,{useState} from 'react';
import close from '../img/close.png';
import completeIcon from '../img/complete.png';
import Verify from "./Verify";
import { useMutation} from "@apollo/client";
import { EMAIL_CHANGE } from "../GraphQL/Mutation";;


function SignUp () {
const [EmailData,setEmailDate] = useState({text:''});
const [openModal1,setOpenModal1] = useState(true);
const [openModal2,setOpenModal2] = useState(false);
const [openVerify,setOpenVerify] = useState(false);
const [errors,setErrors] = useState(false);


const [newEmail] = useMutation(EMAIL_CHANGE)

    const handleSubmit = (e) => {
        e.preventDefault();
        let regExp = /\S+@\S+\.\S+/;
        if (regExp.test(EmailData.text)) {
            newEmail({
              variables: {
                email: EmailData.text
              }
            })
            .then(({data}) => console.log(data))
            .then(() => {
              setEmailDate({text:''});
              setOpenModal1(!openModal1);
              setOpenModal2(!openModal2);
            })
            .catch(err => console.log(err + 'error'));

            setTimeout(() => {
              setOpenModal2(false);
              setOpenVerify(!openVerify)
            },1000)
        } else {
          setErrors(!errors)
        } 
    
          
    }

    return (
        <Page>
            {openModal1 && 
                <Container> 
                  <Wrapper>
                  <Link to='/'><img src={close} alt={'close modale window'} /></Link>
                    <Title>Change Email</Title>
                    <div>
                    {errors ? <labelForm style={{'color':'red'}}>Please check you email again</labelForm> : <labelForm>Enter new e-mail</labelForm>}
                    <form onSubmit={handleSubmit}>
                        <Input>
                        <label htmlFor="email">new e-mail</label>
                        <input 
                            id="email" 
                            type='text'
                            value={EmailData.text}
                            placeholder={'elizabethmaconaughey123@gmail.com'}
                            onChange={(e) => setEmailDate({...EmailData,text:e.target.value})}/>
                        </Input>
                        <Button>Save</Button>
                    </form>
                    </div>
                  </Wrapper>
            </Container>
            }
            
            {openModal2 && 
            <Container> 
                <Wrapper>
                  <Box>
                  <img src={completeIcon} alt={'complete'}/>
                  <h3>Your email has been changed!</h3>
                  <div>Please, check you inbox and follow the link in order to verify your email.</div>
                  </Box>
                </Wrapper>
            </Container>
            }

            {openVerify && <Verify />}
            
        </Page>
    )
}

export default SignUp;