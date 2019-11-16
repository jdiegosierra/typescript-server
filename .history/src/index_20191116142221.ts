import "reflect-metadata";

import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers/resolvers";

const typeDefs = importSchema("schema.graphql");

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
