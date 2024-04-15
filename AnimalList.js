import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HStack, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const AnimalList = ({book}) => {
const { navigate } = useNavigation();
    return (
        <View style={styles.activitySection}>
            <View style={styles.actImgSection}>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo3')}
                        >
                        <Image
                            source={require('../img/bearbaby.png')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2, }}>小棕熊</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                        </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo4')}
                        >
                        <Image
                            source={require('../img/sheepbaby.png')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小羊駝</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo5')}
                        >
                        <Image
                            source={require('../img/slothbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小樹懶</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo6')}
                        >
                        <Image
                            source={require('../img/otterbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小海獺</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo7')}
                        >
                        <Image
                            source={require('../img/raccoon.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小浣熊</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo8')}
                        >
                        <Image
                            source={require('../img/otterbaby2.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小水獺</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo9')}
                        >
                        <Image
                            source={require('../img/unicornbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小獨角獸</Text>
                            <View style={{ width: 68, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                    </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo10')}
                        >
                        <Image
                            source={require('../img/capybarababy.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小水豚</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                     </Pressable>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo11')}
                        >
                        <Image
                            source={require('../img/minkbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小貂</Text>
                            <View style={{ width: 36, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                 </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                        <Pressable
                            onPress={() => navigate('AnimalInfo2')}
                        >
                            <Image
                                source={require('../img/penguinbaby.jpeg')}
                                style={styles.activitImg} />
                            <View style={styles.textsection}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小企鵝</Text>
                                <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                            </View>
                        </Pressable>
                    </VStack>
                </View>
                <View style={styles.imgArrange}>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo12')}
                        >
                        <Image
                            source={require('../img/humanbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小人類</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                        </Pressable>
                    </VStack>
                    <VStack>
                        <View style={styles.line}>
                            <View style={{ position: 'absolute', top: 35, left: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 2, }}></View>
                            <View style={{ width: 20, height: 160, backgroundColor: '#B1D9DE', borderRadius: 0, zIndex: 1, }}></View>
                            <View style={{ position: 'absolute', top: 90, right: -20, width: 30, height: 20, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 3, }}></View>
                        </View>
                    </VStack>
                    <VStack>
                    <Pressable
                            onPress={() => navigate('AnimalInfo13')}
                        >
                        <Image
                            source={require('../img/foxbaby.jpeg')}
                            style={styles.activitImg} />
                        <View style={styles.textsection}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', zIndex: 2 }}>小狐狸</Text>
                            <View style={{ width: 50, height: 16, backgroundColor: '#B1D9DE', borderRadius: 10, zIndex: 1, top: -16 }}></View>
                        </View>
                </Pressable>
                    </VStack>
                </View>
            </View>
        </View>

    );
};

export default AnimalList;


const styles = StyleSheet.create({
    activitySection: {
        margin: 20,

    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    imgArrange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -26
    },
    activitImg: {
        width: 140,
        height: 140,
        borderRadius: 35,
        zIndex: 1,

    },
    textsection: {
        position: 'relative',
        zIndex: 2,
        top: -35,
        alignItems: 'flex-end',
        marginRight: 20,

    },
    line: {
        position: 'relative',
        alignItems: 'flex-end',
    }
})

