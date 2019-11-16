
import dotenv from 'dotenv';
dotenv.config();
// usar https://stackoverflow.com/questions/50813591/how-to-use-node-config-in-typescript
import { config } from '../config/environments';
import Server from './server';

// import "reflect-metadata";
// import { GraphQLServer } from "graphql-yoga";
// import { importSchema } from "graphql-import";
// import { resolvers } from "./resolvers/resolvers";

function main() {
    const server = Server.init(config.PORT);
    server.start(() => {console.log("holita")});
}

main();

// const typeDefs = importSchema("schema.graphql");
// const server2 = Server.init(8000);
// server2.start(() => console.log("server started at 8000"));

// const server = new GraphQLServer({ typeDefs, resolvers });
// server.start(() => console.log("Server is running on localhost:4000"));
