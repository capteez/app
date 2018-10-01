import {Component} from 'react';
import { Text, View} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class addAd extends Component
{


    state ={
      title:"",
      phone :"",
      city:"",
      cat:"",
      data :""
    };

    render(){
        return (
            <Container>
            <Header />
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>عنوان الاعلان</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>وسيلة الاتصال </Label>
                  <Input />
                </Item>
                <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="الدولة"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="الامارات - دولة" value="key0" />
                <Picker.Item label="الكويت - دولة" value="key0" />
                <Picker.Item label="البحرين - دولة" value="key0" />
                <Picker.Item label="قطر - دولة" value="key0" />
                <Picker.Item label="السعودية - جدة" value="key0" />

              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="الفئة"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="ساعات" value="key0" />
                <Picker.Item label="اقلام" value="key0" />
                <Picker.Item label="محافظ" value="key0" />
                <Picker.Item label="كبكات" value="key0" />


              </Picker>
            </Item>
            <Textarea rowSpan={5} bordered placeholder="تفاصيل الاعلان" />

              </Form>
            </Content>
          </Container>
          );
    }

}

export default addAd;