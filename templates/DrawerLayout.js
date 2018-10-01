import React,{Component} from 'react';
import { Text, View,Image} from 'react-native';

import { List,ListItem,Container, Header,Right, Content, Form, Item, Input, Label } from 'native-base';
import {Actions} from 'react-native-router-flux';
import storageHandler from '../../backend/storageHandler';

class DrawerLayout extends Component
{

    state = {
        loginContent : [<Content><ListItem onPress={()=>{ Actions.Login(); }} ><Text>تسجيل دخول</Text></ListItem>
            <ListItem onPress={()=>{ Actions.Register(); }} ><Text>تسجيل </Text></ListItem>
            </Content>]
    };

    componentWillMount()
    {
        storageHandler.getPasswordAndUsername()
        .then((val) => { 
            const username = Values[0][1];
            const password = Values[1][1];
            if(!!username && !!password){
                this.setState({loginContent:[<Content>
                    <ListItem onPress={()=>{ Actions.Login(); }} ><Text>تسجيل دخول</Text></ListItem>
                    <ListItem onPress={()=>{ Actions.Register(); }} ><Text>تسجيل </Text></ListItem>
                    </Content>]});
                }
          } );
        
    }


 render(){

     return (<Content style={{ backgroundColor: '#FFFFFF' }}>
     <Image style={{ resizeMode:"contain",height:150,width:null }} source={require("../../assets/images/logo.jpeg")} />
     <List>

        <ListItem onPress={()=>{ Actions.Home(); }} ><Text>الرئيسية</Text></ListItem>
        {loginded}
<ListItem onPress={()=>{}} itemDivider></ListItem>
         <ListItem onPress={()=>{ Actions.calcFees(); }}><Text>حساب عمولة الموقع</Text></ListItem>
         <ListItem onPress={()=>{ Actions.contactUs(); }}><Text>اتصل بنا</Text></ListItem>
         </List>
 </Content> );
 }
}

export default DrawerLayout;