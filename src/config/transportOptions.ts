import {
  Transport,
  ClientOptions,
  TcpClientOptions,
} from '@nestjs/microservices';
import { join } from 'path';

export const raftOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'raft',
    protoPath: './src/transport-layers/rpc/raft.proto',
    url: '0.0.0.0:' + process.env.GRPC_PORT_SERVER,
  },
};

export const tcpOptions: TcpClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 3001,
  },
};
