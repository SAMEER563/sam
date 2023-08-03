import {PrismaClient} from '@prisma/client';

const client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== 'production' ) globalThis.prisma = client;

export default client;


const prisma = new PrismaClient();

// (async () => {
//     const response = await prisma.product.create({
//         data: {
//             name: "Advoco learning",
//             description: "It is used for learning"
//         },
//     });
//     console.log(response);
// })();
