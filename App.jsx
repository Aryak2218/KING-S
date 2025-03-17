import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable } from 'react-native';
import { Element3, Receipt21, Clock, Message, SearchNormal } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>KING'S</Text>
                <Element3 color={colors.black()} variant="Linear" size={2} />
            </View>
            <View style={searchBar.container}>
                <TextInput
                    style={searchBar.input}
                    placeholder="Search"
                />
                <Pressable style={searchBar.button}>
                    <SearchNormal size={18} color={colors.white()} />
                </Pressable>
            </View>
            <View style={[styles.listCategory, { flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                    <View style={[category.item,]}>
                        <Text style={category.title}>Mesin & Transmisi</Text>
                    </View>
                    <View style={[category.item]}>
                        <Text style={category.title}>Kelistrikan & Lampu</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>

                    <View style={[category.item]}>
                        <Text style={category.title}>Rem, Suspensi & Ban</Text>
                    </View>
                    <View style={[category.item]}>
                        <Text style={category.title}>Body & Aksesoris</Text>
                    </View>
                </View>

            </View>

            <ListBlog />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue(0.1),
    },
    header: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        elevation: 6,
        backgroundColor: colors.white(),
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey(0.4),
    },
    title: {
        fontSize: 28,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.darkBlue(),
    },
    listCategory: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: colors.lightBlue(0.05),
    },
    listBlog: {
        paddingVertical: 5,
        gap: 12,
        paddingHorizontal: 25,
    },
});


const category = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: colors.lightBlue(0.2),
        marginRight: 6,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: colors.grey(0.4),
    },
    title: {
        fontFamily: fontType['Pjs-Regular'],
        fontSize: 12,
        lineHeight: 20,
        color: colors.black(),
    },
});




const searchBar = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        backgroundColor: colors.grey(0.09),
        borderColor: colors.grey(0.40),
        borderRadius: 15,
        borderWidth: 2,
        flexDirection: 'row',
        elevation: 10,
        shadowColor: colors.black(0.10),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    input: {
        height: 40,
        paddingHorizontal: 24,
        width: '90%',
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.blue(0.50),
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
});

const ListBlog = () => {
    return (
        <ScrollView>
            <View style={styles.listBlog}>
                <View style={itemVertical.listCard}>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lzjx3m72l98o9b',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Rem, Suspensi & Ban</Text>
                            <Text style={itemVertical.cardTitle}>Shock DBS</Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>shock dengan ukuran 280mm yang membuat tampilan motor menjadi lebih keren</Text>
                            </View>
                        </View>
                    </View>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvX_gQ5c8qd1MRt1xDRLjcGDh7mZuCMhqhw&s',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Mesin & Transmisi</Text>
                            <Text style={itemVertical.cardTitle}>Oli Mesin MPX</Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>membuat motor lebih halus dan nyaman</Text>
                            </View>
                        </View>
                    </View>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/juragan-ban_juragan-ban-corsa-r46-90-80-17-ban-motor-tubeless_full02.jpg',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Rem, Suspensi & Ban</Text>
                            <Text style={itemVertical.cardTitle}>Ban Motor corsa 46</Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>membuat motor pada tikungan menjadi lebih stabil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lmk4f05f0vqsea',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Kelistrikan & Lampu</Text>
                            <Text style={itemVertical.cardTitle}>Lampu Biled Projector AES</Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>membuat penerangan pada motor menjadi lebih terang dan lebih keren</Text>
                            </View>
                        </View>
                    </View>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-48041761/rcb_master_rem_set_rcb_dan_kopling_rcb_s1_r15_v3_r25_cbr150_ninja_250_mt25_full01_cbys2yz5.jpg',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Rem, Suspensi & Ban</Text>
                            <Text style={itemVertical.cardTitle}>RCB S1 </Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>membuat pengereman motor menjadi lebih pakem dan nyaman</Text>
                            </View>
                        </View>
                    </View>
                    <View style={itemVertical.cardItem}>
                        <Image
                            style={itemVertical.cardImage}
                            source={{
                                uri: 'https://down-id.img.susercontent.com/file/c0b7d8509c082d38f64cd51a1ab9a201',
                            }}
                        />
                        <View style={itemVertical.cardContent}>
                            <Text style={itemVertical.cardCategory}>Body & Aksesoris</Text>
                            <Text style={itemVertical.cardTitle}>Full Body aerox</Text>
                            <View style={itemVertical.cardInfo}>
                                <Text style={itemVertical.cardText}>Tinggal pasang PNP, semua baut pasti presisi</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const itemVertical = StyleSheet.create({
    listCard: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        gap: 20,
    },
    cardItem: {
        backgroundColor: colors.lightBlue(0.2),  
        flexDirection: 'row',
        borderRadius: 10,
    },
    cardCategory: {
        color: colors.black(),  
        fontSize: 14,
        fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.darkBlue(),  
    },
    cardText: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Medium'],
        color: colors.darkGrey(0.7),  
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardInfo: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    cardContent: {
        gap: 5,
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 15,
        flex: 1,
        paddingVertical: 10,
    },
});

const itemHorizontal = StyleSheet.create({
    cardItem: {
        width: 320,
        margin: 10,
        borderRadius: 15,
        backgroundColor: colors.lightBlue(0.3),  
        overflow: 'hidden',
        elevation: 5,
        shadowColor: colors.darkBlue(),  
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardImage: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        marginBottom: 15,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    cardInfo: {
        justifyContent: 'flex-start',
        height: '100%',
        gap: 8,
        maxWidth: '70%',
    },
    cardTitle: {
        fontFamily: fontType['Pjs-Bold'],
        fontSize: 16,
        color: colors.darkBlue(),  
        fontWeight: '700',
        lineHeight: 22,
    },
    cardText: {
        fontSize: 12,
        color: colors.darkGrey(),  
        fontFamily: fontType['Pjs-Medium'],
        lineHeight: 18,
    },
    cardIcon: {
        backgroundColor: colors.yellow(0.4),  
        padding: 8,
        borderColor: colors.yellow(),
        borderWidth: 0.8,
        borderRadius: 8,
    },
});

