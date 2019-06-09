import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'thisismysupersecrettext'
});

export { prisma as default }

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId });
//
//     if (!userExists) {
//         throw new Error('User not found')
//     }
//
//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published } } }');
//
//     return post.author
// };

// createPostForUser('cjw4xvqwk00170772q941ogbo', {
//     title: 'Great books to read',
//     body: 'The War of Art',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// });

// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId });
//
//     if (!postExists) {
//         throw new Error('Post not found')
//     }
//
//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, ' { author { id name email posts { id title published } } }');
//
//     return post.author
//
// };


// updatePostForUser(
//     'cjw6p7k9y001t0829r3gh7lek',
//     { body: 'The War of Art is the best book ever!', published: false
//     }).then((user) => {
//         console.log(JSON.stringify(user, undefined, 2))
//     }).catch((error) => {
//         console.log(error.message)
//     });

