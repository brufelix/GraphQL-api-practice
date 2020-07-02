"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
`;
exports.commentType = commentType;
const commentQueries = `
    commentsByPost(id: ID!, first: Int, offser: Int): [ Comment! ]!
`;
exports.commentQueries = commentQueries;
const commentMutations = `
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Boolean
`;
exports.commentMutations = commentMutations;
