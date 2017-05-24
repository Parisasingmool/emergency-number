import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export class TabBar extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

         <View style={{marginTop: 22}}>
          <View>
          <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  aaaa                                      
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  bbbb
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  cccc
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  dddd
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  eeee
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  ffff
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  gggg
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
              style={{
                padding: 12,
                borderWidth: 2,
                borderColor: 'black'
              }}>
              <View>
                <Text style={{
                  fontSize: 20
                }}>
                  hhhh
                </Text>
              </View>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              เหตุด่วนเหตุร้าย</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              ทางการแพทย์</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              หน่วยงานราชการ</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              สาธารณูปโภค</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              สถาบันการเงิน</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20
            }}>
              การขนส่ง</Text>
          </View>
        </TouchableHighlight>
         <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View>
            <Text style={{
              fontSize: 20,
              borderWidth: 2,
              borderColor: 'black'
            }}>
              </Text>
          </View>
        </TouchableHighlight>


      </View>
    );
  }
}