import { Injectable } from '@nestjs/common';

import { ConfigService } from '@app/modules/config/config.service';

type Hello = {
  message: string;
  version: string;
  time: Date;
};
@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getHello(): Hello {
    return {
      message: 'Hello from quiz app',
      version: this.config.config.application.version,
      time: new Date(),
    };
  }
}
