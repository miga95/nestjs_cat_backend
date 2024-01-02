import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Response } from 'express';

@Controller()
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('cats')
  async getAllCats(@Res() response: Response) {
    try {
      const cats = await this.catsService.getAll();
      response.status(HttpStatus.OK).json(cats);
    } catch (error) {
      response
        .status(HttpStatus.METHOD_NOT_ALLOWED)
        .json({ error: 'Method not allowed' });
    }
  }

  @Get('/cat/:catId')
  async getOne(@Res() response: Response, @Param('catId') catId: string) {
    try {
      const cat = await this.catsService.getOne(parseInt(catId));

      response.status(HttpStatus.OK).json(cat);
    } catch (error) {
      response
        .status(HttpStatus.METHOD_NOT_ALLOWED)
        .json({ error: 'Method not allowed' });
      console.log(error);
    }
  }
}
