import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  private commentSelect: Prisma.CommentSelect = {
    id: true,
    content: true,
    postId: true,
    userId: true,
  };

  async create(dto: CreateCommentDto) {
    return await this.prisma.comment.create({
      data: {
        ...dto,
      },
      select: this.commentSelect,
    });
  }

  async findById(id: string) {
    const comment = await this.prisma.comment.findFirst({
      where: { id },
      select: this.commentSelect,
    });
    if (!comment)
      throw new HttpException('No data found', HttpStatus.NOT_FOUND);
    return comment;
  }

  async update(id: string, dto: UpdateCommentDto) {
    await this.findById(id);
    return await this.prisma.comment.update({
      where: { id },
      data: { ...dto },
      select: this.commentSelect,
    });
  }

  async remove(id: string) {
    await this.findById(id);
    return await this.prisma.comment.delete({
      where: { id },
    });
  }
}
