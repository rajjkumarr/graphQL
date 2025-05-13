export const typeDefs =`#graphql

  type Author{
    id:ID!
    name:String!
  }

  type Book{
    id:ID!
    title:String!
    publishedYear:Int
  }
  type Query{
    authors:[Author]
    books:[Book],
    getAuthorById(id:ID!):Author
  }

  type Mutation{
createAuthor(id:String!,name:String):Author
  }

`