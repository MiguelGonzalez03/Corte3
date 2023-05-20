import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entitie';
import { Repository } from 'typeorm';
import { CreateNewUserDto } from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto'
import {hash,compare} from 'bcrypt'
import { LoginDto } from './dto/login-auth.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async createUser(user: CreateNewUserDto) {
    const newUser = this.UsersRepository.create(user);
    const hashPass = await hash(user.password,10)
    return this.UsersRepository.save({...newUser,password: hashPass});
  }
  getAllUsers() {
    return this.UsersRepository.find();
  }
  getUser(id: number) {
    return this.UsersRepository.findOne({where:{id}});
  }

  async updateProduct(id: number,updateUser:UpdateUserDto){
    const hashPass = await hash(updateUser.password,10)
    return this.UsersRepository.update({id},{...updateUser,password:hashPass});
  }

  deliteUser(id: number) {
  return this.UsersRepository.delete({id});
  }

  async login(user: LoginDto) {
    const { email, password} = user;
    const findUser = await this.UsersRepository.findOne({ where: { email } });

    if (!findUser) return 'el email o la passwor es incorrecta'

    const checkPass = await compare(password,findUser.password);


    if (!checkPass) return 'el email o la passwor es incorrecta'

    const data = findUser
    return data
  }

}
