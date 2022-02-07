import React, { useState } from 'react';
import { Container, NavBar, FormBox, InputBox, SearchBtn, BackBtn, TitleBox } from './styles';
import {    
  useHistory 
} from "react-router-dom";

const Header = () => {      

  const [search, setSearch] = useState('');

  const history = useHistory();

  const onChange = (e) => {
    setSearch(e.target.value);    
  }

  const searchButton = () => {
    if(search)
      history.push("/search/"+search);
    else
      history.push("/");
  }

  const backButton = () => {    
      setSearch('');
      history.push("/");
  }
  
  return (    
    <Container>
      <NavBar>                
          <TitleBox>My Social</TitleBox>
          <FormBox>            
            <InputBox value={search} type="search" placeholder="Search" aria-label="Search" onChange={onChange} />
            <SearchBtn onClick={searchButton} type="button">Search</SearchBtn>   
            <BackBtn onClick={backButton} type="button">HOME</BackBtn>            
          </FormBox>        
      </NavBar>
    </Container>
  );
}

export default Header;