import * as React from 'react';
import { useIsFocused } from '@react-navigation/core';
import styled from 'styled-components/native';
import {products} from './input'

const StyledView = styled.View`
flex: 1;
alignItems:center ;
background: #F9D9DB;
`;
const NameText = styled.Text`
fontSize: 23px;
color: #6C4B5A;
`;
const StyledText = styled.Text`
fontSize: 30px;
textAlign:center;
font-weight: bold;
color: #CF5E66;
`;

function ListScreen() {
    const isFocused = useIsFocused();
  
    React.useEffect(() => {
      if (isFocused) {
      }
    }, [isFocused]);
    return (
      <StyledView>
        <StyledText>
          List of products
        </StyledText>
        { products.map((item, key)=>(
           <NameText key={key} >* { item } </NameText>)
           )}
      </StyledView>
    );
  }
    
export default ListScreen;