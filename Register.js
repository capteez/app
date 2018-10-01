import React,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
import Loginer from '../backend/Loginer';

class Register extends Component{

  state = {
    username:"",
    email:"",
    phone:"",
    password: "",
    repassword:""
  };

    render(){
        return (    <Container>
            <Image style={{resizeMode:"contain",width:null,height:200}} source={require("../assets/images/logo.jpeg")} />
            <Content>
              <Form>
              <Item>
                  <Input placeholder="اسم المستخدم" onChangeText={ (username) => { this.setState({username:username}) } }/>
                </Item>
                <Item>
                  <Input placeholder="البريد الالكتروني" onChangeText={ (email) => { this.setState({email:email}) } }/>
                </Item>
                <Item>
                  <Input placeholder="رقم الهاتف" onChangeText={ (phone) => { this.setState({phone:phone}) } }/>
                </Item>
                <Item >
                  <Input placeholder="كلمة المرور" onChangeText={ (password) => { this.setState({password:password}) } }/>
                </Item>               
                 <Item last>
                  <Input placeholder="اعادة كلمة المرور" onChangeText={ (repassword) => { this.setState({repassword:repassword}) } }/>
                </Item>
              </Form>
              <Button block onPress={Loginer.Register(this.state)} >
            <Text>تسجيل</Text>
          </Button>
            </Content>
          </Container>);
    }

}

export default Register;