/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { image } from '../constants';
import { UIButton } from '../components/index';
const Home = () => {
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ]);
    return <View style={{
        bacgrounColor: 'white',
        flex: 1
    }}>
        <ImageBackground
            source={image.background}
            resizeMode='cover'
            style={{
                flex: 1
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 40,
                }}>
                    <Image source={image.fire} style={{
                        width: 30,
                        height: 30,
                        marginStart: 10,
                        marginEnd: 5
                    }} />
                    <Text style={{
                        fontSize: 20,
                    }}>
                        hello work
                    </Text>
                    <View style={{ flex: 1 }} />
                    <Image source={image.requireß} style={{
                        width: 30,
                        height: 30,
                        tintColor: 'white',
                        marginEnd: 10
                    }} />
                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
            }}>
                <Text style={{
                    color: 'white',
                    marginBottom: 7
                }}> Welcom to hihihih</Text>
                <Text style={{
                    color: 'white',
                    marginBottom: 7,
                    fontSize: 30
                }}> Welcom to hihihih</Text>
                <Text style={{
                    color: 'white',
                    marginBottom: 7,
                }}> Welcom to hihihih</Text>
            </View>
            <View style={{ flex: 40 }}>
                {accountTypes.map(accountType =>
                    <UIButton
                        key={accountType.name}
                        onPress={() => {
                            //accountTypes = newAccountTypes => DONOT DO THIS !
                            setAccountTypes(accountTypes.map(eachAccountType => {
                                return {
                                    ...eachAccountType,
                                    isSelected: eachAccountType.name == accountType.name
                                };
                            }));
                        }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)
                }
            </View>
            <View style={{
                flex: 20,
            }}>
                <UIButton title={'Login'.toUpperCase()}
                />
                <Text style={{
                    marginBottom: 7,
                    color: 'green',
                    alignSelf: 'center'
                }}> Welcom to hihihih</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'pink',
                    alignSelf: 'center',
                    textDecorationLine: 'underline'
                }}> Registered</Text>
            </View>
        </ImageBackground>
    </View>;
};
export default Home;
