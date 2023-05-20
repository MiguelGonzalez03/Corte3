import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateNewUserDto} from './dto/create-user.dto';
import { UpdateUserDto } from  './dto/update-user.dto'
import { LoginDto } from './dto/login-auth.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateNewUserDto) {
    return this.usersService.createUser(newUser);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deliteUser(id);
  }

  @Put(':id')
  updateUser(@Param('id',ParseIntPipe)id:number,
  @Body() updateUser: UpdateUserDto,
  ){
    return this.usersService.updateProduct(id,updateUser);
  }

  @Post('login')
  login(@Body() inicioSesion: LoginDto) {
    return this.usersService.login(inicioSesion)
  }
}
