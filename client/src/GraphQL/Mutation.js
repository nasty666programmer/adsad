import {gql} from "@apollo/client";

export const EMAIL_CHANGE = gql`  
    mutation mailChange(
        $email: String!
    ){
        mailChange(email: $email) {
            id,
            email,
            verifyCode
        }
    }
`;