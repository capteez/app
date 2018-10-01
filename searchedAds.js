
import React,{Component} from 'react';
import { Alert,Image} from 'react-native';

import { Container,Spinner,Card,CardItem,Icon, Header, Content,H2, List, ListItem, Thumbnail,Text, Left, Body, Right, Button,Badge, H1 } from 'native-base';
import {Actions} from 'react-native-router-flux';

import adsBackend from '../backend/adsBackend';

class searchedAds extends React.Component {

    state={
        searched:[<Spinner color="green" />] 
    };

    componentWillMount(){
        adsBackend.searchAds(this.props.search,this.props.city,this.props.section).then((res) => this.setState({searched:res}))
    }


    render(){
        return(  
            <Container>
             <Header style={{ backgroundColor: '#4D4B56' }}  >
                <Left>
                <Icon name="arrow-back" onPress={() => { Actions.Home(); } } />
                </Left>
                <Body >
                <Image    style={{resizeMode:'contain',width: 175, height: 50}} source={{uri:"http://watch2buy.com/assets/site/images/logo.png"}} />
                </Body>
            </Header>
          <Content>
           
          <List   listItemPadding={50}>
            {this.state.searched}
          </List>

        </Content>
        </Container>
        );
    }

}

export default searchedAds;