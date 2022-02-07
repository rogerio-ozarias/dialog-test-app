import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;        
    max-width: 1024px;
    background-color: #EFEFEF;    
    margin: auto;            
    flex-wrap: wrap;        
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const InfoCard = styled.div`   
    display: flex; 
    padding: 10px;
    margin: 1%;
    width: 100%;       
    border: solid 1px #DDD;
    border-radius: 10px;     
    padding: 20px;      
    background-color:#FFF;
`;

export const UserInfo = styled.span`

`;

export const CardColum = styled.div`    
    display:flex;    
    flex-direction: column;       
`;

export const UserData = styled.div`    
    width:100%;  
`;

export const UserImg = styled.img`
    width:100%;      
`;

export const FriendsContainer = styled.div`
    display: flex;        
    max-width: 1024px;
    border-top: solit #000;
    margin: auto;            
    flex-wrap: wrap;        
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitleFriend = styled.h3`   
    display: block;
    width: 100%;
    margin: 20px;
`

export const FriendCard = styled.div`   
    display: block;
    width: 23%;   
    margin: 1%;         
    background-color:#FFF;
    font-family: var(--bs-font-sans-serif);
    font-size: 12px;        
    display:flex;        
    flex-direction: column;
    align-items: start;
    justify-content: center;    
    border: solid 1px #DDD;
    border-radius: 10px;     
    padding: 20px;      
    @media (max-width: 768px) {
        width: 100%;
    }
`;
