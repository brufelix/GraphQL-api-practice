import { makeExecutableSchema } from 'graphql-tools'

import { Query } from './query'
import { Mutation } from './mutation'
import { userTypes } from './resources/user/user.schema'
import { postTypes } from './resources/post/post.schema'
import { commentType } from './resources/comment/comment.schema'

const users: any[] = [
    {
        id: '01',
        name: 'bru',
        email: 'bru@example.com',
        photo: 'photo',
        createdAt: '02-02-2020',
        updatedAt: '02-02-2020' 
    },{
        id: '01',
        name: 'rai',
        email: 'rai@example.com',
        photo: 'photo',
        createdAt: '02-02-2020',
        updatedAt: '02-02-2020'  
    },
]

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`

export default makeExecutableSchema({ 
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        postTypes,
        userTypes,
        commentType
]})