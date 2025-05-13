const Author=[{
    id:"1",
    name:"raj kumar"
},{
    id:"2",
    name:"mohan kumar"
}]

const Book=[{
    id:1,
    title:"rakta charitra",
    publishedYear:2022
},{
    id:2,
    title:"maro charitra",
    publishedYear:2024

}]


export const resolvers={
    Query:{
        authors:()=>{
            return Author
        },

        books:()=>{
            return Book
        },
        getAuthorById:(parent,args)=>{
            const id =args.id
            console.log(id,"lllllllllll")
         return Author.find((user)=>user.id===id)
        }
     },
     Mutation:{
        createAuthor:(parent,args)=>{
            const {id,name}=args
            console.log(name,"namesssssssssssss")
            const newAuthor={
                id:(Author.length+1).toString(),
                name:name
            }
            console.log(newAuthor,";;;;;;;;;")
            Author.push(newAuthor)
            return newAuthor

        }
     }
}