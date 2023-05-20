import { Controller, Get, Query } from '@nestjs/common';

@Controller('procedimiento')
export class ProcedimientoController {
  @Get('xyz')
  getPath() {
    return 'Hola Miguel';
  }
  @Get()
  getQuery(@Query('pqr') pqr: string) {
    return pqr;
  }
}
