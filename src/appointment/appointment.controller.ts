import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Request, Response } from 'express';

@Controller()
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post('/adoptionAppointment')
  async getAppointmentWithCat(@Req() req: Request, @Res() res: Response) {
    try {
      const appointment = await this.appointmentService.getAppointmentWithCat(
        req.body.catId,
      );
      if (!appointment)
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'You must provide a valid catId (number)' });
      res.status(HttpStatus.OK).json({ appointment: appointment });
    } catch (error) {
      res
        .status(HttpStatus.METHOD_NOT_ALLOWED)
        .json({ error: 'Method not allowed' });
      console.log('erreur ici : ', error);
    }
  }
}
