import React, {Component} from 'react';
import { Text, View,Button} from 'react-native';

import pageSwitcher from '../backend/pageSwitcher';

class Main extends Component{

     Prize = "NotLogin";

     render(){
         return (<View></View>);
     }

    componentDidMount(){
        pageSwitcher.checkLoginStatus();
    }

}


export default Main;