import React,{Component}  from 'react';
import {Image} from 'react-native';

import {Header,Left,Button,Icon,Body} from 'native-base';


export default class MainHeader extends Component{

    render()
    {
        return (<Header style={{ backgroundColor: '#4D4B56' }} hasTabs  >
        <Left>
          <Button onPress={ () =>{ this.props.drawerOpen(); } } transparent>
          <Icon name="menu" />
           </Button>
          </Left>
       <Body >
         <Image    style={{resizeMode:'contain',width: 150, height: 50}} source={require("../../assets/images/logo.jpeg")} />
         </Body>
        </Header >);
    }

}