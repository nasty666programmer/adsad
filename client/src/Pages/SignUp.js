import Page from "../Components/Page";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Container, Wrapper,Title,labelForm,Input,Button, Box,Hepler,SuccessMessage} from '../css/HomePage-modal_changeEmail';
import React,{useState} from 'react';
import close from '../img/close.png';
import axios from 'axios';
import completeIcon from '../img/complete.png';
import Verify from "./Verify";
import { useQuery } from "@apollo/client";
import { ADD_USERS } from "../GraphQL/Queries";

function SignUp () {
const [EmailData,setEmailDate] = useState({text:''});
const [openModal1,setOpenModal1] = useState(true);
const [openModal2,setOpenModal2] = useState(false);
const [openVerify,setOpenVerify] = useState(false);

const {error,loading,data} = useQuery(ADD_USERS);
console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailDate({text:''});

          setOpenModal1(!openModal1);
          setOpenModal2(!openModal2);
    
          setTimeout(() => {
            setOpenModal2(false);
            setOpenVerify(!openVerify)
          },1000)

    }

    return (
        <Page>
            {openModal1 && 
                <Container> 
                  <Wrapper>
                  <Link to='/'><img src={close} alt={'close modale window'} /></Link>
                    <Title>Change Email</Title>
                    <div>
                    <labelForm>Enter new e-mail</labelForm>
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