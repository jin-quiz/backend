import { Injectable } from '@nestjs/common';

import dotenv from 'dotenv';

import { IAppConfig } from './interfaces';

@Injectable()
export class ConfigService {
  config: IAppConfig;

  constructor(config: IAppConfig) {
    this.config = config;

    dotenv.config({
      path: `${process.env.APP_ROOT}/${process.env.NODE_ENV}.env`,
    });
  }
}
