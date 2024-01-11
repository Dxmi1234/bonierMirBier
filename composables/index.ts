import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({datasources: { db: { url: "mongodb://127.0.0.1/BonierMirBier"}}})

prisma.$connect().then(() => {
  console.log('Connected to database')
}).catch((err : any) => {
  console.error(err)
});

async function main(){
  const post = await prisma.post.create({
    data: {
      title: 'Prisma makes databases easy'
    }})

  console.log(post);
}

main();