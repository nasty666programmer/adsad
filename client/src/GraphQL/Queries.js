import {gql} from '@apollo/client';

export const ADD_USERS = gql`
    query {
        addUser {
            id,
            mail,
            code
        }
    }
` 