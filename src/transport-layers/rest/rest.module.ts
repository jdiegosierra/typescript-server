import { Module } from '@nestjs/common';
import { PingModule } from '../../modules/ping/ping.module';

@Module({
  imports: [PingModule],
})
export class RestModule {
  // Middlewares
  // app.use(helmet())
  // app.use(bodyParser.json({limit: '500kb'}));
  // app.use(bodyParser.urlencoded({limit: '500kb', extended: true}));
  // app.use(cors());
  // app.use(errorhandler());
  //...
}
