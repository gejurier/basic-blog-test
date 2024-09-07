import {
  HttpException,
  HttpStatus,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private userSelect: Prisma.UserSelect = {
    id: true,
    username: true,
    email: true,
    password: true,
  };
  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return await this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
      select: this.userSelect,
    });
  }

  async findById(id: string) {
    console.log(id);
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: this.userSelect,
    });
    if (!user) throw new HttpException('No data found', HttpStatus.NOT_FOUND);
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    console.log(id);
    await this.findById(id);
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
      select: this.userSelect,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findByUsername(email: string) {
    return await this.prisma.user.findFirst({
      where: { email },
      select: this.userSelect,
    });
  }

  async validatePassword(email: string, plainPassword: string) {
    const user = await this.findByUsername(email);
    if (!user) return false;
    return await bcrypt.compare(plainPassword, user.password);
  }
}
