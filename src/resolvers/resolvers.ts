
import { ResolverMap } from '../utils/grapgql-utils'

export const resolvers: ResolverMap = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`
    },
    Mutation: {
      register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
    }
  };