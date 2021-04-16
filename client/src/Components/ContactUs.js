import {
    ContainerContacts,NeedHelp,
    InfoUser, 
    Phone, Date,
    InfoCalls, CallUs,
    Number, InfoBlock
} from '../css/HomePage-contact';
import ChatsImg from '../img/ChatsImg.png';
import QuestionImg from '../img/QuestionImg.png';
import MailImg from '../img/MailImg.png';

const infoBlock = [
    {img: ChatsImg, name: "Chat"},
    {img: QuestionImg, name: "Mail"},
    {img: MailImg, name: "Mail"},
]


function ContactUs () {
    return (
            <ContainerContacts>
                <NeedHelp>Need Help?</NeedHelp>
                <InfoUser>
                    {infoBlock.map((item, idx) => {
                        return(
                            <InfoBlock key={idx}>
                                <img src={item.img} />
                                <span>{item.name}</span>
                            </InfoBlock>
                        )
                    })}
                </InfoUser>
                <Phone>
                    <InfoCalls>
                        <CallUs>Call Us:</CallUs>
                        <Number>1 855 932 4048</Number>
                    </InfoCalls>
                    <Date>Monday – Friday, 8:00 AM to 5:00 PM EST </Date>
                </Phone>
            </ContainerContacts>
    )
}

export default ContactUs;