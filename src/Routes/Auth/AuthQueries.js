import { gql } from "apollo-boost";

export const SIGNIN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const SIGNUP = gql`
  mutation createAccount($name: String!, $email: String!) {
    createAccount(name: $name, email: $email)
  }
`;

export const CONFIRM = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;

export const LOCAL_LOGIN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
