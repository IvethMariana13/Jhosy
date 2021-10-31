import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import styled from 'styled-components/native';

const StyledView = styled.View`
flex: 1px;
backgroundColor: #F4E7F8;
alignItems: center;
justifyContent: center;
`;
const StyledText = styled.Text`
  fontSize: 30px;
  textAlign: center;
  color: #7B51A1;
  font-weight: bold;
`;
const NormalText = styled.Text`
fontSize: 35px;
color: gray;
`;
const NameText = styled.Text`
fontSize: 20px;
color: skyblue;
`;
const ButtonText = styled.Text`
fontSize: 25px;
color: white;
`;
const MStyles = styled.TouchableOpacity`
borderRadius: 50px;
padding: 5px;
margin: 10px;
backgroundColor: pink;
width: 200px;
alignItems: center;
`;
const DStyles = styled.TouchableOpacity`
borderRadius: 50px;
padding: 5px;
margin: 10px;
backgroundColor: #6C4B5A;
width: 200px;
alignItems: center;
`;
const CStyles = styled.TouchableOpacity`
borderRadius: 50px;
padding: 5px;
margin: 10px;
backgroundColor: #5B2775;
width: 200px;
alignItems: center;
`;
const NStyles = styled.TouchableOpacity`
borderRadius: 50px;
padding: 5px;
margin: 10px;
backgroundColor: #B62F68;
width: 200px;
alignItems:center;
`;
function HomeScreen() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState();

    const increaseCounter = () => {
        if(counter<= 999){
            setCounter((current) => current + 1);
        }
    };

    const decreaseCounter = () => {
        if (counter >= 1){
            setCounter((current) => current - 1);
        }
        
    };
    const automatic = () => {
        for(var i=counter; i<1000; i++){
            setTimeout(function(){   
                setCounter((current) => current + 1); 
            }, 0.1)
        }
    };
    const myName = () => {
        setTimeout(() => {
            setName((current) => "Iveth Mariana Serna Serna");
        },);
        setTimeout(() => {
            setName((current) => "");
        }, 5000);
    };

    return (
        <StyledView>
            <StyledText>
                Counter
            </StyledText>
            <NormalText>{counter}</NormalText>
            <MStyles
                onPress={increaseCounter}
            >
                <ButtonText>+</ButtonText>
            </MStyles>
            <DStyles
                onPress={decreaseCounter}
                
            >
                <ButtonText>-</ButtonText>
            </DStyles>
            <CStyles
                onPress={automatic}
            
            >
                <ButtonText>Start</ButtonText>
            </CStyles>
            <NStyles
                onPress={myName}
            >
                <ButtonText>My Name</ButtonText>
            </NStyles>
            <NameText>{name}</NameText>
            <StatusBar style="auto" />
        </StyledView>
    );   
    
};
export default HomeScreen;