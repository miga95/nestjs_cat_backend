import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [CatsModule, PrismaModule, AppointmentModule],
})
export class AppModule {}
