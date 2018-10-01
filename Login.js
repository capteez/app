import React,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
import {Image} from 'react-native';
import Loginer from '../backend/Loginer';

class Login extends Component{

  state = {
    username:"",
    password: ""
  
  };

    render(){
        return (    <Container>
            <Image style={{resizeMode:"contain",width:null,height:200}} source={require("../assets/images/logo.jpeg")} />
            <Content>
              <Form>
                <Item>
                  <Input placeholder="اسم المستخدم" onChangeText={ (username) => { this.setState({username:username}) } }/>
                </Item>
                <Item last>
                  <Input placeholder="كلمة المرور" onChangeText={ (password) => { this.setState({password:password}) } }/>
                </Item>
              </Form>
              <Button block onPress={()=>{Loginer.Login(this.state.username,this.state.password)}} >
            <Text>تسجيل الدخول</Text>
          </Button>
            </Content>
          </Container>);
    }

}

export default Login;