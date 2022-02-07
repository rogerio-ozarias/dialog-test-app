import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container, UserCard, CardColum, UserImg , UserData} from './styles';
import {    
  Link,
  useParams
} from "react-router-dom";

const userList = (name) => {
  return gql `
      {
          list(name:"${name}"){
              _id, name, age, eyeColor, company, email, picture
              friends{
                  _id, name, age, eyeColor, company, email, picture
              }
          }
      }` ;
}

function UserBox(props) {
  const user = props.user;

  return (    
    <UserCard>                  
      <Link style={{textDecoration:'none'}} to={ `/user/${user._id}` } >
          <UserImg src={ `${user.picture}` }/>                
          <CardColum>         
            <UserData>name: {user.name}</UserData>
            <UserData>age: {user.age}</UserData>
            <UserData>eyeColor: {user.eyeColor}</UserData>
            <UserData>company: {user.company}</UserData>
            <UserData>email: {user.email}</UserData>
          </CardColum>           
        </Link>
    </UserCard>    
  );
}

export default function Search() {    

  let { search } = useParams();
  const [loading, setLoading] =  useState(true);
  const response = useQuery(userList(search)) ;  

  useEffect( () => {
    
    if(response.data)
      setLoading(false);    

},[response]);  

  return (    
    <Container>
        {      
          (loading) ? 
            <>carregando...</> 
          :    
            response.data.list.map(function(user){
              return <UserBox user={user} key={user._id}/>;
            })
        }              
    </Container>
  );
}
