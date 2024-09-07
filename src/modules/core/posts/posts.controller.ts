import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return await this.postsService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.postsService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePostDto,
  ) {
    return await this.postsService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.postsService.remove(id);
  }

  @Get('category/:category')
  async findAllByCategory(@Param('category') category: string) {
    return await this.postsService.findAllByCategory(category);
  }

  @Get('get/tags')
  async findAllByTags(@Query('tags') tags: string) {
    const tagsArray = tags.split(','); // Convierte la cadena en un arreglo
    return await this.postsService.findAllByTags(tagsArray);
  }
}
