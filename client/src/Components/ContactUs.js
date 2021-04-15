import {
    ContainerContacts,NeedHelp,
    InfoUser, Chat,
     Email, AskQuestion,
    Phone, Date,
    InfoCalls, CallUs,
    Number,ImgMail,
    ImgChat,ImgQuestion
} from '../css/HomePage-contact';
import ChatsImg from '../img/ChatsImg.png';
import QuestionImg from '../img/QuestionImg.png';
import MailImg from '../img/MailImg.png';


function ContactUs () {
    return (
        <div>
            <ContainerContacts>
                <NeedHelp>Need Help?</NeedHelp>
                <InfoUser>
                    <Chat>
                        <img src={ChatsImg} alt='stroke' />
                        <span>Chat</span>
                    </Chat>
                    <Email>
                        <img src={MailImg} alt='mail' />
                        <span>Mail</span>
                    </Email>
                    <AskQuestion>
                        <img src={QuestionImg} alt='question' />
                        <span>Mail</span>
                    </AskQuestion>
                </InfoUser>
                <Phone>
                    <InfoCalls>
                        <CallUs>Call Us:</CallUs>
                        <Number>1 855 932 4048</Number>
                    </InfoCalls>
                    <Date>Monday – Friday, 8:00 AM to 5:00 PM EST </Date>
                </Phone>
            </ContainerContacts>
        </div>
    )
}

export default ContactUs;