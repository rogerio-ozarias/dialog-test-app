import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container, UserCard, CardColum, UserImg , UserData} from './styles';
import {    
  Link
} from "react-router-dom";

const list = gql `{
    list{
      _id, name, age, eyeColor, company, email, picture
    }
}`;

export default function Home() {      

  const [loading, setLoading] =  useState(true);      

  const response = useQuery(list);   
  
  useEffect( () => {
    
    if(response.data)
      setLoading(false);    

  },[response]);

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
