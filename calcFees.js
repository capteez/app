import React,{Component} from 'react';
import { Alert,Image} from 'react-native';

import {Drawer,Container,Content,Form,Item,Body ,Label,Input,Text,Card,CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import MainHeader from './templates/MainHeader';
import DrawerLayout from './templates/DrawerLayout';

import mainNetwork from '../network/mainNetwork';

export default class calcFees extends Component{

    state = { feeValue:0 , text:[<Text></Text>] }

    componentWillMount()
    {
        mainNetwork.getFeesText()
        .then( (json) => {
            let mappedJson = json.map((item) => {
                if(!item){ return ; }
                return (item);
            });
            this.setState({text:mappedJson});
        });
    }

    render()
    {
        return (
            <Drawer
            type="overlay"
            content={<DrawerLayout />}
            tapToClose={true}
            openDrawerOffset={0.2} 
            styles={{
              drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
              main: {paddingLeft: 3},
            }}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            ref={(ref) => { this.drawer = ref; }}
            >
              <Container>
              <MainHeader drawerOpen={ () => { this.drawer._root.open() } } />
                
            <Card>
            <CardItem>
            <Body>
            <Text style={{fontSize:12}}> {this.state.text}</Text>
              </Body>
            </CardItem>
            </Card>
            <Form>
                    <Item floatingLabel>
                    <Label>المبلغ</Label>
                    <Input onChangeText={ (value)=> { this.setState({feeValue:value*5/100}) } } />
                    </Item>
                </Form>
                <Text>العمولة :  {this.state.feeValue}  ريال </Text>
            </Container>
            </Drawer>
        );
    }

}