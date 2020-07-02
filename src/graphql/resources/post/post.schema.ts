const postTypes = `
    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        createdAt: String!
        updated: String!
        author: String!
        comments: [ Comment! ]!
    }

    input PostInput {
        title: String!
        content: String!
        photo: String!
        author: Int!
    }
`

const postQuery =` 
    posts(first: Int, offset: Int): [ Post! ]!
    post(id: ID!): Post
`

const postMutations =`
    createPost(input: PostInput!): Post
    update(input: PostInput!): Post
    deletePost(id: ID!): Post
`

export { postTypes, postQuery, postMutations }