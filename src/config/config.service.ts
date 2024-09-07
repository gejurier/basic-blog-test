import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    // const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    // if (isDevelopmentEnv) {
    const envFilePath = '.env';
    const existsPath = fs.existsSync(envFilePath);

    if (!existsPath) {
      console.log('.env file does not exist');
      process.exit(0);
    }
    this.envConfig = parse(fs.readFileSync(envFilePath));
    // } else {
    //   this.envConfig = {
    //     PORT: process.env.PORT,
    //   };
    // }
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getNumber(key: string): number {
    return Number(this.envConfig[key]);
  }

  getBoolean(key: string): boolean {
    return Boolean(this.envConfig[key]);
  }
}

// import * as fs from 'fs';
// import { parse } from 'dotenv';

// export class ConfigService {
//   private readonly envConfig: { [key: string]: string };

//   constructor() {
//     const env = process.env.NODE_ENV;
//     let envFilePath = null;
//     let existsPath = null;
//     switch (env) {
//       case 'development':
//         console.log('development');
//         envFilePath = '.env';
//         existsPath = fs.existsSync(envFilePath);
//         if (!existsPath) {
//           console.log('.env file does not exist');
//           process.exit(0);
//         }
//         this.envConfig = parse(fs.readFileSync(envFilePath));
//         break;
//       case 'production':
//         console.log('production');
//         envFilePath = '.env';
//         existsPath = fs.existsSync(envFilePath);
//         if (!existsPath) {
//           console.log('.env file does not exist');
//           process.exit(0);
//         }
//         this.envConfig = parse(fs.readFileSync(envFilePath));
//         break;
//       default:
//         console.log('local');
//          envFilePath = '.env';
//          existsPath = fs.existsSync(envFilePath);
//         if (!existsPath) {
//           console.log('.env file does not exist');
//           process.exit(0);
//         }
//         this.envConfig = parse(fs.readFileSync(envFilePath));
//         break;
//     }
//   }

//   get(key: string): string {
//     return this.envConfig[key];
//   }

//   getNumber(key: string): number {
//     return Number(this.envConfig[key]);
//   }

//   getBoolean(key: string): boolean {
//     return Boolean(this.envConfig[key]);
//   }
// }
