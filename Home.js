import React,{Component} from 'react';
import { Alert,Image} from 'react-native';

import {Drawer,Form,Spinner,Card,CardItem,Picker,Input ,Item, Container,TabHeading,ScrollableTab,Icon,Tab,Tabs, Header, Content, List, ListItem, Thumbnail,Text, Left, Body, Right, Button } from 'native-base';
import {Actions} from 'react-native-router-flux';

import adsBackend from '../backend/adsBackend';
import DrawerLayout from './templates/DrawerLayout';
import MainHeader from './templates/MainHeader';

class Home extends Component
{
    state = {adItems:[<Spinner color="green" />] , 
      requests:[<Spinner color="green" />] ,
      
      search:"",
      city:"",
      section:"",

      cities:[],
      sections:[]
    };

    componentWillMount()
    {
 
      adsBackend.getAds(0,0)
      .then((list) => { 
        this.setState({adItems:list})
        })
      .catch((error) =>  {Alert.alert(error.message);});

      adsBackend.getRequests()
      .then((list) => { 
        this.setState({requests:list})
        })
      .catch((error) =>  {Alert.alert(error.message);});
      
      adsBackend.getCities()
      .then((list) => { 
        this.setState({cities:list})
        })
      .catch((error) =>  {Alert.alert(error.message);});

      adsBackend.getSections()
      .then((list) => { 
        this.setState({sections:list})
        
        })
      .catch((error) =>  {Alert.alert(error.message);});
    }


    render(){
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
              
              
              <Tabs page={2}  tabBarUnderlineStyle={{backgroundColor:"#428bca"}} renderTabBar={() => <ScrollableTab style={{ backgroundColor: "white" }} />} locked>
              <Tab heading={ <TabHeading style={{ backgroundColor: "#fff" }} ><Text  style={{color:"#428bca"}}> طلبات <Icon name="md-book" style={{fontSize: 20, color: '#428bca'}} /></Text></TabHeading>} >            
          <Content>
           
           <List   listItemPadding={50}>
             {this.state.requests}
           </List>

         </Content></Tab>

          <Tab heading={ <TabHeading style={{ backgroundColor: "#fff" }}><Text style={{color:"#428bca"}}>البحث <Icon name="search" style={{fontSize: 20, color: '#428bca'}} /></Text></TabHeading>} >     
          <Card>
            <CardItem>
              <Body >
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.city}
                onValueChange={(val) => { this.setState({ "city":val }); }}
              >
               <Picker.Item label="الكل" value="" /> 
                               {this.state.cities}

               
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.section}
                onValueChange={(val) => { this.setState({ "section":val }); }}
              >
                  <Picker.Item label="الكل" value="" /> 

                {this.state.sections}
             
             
              </Picker>
            </Item>
            <Item>
            <Item>
              <Input placeholder="بحث"  onChangeText={ (se) => { this.setState({search:se}); } } />
            </Item>
              </Item>
           
              <Right><Button onPress={ ()=>{ Actions.searchedAds({search:this.state.search,city:this.state.city,section:this.state.section});  } } >
              <Text>بحث</Text>
              
              </Button>
              </Right>
          </Form>
          </Body>
          </CardItem>
          </Card>
          <Content>
           
           <List  listItemPadding={50}>
             {this.state.searched}
           </List>

         </Content>
          </Tab>

         <Tab heading={ <TabHeading  style={{ backgroundColor: "#fff" }}><Icon name="home"/><Text style={{color:"#428bca"}}>الكل </Text></TabHeading>} >

<Content>

    <List onEndReachedThreshold={0}  onEndReached={() => { Alert.alert("end"); }}  listItemPadding={50}>
      {this.state.adItems}
    </List>

  </Content>
</Tab>
        </Tabs>
        
            </Container>
           </Drawer>
          );
    }

    LoadNew(){
      backendHome.getAds(this.state.adItems.length,20)
      .then((list) => { 
          this.state.adItems.push(list);
        })
      .catch((error) =>  {});
    }


   

}

export default Home;