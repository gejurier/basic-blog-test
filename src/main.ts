import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Configuración de moment-timezone

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.API_VERSION);

  const options = new DocumentBuilder()
    .setTitle('Perfila360')
    .setDescription('All routes the project')
    .setVersion('1.0')
    .addTag('perfila360-back')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swa', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(AppModule.port);
}
bootstrap();
