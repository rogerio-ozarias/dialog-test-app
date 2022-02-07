import styled from 'styled-components';

export const Container = styled.div`
    display: flex;        
    background-color: #f8f9fa !important;
    max-width:1024px;
    margin: auto;
`;

export const NavBar = styled.nav`    
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
`;

export const InputBox = styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    margin: 0 10px;
    font-size: 1rem;
    font-weight: 400;
    color: #212529;
    border: 1px solid #ced4da;
    border-radius: .25rem;    
`;

export const TitleBox = styled.h3`
    margin: 0 20px;
`;

export const SearchBtn = styled.button`
    display: inline-block;    
    text-align: center;
    text-decoration: none;        
    border: 1px solid transparent;    
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;    
    -webkit-appearance: button;    
    color: #198754;
    cursor: pointer;    
    border-color: #198754;
    margin: 2px;    
    &:hover {        
        color: #fff;
        background-color: #198754;
        border-color: #198754;
    }
`;

export const BackBtn = styled.button`
    display: inline-block;    
    text-align: center;
    text-decoration: none;        
    border: 1px solid transparent;    
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;    
    -webkit-appearance: button;    
    color: #198754;
    cursor: pointer;    
    border-color: #198754;
    margin: 2px;    
    &:hover {        
        color: #fff;
        background-color: #198754;
        border-color: #198754;
    }
`;

export const FormBox = styled.form`
    display: flex !important;
`;

export default Container;