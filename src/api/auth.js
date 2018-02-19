import gql from 'graphql-tag';
import { apolloClient } from '../apollo';

export default {
  signup({
    email, username, fullName, password, avatar,
  }) {
    return apolloClient.mutate({
      mutation: gql`
        mutation Signup(
          $email: String!
          $username: String!
          $password: String!
          $fullName: String!
          $avatar: String!
        ) {
          signup(
            email: $email
            username: $username
            password: $password
            fullName: $fullName
            avatar: $avatar
          ) {
            username
            email
            firstName
            lastName
            avatar
          }
        }
      `,
      variables: {
        email,
        username,
        fullName,
        password,
        avatar,
      },
    });
  },
};
