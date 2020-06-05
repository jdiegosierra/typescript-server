import { Module } from '@nestjs/common';
// import { RpcModule } from './transport-layers/rpc/rpc.module';
import { RestModule } from './transport-layers/rest/rest.module';
import { LoggerModule } from './shared/logger/logger.module';
import { NestFactory } from "@nestjs/core";
import config from "./config/default";
import { LoggerService } from "./shared/logger/logger.service";

@Module({
  imports: [RestModule, LoggerModule],
})
export class AppModule {
  static async start(loggerService: LoggerService) {
    const app = await NestFactory.create(this, {
      logger: false,
    });
    await app.listen(config.server['PORT'] || 3000, () => {
      loggerService.setContext('App');
      loggerService.logger.info('API server made by J. Diego Sierra');
      loggerService.logger.info(
          'Current environment: ' + (process.env.NODE_ENV || 'development'),
      );
      loggerService.logger.info(
          'Application is running on: ' + (config.server['PORT'] || 3000),
      );
    });
  }
}
