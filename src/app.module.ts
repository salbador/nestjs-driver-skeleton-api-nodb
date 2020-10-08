import * as path from 'path';
import * as fs from 'fs';

import {Logger, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {configuration} from './config/configuration';

const config = configuration();


@Module({
  imports: [
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  private logger: Logger;

  constructor() {
    this.logger = new Logger('AppModule');

    const dotenv = path.resolve(__dirname, '..', '.env');
    if (fs.existsSync(dotenv)) {
      this.logger.log(`Found .env at ${dotenv}`);
    } else {
      this.logger.warn(`WARNING: Cannot find .env at ${dotenv}`);
    }
  }
}


