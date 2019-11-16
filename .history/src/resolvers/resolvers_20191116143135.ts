export const resolvers: IResolvers = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`
    }
  };