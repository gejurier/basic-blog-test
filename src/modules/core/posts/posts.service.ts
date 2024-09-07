import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  private postSelect: Prisma.PostSelect = {
    id: true,
    title: true,
    content: true,
    category: true,
    tags: true,
    userId: true,
    comments: true,
  };

  async create(dto: CreatePostDto) {
    return await this.prisma.post.create({
      data: {
        ...dto,
      },
      select: this.postSelect,
    });
  }

  async findById(id: string) {
    const post = await this.prisma.post.findFirst({
      where: { id },
      select: this.postSelect,
    });
    if (!post) throw new HttpException('No data found', HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: string, dto: UpdatePostDto) {
    await this.findById(id);
    return await this.prisma.post.update({
      where: { id },
      data: { ...dto },
      select: this.postSelect,
    });
  }

  async remove(id: string) {
    await this.findById(id);
    return await this.prisma.post.delete({
      where: { id },
    });
  }

  async findAllByCategory(category: string) {
    return await this.prisma.post.findMany({
      where: { category },
      select: this.postSelect,
    });
  }

  async findAllByTags(tags: string[]) {
    return await this.prisma.post.findMany({
      where: {
        tags: {
          hasSome: tags, // Pasa el arreglo de etiquetas aquí
        },
      },
      select: this.postSelect,
    });
  }
}
