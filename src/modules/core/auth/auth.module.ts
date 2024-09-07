import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/modules/core/users/users.module';
import { JwtStrategy } from './jwt.strategy'; // Importa tu estrategia personalizada
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Usa 'jwt' como estrategia predeterminada
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey', // Usa tu clave secreta desde el archivo .env
      signOptions: { expiresIn: '60m' }, // Expiración de tokens
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, UsersService], // Asegúrate de incluir JwtStrategy aquí
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
