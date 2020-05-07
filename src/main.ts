require('dotenv').config();
import config from "./config/default";
// Dependencies
import { AppModule } from './app.module';
import { LoggerService } from './shared/logger/logger.service';
import * as cluster from 'cluster';
import * as os from 'os';

(async () => {
  const loggerService = new LoggerService();
  loggerService.setContext('App');

  if (config.server.CLUSTER_MODE) {
    // Check if current process is master.
    if (cluster.isMaster) {
      // Get total CPU cores.
      const cpuCount = os.cpus().length;

      // Spawn a worker for every core.
      for (let j = 0; j < cpuCount; j++) {
        cluster.fork();
      }
    } else {
      // This is not the master process, so we spawn the express server.
      await AppModule.start(loggerService);
    }

    // Cluster API has a variety of events.
    // Here we are creating a new process if a worker die.
    cluster.on('exit', function (worker) {
      loggerService.setContext('Master');
      loggerService.logger.info(`Worker ${worker.id} died'`);
      loggerService.logger.info(`Staring a new one...`);
      cluster.fork();
    });
  } else {
    // const app = new AppModule(loggerService);
    await AppModule.start(loggerService);
  }

})();
