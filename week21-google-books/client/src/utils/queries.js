import { gql } from "@apollo/client";

// DONE
export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

// DONE
export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;



// DONE

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount 
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
