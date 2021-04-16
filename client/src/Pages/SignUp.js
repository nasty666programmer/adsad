import Page from "../Components/Page";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Container, Wrapper,Title,labelForm,Input,Button} from '../css/HomePage-modal_changeEmail';
import React,{useState} from 'react';

function SignUp () {
const [EmailData,setEmailDate] = useState({text:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(EmailData)
        setEmailDate({text:''})
        
    }

    return (
        <Page>
            <Container> 
                <Wrapper>
                    <Title>Change Email</Title>
                    <div>
                    <labelForm>Enter new e-mail</labelForm>
                    <form onSubmit={handleSubmit}>
                        <Input>
                        <label htmlFor="email">new e-mail</label>
                        <input id="email" type='text' value={EmailData.text} onChange={(e) => setEmailDate({...EmailData,text:e.target.value})}/>
                        </Input>
                        <Button>Save</Button>
                    </form>
                    </div>
                </Wrapper>
            </Container>
        </Page>
    )
}

export default SignUp;