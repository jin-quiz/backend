import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IAppConfig {
  application?: IApplicationConfig;
  logging?: ILoggingConfifg;
  JWT?: IJsonWebTokenConfig;
  database?: TypeOrmModuleOptions;
}

export interface IApplicationConfig {
  port?: number;
  version?: string;
}

export interface ILoggingConfifg {
  level?: string;
  pretty?: boolean;
  autolog?: boolean;
}

export interface IJsonWebTokenConfig {
  accessLifetime?: string | number;
  refreshLifetime?: string | number;
  secret?: string;
}
