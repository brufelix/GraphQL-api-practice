import { userQuery } from './resources/user/user.schema'
import { postQuery } from './resources/post/post.schema'
import { commentQueries } from './resources/comment/comment.schema'

export const Query = `
    type Query {
        ${userQuery}
        ${postQuery}
        ${commentQueries}
    }
`