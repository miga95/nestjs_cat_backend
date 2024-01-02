import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class CatsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.cat.findMany();
  }

  getOne(catId: number) {
    return this.prisma.cat.findFirst({
      where: {
        id: catId,
      },
      include: {
        appointments: {
          select: {
            id: true,
            date: true,
          },
        },
      },
    });
  }
}
