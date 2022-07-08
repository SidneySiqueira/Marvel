import styled from 'styled-components';

export const Datasheet = styled.div`
    width: 100%;
    height:100%;
    background: #ffffff99;
    position: absolute;
    left: 0;
`
export const Presentation = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 500px;
    margin: 10px 50px 20px 10px;
`
export const Name = styled.p`
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    border-radius: 10px;
    margin: 50px;
    padding: 10px;
`
export const Description = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    border-radius: 10px;
    margin: 50px;
    padding: 10px;
`
export const X = styled.p`
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 20px 0 0; 
    padding: 5px;  
    background: white;
    border-radius: 50px;
    cursor: pointer;
`
export const Shares = styled.div`
    display: flex;
`

export const Comics = styled.p`
    width: 30%;
    display: flex
`

