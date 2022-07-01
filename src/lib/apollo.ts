import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new  ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4okfh3x09qg01yw1a3x2se1/master',
    cache: new InMemoryCache(),
})