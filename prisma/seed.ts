import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const cats = [
  {
    id: '1',
    name: 'Robi',
    birthdate: '2015-03-29',
    breed: 'Persian',
    location: 'Paris refuge - 75',
    gender: 'Male',
    picturePath: 'http://placekitten.com/200/300',
  },
  {
    id: '2',
    name: 'Toto',
    birthdate: '2014-09-25',
    breed: 'Russian blue',
    location: 'Marseille refuge - 13',
    gender: 'Male',
    picturePath: 'http://placekitten.com/400/300',
  },
  {
    id: '3',
    name: 'Gus',
    birthdate: '2012-05-19',
    breed: 'Persian',
    location: 'Grenoble refuge - 38',
    gender: 'Male',
    picturePath: 'http://placekitten.com/500/300',
  },
  {
    id: '4',
    name: 'Lulu',
    birthdate: '2013-06-20',
    breed: 'Norwegian',
    location: 'Bordeaux refuge - 33',
    gender: 'Female',
    picturePath: 'http://placekitten.com/200/250',
  },
];

async function main() {
  try {
    await Promise.all(
      cats.map((cat) =>
        prisma.cat.create({
          data: {
            id: parseInt(cat.id),
            name: cat.name,
            birthdate: new Date(cat.birthdate),
            breed: cat.breed,
            location: cat.location,
            gender: cat.gender,
            picturePath: cat.picturePath,
          },
        }),
      ),
    );
    console.log('Seed terminé avec succès');
  } catch (e) {
    console.error('Erreur lors du seed:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
