import { IResolvers } from "graphql-yoga/dist/src/types";

export const resolvers: IResolvers = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`
    },
    Mutation: {
      register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
    }
  };