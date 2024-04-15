import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HStack, VStack } from "@gluestack-ui/themed";
import { Audio } from 'expo-av';
import { IconButton } from 'react-native-paper';


const Penguin = ({ }) => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../Media/unicorn.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
    }

    async function pauseSound() {
        if (sound) {
            console.log('Pausing Sound');
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return (
        <View>
            <View style={styles.imgArrange}>
                <VStack>
                    <Image
                        source={require('../img/unicornbaby.jpeg')}
                        style={styles.activitImg} />
                </VStack>
                <VStack>
                    <Image
                        source={require('../img/unicornbaby2.jpeg')}
                        style={styles.activitImg} />
                </VStack>
                <VStack>
                    <Image
                        source={require('../img/unicornbaby3.jpeg')}
                        style={styles.activitImg} />
                </VStack>
            </View>
            <View style={styles.activitySection1}>
                <View style={styles.textStyle}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', zIndex: 2 }}>Unicorn</Text>
                    <View style={{ width: 170, height: 16, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -12 }}></View>
                </View>
                <View style={styles.textStyle2}>
                    <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black', zIndex: 2, top: 20 }}>本館位置</Text>
                    <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'black', zIndex: 2, top: 20 }}>神話獨角獸館</Text>
                    <View style={{ width: 260, height: 80, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -45 }}></View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 21, zIndex: 2 }}>地理分佈</Text>
                        <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }}></View>
                    </View>
                    <View style={styles.textContainer2}>
                        <Text style={{ fontWeight: 'bold', fontSize: 21, zIndex: 2 }}>形態特徵</Text>
                        <View style={{ width: 90, height: 20, backgroundColor: '#FFF2C5', borderRadius: 10, zIndex: 1, top: -15 }}></View>
                    </View>
                </View>
                <View style={styles.imgArrange1}>
                    <VStack>
                        <View style={styles.textsection3}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', }}>最早可能追溯到印度河流域文明。</Text>
                        </View>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', left: -170, width: 340, height: 3, backgroundColor: '#3C3C3C', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 3, height: 180, backgroundColor: '#3C3C3C', borderRadius: 0, zIndex: 1, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                        <View style={styles.textsection2}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>1. 頭上長有獨角的白馬。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>2. 頭部呈深紅色，有一雙深藍的眼睛。</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>3. 身材與馬差不多大小，甚至比馬更大。</Text>
                        </View>
                    </VStack>
                </View>
            </View>
            <View style={styles.activitySection}>
                <View style={styles.musicbox}>
                    <Image
                        source={require('../img/unicorn_song.jpeg')}
                        style={styles.activitImg1} />
                    <View style={styles.textsection}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft:35}}>獨角獸 Ivy</Text>
                        <View style={styles.container}>
                            {isPlaying ? (
                                <IconButton icon="pause" onPress={pauseSound} color="#D56A6A" />
                            ) : (
                                <IconButton icon="play" onPress={playSound} color="#B1D9DE" />
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.newstextsection}>
                    <Text style={styles.newstext}>我要認養</Text>
                </View>
            </View>
        </View>

    );
};

export default Penguin;

const styles = StyleSheet.create({
    activitySection1: {
        margin: 20,
        marginTop: 25,
    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    textStyle2: {
        alignItems: 'center',
    },
    imgArrange1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -26
    },
    textsection3: {
        marginLeft: 10,
        width: 150,
        height: 150,
        marginTop: 20,
    },
    textsection2: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    container1: {
        flexDirection: 'row', // 水平排列

    },
    textContainer: {
        paddingHorizontal: 10, // 文字間距
        marginLeft: 5,
    },
    textContainer2: {
        paddingHorizontal: 10, // 文字間距
        marginLeft: 75,
    },
    line: {
        position: 'relative',
        alignItems: 'flex-end',
    },
    activitySection: {
        margin: 20,
        alignItems: 'center',
    },
    newstextsection: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2C5',
        marginTop: 20,
        width: 140,
        height: 55,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    newstext: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        width: 70,
        height: 60,
        marginLeft: 40,
        marginTop: 15,
        borderRadius: 20,
    },
    textsection: {
        marginTop: 20,

    },
    activitImg1: {
        width: 130,
        height: 130,
        borderRadius: 35,
        marginRight: 40,
    },
    musicbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    imgArrange: {
        flexDirection: 'row',
        top: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginRight: 6,
        marginLeft: 6,
    },
    activitImg: {
        width: 120,
        height: 120,
        borderRadius: 35,
        zIndex: 1,
    },
})

