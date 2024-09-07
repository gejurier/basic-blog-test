import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @Matches(/\./, {
    message: 'El formato debe ser un correo electrónico válido.',
  })
  @IsNotEmpty({
    message: 'El campo de correo electrónico no puede estar vacío.',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
