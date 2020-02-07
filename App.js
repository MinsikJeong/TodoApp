import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import ToDo from "./ToDo";


const { height, width } = Dimensions.get("window");

export default function App() {

  const [ newToDo, setNewToDo ] = useState("")
  const _controlNewToDo = text => {
    setNewToDo(text)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={styles.title}>To do App</Text>
      <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder={"New To Do"}
        value={newToDo}
        onChangeText={_controlNewToDo}
        placeholderTextColor={"#999"}
        returnKeyType={"done"}
      >
      </TextInput>
      <ScrollView>
        <ToDo text={"Hello I'm a To Do"}></ToDo>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,  // 휴대폰 크기에서 25만큼 빼준 크기
    borderTopLeftRadius: 10,  //카드 왼쪽 상단을 둥글게 만듬
    borderTopRightRadius: 10,  //카드 오른쪽 상단을 둥글게 만듬
    ...Platform.select({   //플랫폼 별로 다른 스타일을 적용하는 방법
      ios: {    //아이폰일 경우
        shadowColor:"rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1, //쉐도우가 위아래로 왔다갔다 하지 않게하기 위함.
          width: 0 //border부분에 쉐도우가 있게하기 위함
        }
      },
      android: {   //안드로이드일 경우
        elevation: 3  //아이폰일 경우 보다 옵션이 제한적 / 0~5 까지의 숫자 / 숫자가 클수록 쉐도우가 강한 것
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});
