import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data : {
      nome: 'Aline',
      email : 'aline@mail.com',
      telefone : '0000 0000',
      perfil : 1
    }
  });
  await prisma.user.create({
    data : {
      nome: 'Beatriz',
      email : 'bia@mail.com',
      telefone : '1111 0000',
      perfil : 1
    }
  });
  await prisma.user.create({
    data : {
      nome: 'Carla',
      email : 'carla@mail.com',
      telefone : '1111 1111',
      perfil : 1
    }
  });
  await prisma.user.create({
    data : {
      nome: 'Daniele',
      email : 'dani@mail.com',
      telefone : '0000 0000',
      perfil : 1
    }
  });
  await prisma.user.create({
    data : {
      nome: 'Aline dos reis',
      email : 'carça@mail.com',
      telefone : '0000 0000',
      perfil : 1
    }
  });
  // await prisma.user.delete({
  //   where : {
  //     id : 9
  //   }
  // })

//   await prisma.user.update({
//     where : { id: 2 },
//     data : {
//         telefone : '1111 1111'
//     }
//   })

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })