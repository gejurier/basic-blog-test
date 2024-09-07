import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @Matches(/\./, {
    message: 'El formato debe ser un correo electrónico válido.',
  })
  @IsOptional({
    message: 'El campo de correo electrónico no puede estar vacío.',
  })
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  username: string;
}
