
import React,{Component} from 'react';
import { Alert,Image} from 'react-native';

import {Drawer,Container,Content,Form,Item,Body ,Label,Input,Text,Card,CardItem,Textarea } from 'native-base';
import DrawerLayout from './templates/DrawerLayout';
import MainHeader from './templates/MainHeader';

export default class contactUs extends Component{

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
            <MainHeader drawerOpen={ () => { this.drawer._root.open() } } />
            <Container>
            <Card>
                <CardItem>
                    <Body>
                        <Text>* نعتذر عن الإتصال بأرقام الجوالات، وسيلة التواصل لدينا هي البريد الالكتروني</Text>
                        <Text>* تأكد من صحة بريدك الإلكتروني حتى يتم الرد عليك</Text>
                    </Body>
                </CardItem>
            </Card>
            <Form>
                    <Item floatingLabel>
                        <Label>بريدك الالكتروني</Label>
                        <Input onChangeText={ (value)=> { this.setState({feeValue:value*5/100}) } } />
                    </Item>

                    <Item floatingLabel>
                        <Label>عنوان الرسالة</Label>
                        <Input onChangeText={ (value)=> { this.setState({feeValue:value*5/100}) } } />
                    </Item>

                        <Textarea rowSpan={5} bordered placeholder="الرسالة" />
                    
                </Form>
            </Container>
            </Drawer>
        );
    }

}