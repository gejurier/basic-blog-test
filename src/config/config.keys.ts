export enum Configuration {
  PORT = 'PORT',
  HOST = 'HOST',
  JWT_SECRET = 'JWT_SECRET',
  CORS_URL = 'CORS_URL',
  NODE_ENV = 'NODE_ENV',
  LOG_DIR = 'LOG_DIR',
  MAX_FILE_SIZE = 'MAX_FILE_SIZE',
}

export enum Database {
  DATABASE_URL = 'DATABASE_URL',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USER = 'DB_USER',
  DB_USER_PWD = 'DB_USER_PWD',
  DB_NAME = 'DB_NAME',
  DB_ADMIN = 'DB_ADMIN',
  DB_ADMIN_PWD = 'DB_ADMIN_PWD',
}

export enum Mail {
  MAIL_API_KEY = 'MAIL_API_KEY',
  MAIL_HOST = 'MAIL_HOST',
  MAIL_USERNAME = 'MAIL_USERNAME',
  MAIL_PASSWORD = 'MAIL_PASSWORD',
  MAIL_SECURE = 'MAIL_SECURE',
  MAIL_PORT = 'MAIL_PORT',
}

export enum Token {
  ACCESS_TOKEN_VALIDITY_DAYS = 'ACCESS_TOKEN_VALIDITY_DAYS',
  REFRESH_TOKEN_VALIDITY_DAYS = 'REFRESH_TOKEN_VALIDITY_DAYS',
  TOKEN_ISSUER = 'TOKEN_ISSUER',
  TOKEN_AUDIENCE = 'TOKEN_AUDIENCE',
}
