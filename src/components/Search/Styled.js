import styled from 'styled-components';

export const SearchHero = styled.div`
    display: flex;
    position: absolute;  
    right: 0;
    top: 10px;
    
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display:flex;
    justify-content: space-around;
    align-items: center;       
`

export const Title = styled.h1`
    margin: 0 20px 0 0;
    font-size: 30px;
    font-style:italic;
    text-transform: uppercase;
    letter-spacing: -4px;
    color: white;
`

export const Input = styled.input`
    margin-right: 10px;
    border-radius: 20px;    
`

export const Button = styled.button`
    width: 110px;
    border-radius: 20px;
    font-size: 15px;
    font-weight:bold;
    font-style:italic;
    color: white;
    background: #ed1d24;
    text-transform: uppercase;
    cursor: pointer;
`