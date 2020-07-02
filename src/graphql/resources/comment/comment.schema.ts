const commentType = `
    type Comment {
        id: String!
        comment: String!
        createdAt: String!
        updatedAt: String!
        user: User!
        post: Post!
    }

    input CommentInput {
        comment: String!
        user: String!
        post: String!
    }
`

const commentQueries = `
    commentsByPost(id: ID!, first: Int, offser: Int): [ Comment! ]!
`
const commentMutations = `
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Boolean
`
export { commentType, commentQueries, commentMutations }