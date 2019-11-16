export const resolvers: IREsolvers = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`
    }
  };