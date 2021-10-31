import * as React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
flex: 1;
alignItems:center ;
background: #D6A9AC;
`;
const TextInput= styled.TextInput`
fontSize: 24px;
color: #6C4B5A;
`;
const StyledText = styled.Text`
fontSize: 30px;
textAlign:center;
font-weight: bold;
`;
const ButtonText = styled.Text`
position: relative;
fontSize: 20px;
color: white;
textAlign: center;
`;
const Button = styled.TouchableOpacity`
position: relative;
borderRadius: 50px;
backgroundColor: #C2585F;
width: 200px;
height: 40px;
alignItems: center;
`;
var products = [];

function InputScreen() {
  const [product, setText] = React.useState([]);
  const onPress = () => {
    products.push(product.text);
    console.log(products);
  }

  return (
    <StyledView >
       <StyledText>
       Add to supermarket list
    </StyledText>
      <TextInput
        //style={styles.input}
        onChangeText={(text) => setText({ ...product, text })}
        placeholder="Type Anything..."
      />
      <Button
        onPress={onPress}
  
      >
        <ButtonText>+</ButtonText>
      </Button>
    </StyledView>
  );
}
export { InputScreen, products};