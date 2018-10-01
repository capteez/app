import React,{Component} from 'react';
import { Alert,Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Spinner,Container,Card,CardItem,Icon, Header, Content,H2, List, ListItem, Thumbnail,Text, Left, Body, Right, Button,Badge, H1 } from 'native-base';
import adsNetwork from '../network/adsNetwork';
 


class showAd extends Component {


    state ={ content: [<Content><Spinner color="green" /></Content>] };

    componentWillMount()
    {
        adsNetwork.getOne(this.props.id)
        .then((res) => { 

            const contnt = ( <Content>
                <Card>
            <CardItem>

              <Body >
              <Text style={{textAlign:'right'}}>{res[0].ad_title}</Text> 
              <H2>{res[0].ad_title}</H2> 
            <Badge info><Text style={{fontSize:12}} >{res[0].first_name}</Text></Badge>
             </Body>
            </CardItem>
          </Card>
            
            </Content>);
            this.setState({content:contnt});

         })
        .catch( (error) => { Alert.alert(error.message) } );
    }

    render(){
        return (
            <Container>
                <Header style={{ backgroundColor: '#4D4B56' }}  >
            <Left>
                <Icon name="arrow-back" onPress={() => { this.props.BackButton(); } } />
            </Left>
            <Body>
                <Image    style={{resizeMode:'contain',width: 175, height: 50}} source={{uri:"http://watch2buy.com/assets/site/images/logo.png"}} />    
            </Body>
              </Header>
            {this.state.content}
            </Container>
        );
    }

}

export default showAd;