import styled from 'styled-components';

export const Board = styled.div`
    width: 500px;   
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background: #ffffff99;
    border: 5px #3b58a9 solid;
    cursor: pointer;
`
export const Image = styled.img`
    width: 250px;
`

export const Hero = styled.p`
   font-size: 30px;  
   font-style: italic;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: -4px;
    
`