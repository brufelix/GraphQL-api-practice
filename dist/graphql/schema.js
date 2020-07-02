"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const user_schema_1 = require("./resources/user/user.schema");
const post_schema_1 = require("./resources/post/post.schema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const users = [
    {
        id: '01',
        name: 'bru',
        email: 'bru@example.com',
        photo: 'photo',
        createdAt: '02-02-2020',
        updatedAt: '02-02-2020'
    }, {
        id: '01',
        name: 'rai',
        email: 'rai@example.com',
        photo: 'photo',
        createdAt: '02-02-2020',
        updatedAt: '02-02-2020'
    },
];
const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        query_1.Query,
        mutation_1.Mutation,
        post_schema_1.postTypes,
        user_schema_1.userTypes,
        comment_schema_1.commentType
    ]
});
