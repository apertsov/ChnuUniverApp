import React from 'react'
import { View, Text, SectionList, TextInput, Button, Alert, TouchableOpacity } from 'react-native'


class ProfileTab extends React.Component {
  static navigationOptions = {
      title: 'Профіль',
  };

  logout() {
    Alert.alert(
      'Ви дійсно хочете вийти?',
      '',
      [
        { text: 'Ні', onPress: () => {}, style: 'cancel'},
        { text: 'Так', onPress: () => {
          // this.props.logout().then(() => {
          //   if (this.props.profile.loggedIn === false) {
          //     startLogin()
          //   }
          // })
        }},
      ]
    )
  }

  getPictureLetters(str) {
    if (!str) return ''
    const pattern = /[A-ZА-Я]+/g
    const alpha = str.match(pattern)
    if (!alpha || alpha.length <= 0) return ''
    if (alpha.length === 1) return alpha[0]
    return [alpha[0], alpha[1]].join('')
  }

  changePassword() {
    // this.props.navigator.showModal({
    //   screen: 'ChangePassword'
    // })
  }

  render() {
      const {navigate, push} = this.props.navigation;
      const sections = [
        {
          title: 'Електронна пошта',
          data: [
            {
              key: 'email',
              template: () => (
                <TextInput editable={false}
                  value={'emalil@email.com'}
                  placeholder="Не вказано"
                  underlineColorAndroid="#fff"
                  fontWeight="300"
                  fontSize={16}
                />
              )
            }
          ]
        },
        {
          title: 'Телефон',
          data: [
            {
              key: 'phone',
              template: () => (
                <TextInput editable={false}
                  value={'+380'}
                  placeholder="Не вказано"
                  underlineColorAndroid="#fff"
                  fontWeight="300"
                  fontSize={16}
                />
              )
            }
          ]
        },
        {
          data: [
            {
              key: 'phone',
              template: () => (
                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => this.changePassword()}>
                  <Text style={{ width: '100%', fontSize: 16, textAlign: 'center', color: 'rgb(0, 122, 255)' }}>Змінити пароль</Text>
                </TouchableOpacity>
              )
            }
          ]
        },
        {
          data: [
            {
              key: 'phone',
              template: () => (
                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => this.logout()}>
                  <Text style={{ width: '100%', fontSize: 16, textAlign: 'center', color: 'red' }}>Вийти</Text>
                </TouchableOpacity>
              )
            }
          ]
        }
      ]
      // const group = this.props.groups.items.find(g => g.Id === this.props.profile.userInfo.GroupId)
      const group = {Name: 402}

      return (<>
      <SectionList stickySectionHeadersEnabled={false}
        style={{ backgroundColor: '#f4f4f4', flex: 1 }}
        sections={sections}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: '#ddd'
          }}>
            {item.template()}
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 3
          }}>
            <Text style={{ color: '#7a92a5', fontWeight: '300' }}>
              {section.title}
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={{ marginVertical: 30 }}>
            <View style={{ alignItems: 'center' }}>
              <View style={{
                backgroundColor: '#ccc',
                width: 130,
                height: 130,
                borderRadius: 65,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: 56,
                  fontWeight: '300',
                  color: '#333'
                }}>{this.getPictureLetters('UserName')}</Text>
                  </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={{ paddingHorizontal: 40, fontSize: 22, textAlign: 'center' }}>
                  UserName
                </Text>
                {/* {this.props.profile.userRole === userRoles.STUDENT ? */}
                  <Text style={{ fontWeight: '300', marginTop: 5 }}>
                    {group ? `група ${group.Name}`: null}
                  </Text> 
                  {/* : */}
                {/* null} */}
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ height: 20, paddingTop: 25, paddingHorizontal: '15%' }} />
        )}>
        </SectionList>
      </>
      );
  }
}
export default ProfileTab
