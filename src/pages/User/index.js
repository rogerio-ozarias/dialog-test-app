import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container, InfoCard, CardColum, UserImg , UserData, FriendsContainer, FriendCard, TitleFriend} from './styles';
import {    
    useParams
  } from "react-router-dom";

const userProfile = (id) => {
    return gql `
        {
            user(_id:"${id}"){
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
        <Container>            
            <InfoCard style={{  }}>                
                <div style={{display:'block', padding: 10 }}>
                    <UserImg src={ `${user.picture}` }/>     
                </div>
                <div style={{ display:'block', padding: 10 }}>
                    <CardColum>         
                        <UserData>name: {user.name}</UserData>
                        <UserData>age: {user.age}</UserData>
                        <UserData>eyeColor: {user.eyeColor}</UserData>
                        <UserData>company: {user.company}</UserData>
                        <UserData>email: {user.email}</UserData>
                    </CardColum>        
                </div> 
            </InfoCard>              
            <FriendsContainer> 
                <TitleFriend>Friends</TitleFriend>
                {user.friends?.map(function(friend){
                        return <FriendBox friend={friend} key={friend._id}/>;
                    })}
            </FriendsContainer> 
        </Container>
    );
  }

function FriendBox(props) {
    const friend = props.friend;
  
    return (
        <FriendCard>        
            <span>          
                <UserImg src={ `${friend.picture}` }/>                
                <CardColum>         
                <UserData>name: {friend.name}</UserData>
                <UserData>age: {friend.age}</UserData>
                <UserData>eyeColor: {friend.eyeColor}</UserData>
                <UserData>company: {friend.company}</UserData>
                <UserData>email: {friend.email}</UserData>
                </CardColum>                    
            </span>
        </FriendCard>  
    );
}

export default function User(props) {        
    let { id } = useParams();
    const [loading, setLoading] =  useState(true);
    const response = useQuery(userProfile(id)) ;     

    useEffect( () => {
    
        if(response.data)
          setLoading(false);    
    
    },[response]);      

    return (                               
        !loading ?                        
            <UserBox user={response.data.user} key={response.data.user._id}/>                
        :
            <>carregando...</>                                          
    );
}
