import "reflect-metadata";

import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers/resolvers";
import Server from './server/index';

const typeDefs = importSchema("schema.graphql");
const server2 = Server.init(8000);
server2.start(() => console.log("server started at 8000"))

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
