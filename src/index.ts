
import 'module-alias/register';
import dotenv from 'dotenv'; dotenv.config();
import config from 'config'; // TODO: Custom path process.env["NODE_CONFIG_DIR"] = __dirname + "/configDir/";
import { logger } from '@utils/logger';
import Server from '@server/index';
// try {
// } catch(err) {
//     console.log(err);
//     process.exit();
// }



// import "reflect-metadata";
// import { GraphQLServer } from "graphql-yoga";
// import { importSchema } from "graphql-import";
// import { resolvers } from "./resolvers/resolvers";


(() => {
    logger.info('API server made by J. Diego Sierra');
    logger.info('Current environment: ' + process.env.NODE_ENV || "development");
    
    const server = Server.init(config);
    server.start();

    // Handle Errors
    // Sustituir por errorhandler??
    // process.on('uncaughtException', (err) => {
    //     if (err.stack) {
    //         logger.error('Uncaught Exception: ' + err.stack);
    //     } else {
    //         logger.error('Uncaught Exception: ' + err);
    //     }
    // });
})();

// const typeDefs = importSchema("schema.graphql");
// const server2 = Server.init(8000);
// server2.start(() => console.log("server started at 8000"));

// const server = new GraphQLServer({ typeDefs, resolvers });
// server.start(() => console.log("Server is running on localhost:4000"));
