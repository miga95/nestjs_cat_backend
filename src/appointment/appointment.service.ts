import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async getAppointmentWithCat(catId: number) {
    const catExists = await this.prisma.cat.findUnique({
      where: {
        id: catId,
      },
    });

    if (!catExists) {
      return;
    }

    const existingAppointment = await this.prisma.appointment.findFirst({
      where: {
        catId: catId,
      },
    });

    if (existingAppointment) {
      return existingAppointment.date;
    } else {
      return 'no appointment';
    }
  }
}
