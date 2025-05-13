
import { useState } from 'react';
import './App.css'
import { useQuery, gql, useMutation } from '@apollo/client';
function App() {
  const [newUser, setNewUser] = useState({ name: "" });


  // need to write below query as it is as like as resolver
  const GET_AUTHORS=gql`
  query getAuthors {
  authors {
    id
    name
  }
  }
  ` 

  const GET_AUTHOR_BY_ID=gql`
  query getAuthorById($id: ID!) {
      getAuthorById(id: $id) {
        id
        name
      }
  }`

const CREATE_AUTHOR = gql `
 mutation createAuthor($id:String!,$name:String){   
  createAuthor(id:$id,name:$name){
  id
  name
  }
 }
`

const {data,error,loading}= useQuery(GET_AUTHORS)
const {data:getUserDataByIdData,error:getUserDataByIdError,loading:getUserDataByIdLoading}= useQuery(GET_AUTHOR_BY_ID,{
  variables:{id:"1"}
})
const [createAuthor] =useMutation(CREATE_AUTHOR)

console.log(getUserDataByIdError?.message,"iiiiiiiiii")

console.log(data,"ddddddddddd")
if (loading) return <p>loadingggg</p>
if (error) return <p>error: {error.message}</p>

const handleCreateUser=()=>{
  console.log(typeof(newUser.name),"newwwwwwww")
  if (!newUser?.name) {
    console.error("Name is required but is missing.");
    return;
  }
  createAuthor({
    variables: { id: (Math.random() * 10000).toFixed(0), name: newUser?.name }
  });

}

  return (
    <>
     <div>
      <input  placeholder='name' onChange={(e)=>setNewUser((prev)=>({...prev,name:e.target.value}))}/>
      <button onClick={handleCreateUser}>create user</button>
      <h1>choosen author</h1>
      <p>{getUserDataByIdData?.getAuthorById?.name}</p>
      {data.authors.map((each)=>(
        <div>
          <p>{each.id}</p>
          <p>name:{each.name}</p>
          </div>
      ))}
     </div>
    </>
  )
}

export default App
