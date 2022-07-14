import { Test } from '@nestjs/testing';

import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';

const createConfigServiceTestModule = (dotEnvName: string, configName: string) => {
  return Test.createTestingModule({
    imports: [ConfigModule],
  })
    .overrideProvider(ConfigService)
    .useFactory({
      factory: async () => {
        // @ts-ignore
        const config = (await import(`./environments/${configName}`)) as { default: any };
        return new ConfigService(`.env.${dotEnvName}`, config.default);
      },
    })
    .compile();
};

describe('ConfigService', () => {
  describe('given .env File exists', () => {
    let configService: ConfigService;
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [ConfigModule],
      }).compile();

      configService = moduleRef.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
      expect(configService).toBeDefined();
    });

    it('should return jwt-secret key', () => {
      expect(configService.secrets.JWT_SECRET).toEqual('test');
    });
  });

  describe('given .env File does not exist', () => {
    it('should throw error on creation', async () => {
      expect.assertions(2);

      try {
        await createConfigServiceTestModule('error', 'error');
      } catch (error) {
        expect(error).toBeDefined();
      }

      try {
        await createConfigServiceTestModule('error', 'test');
      } catch (error) {
        expect(error.message).toBe(
          'The configuration file .env.error does not exist!',
        );
      }
    });
  });
});
