const userTypes = `
    type User {
        id: ID!
        name: String!
        email: String!
        photo: String!
        createdAt: String!
        updatedAt: String!
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdateInput {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdatePasswordInput {
        password: String!
    }
`
const userQuery = `
    users(firts: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
    deleteUser(id: ID!): Boolean
`

export { userTypes, userMutations, userQuery }