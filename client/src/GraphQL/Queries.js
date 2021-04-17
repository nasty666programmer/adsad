import {gql} from "@apollo/client";

export const Get_Code = gql`  
    query {
        getCode {
            id,
            email,
            verifyCode
        }
    }
`