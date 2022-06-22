import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new  ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4osie1x0u1s01xn0x8o8tdo/master',
    cache: new InMemoryCache(),
})