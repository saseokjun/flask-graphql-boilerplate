import gql from 'graphql-tag'

export const USERS = gql`
  query users {
    users{
      id
      email
      name
      level
      annual
      alternative
      enterDate
      isJoin
    }
  }
`

export const USER = gql`
  query(
    $userId: Int!
  ){
    user(
      userId: $userId
    ){
      id
      email
      name
      level
      annual
      alternative
      enterDate
      isJoin
    }
  }
`

export const ME = gql`
  query {
    me{
      id
      email
      name
      level
      annual
      alternative
      enterDate
      isJoin
    }
  }
`