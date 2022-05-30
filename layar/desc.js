import React, {useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { fetchDetail } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native';

let test = false

const desc = () => {

   

    const navigate = useNavigation()

    const dispatch = useDispatch()

    const {imageData,  dataDetail} = useSelector( state => state.userReducer)

    const route = useRoute().params.id
    console.log(route)
    
   React.useEffect (()=> {
    dispatch(fetchDetail(route))
},[])


    console.log(dataDetail)
    

        return (
           
    <SafeAreaView style={styles.margin}>
        <ScrollView>
        <TouchableOpacity style={styles.header} onPress={
            ()=>{
                //console.log(dataDetail)
                test = false
                navigate.goBack()
            }
        }>
        <MaterialCommunityIcons name="chevron-left" color={'black'} size={24} />
            <Text style={styles.judul}>{dataDetail.restaurant.name}</Text>
        </TouchableOpacity>


        {/* <View style={styles.img}></View> */}

        <Image source={{uri :imageData + dataDetail.restaurant.pictureId }} style={styles.img}/>
        <Text style={styles.desc}>{dataDetail.restaurant.description}
        </Text>
        <Text style={styles.teks}>{dataDetail.restaurant.city}</Text>
        <Text style={styles.teks}>{dataDetail.restaurant.address}</Text>
        <Text style={styles.teks}>Rating : {dataDetail.restaurant.rating}</Text>
        <Text style={styles.teks}>Kategori : {dataDetail.restaurant.categories[0].name}</Text>
        <Text style={styles.teks}>Makanan :</Text>

        <FlatList
            horizontal={true}
            data={dataDetail.restaurant.menus.foods}
            renderItem = {({item, index, separators}) =>{
                return (
                    <View style={styles.box}>
                        <Text style={styles.isibox}>{item.name}</Text>
                    </View>
                )
            }}
        />

        <Text style={styles.teks}>Minuman :</Text>

        <FlatList
            horizontal={true}
            data={dataDetail.restaurant.menus.drinks}
            renderItem = {({item, index, separators}) =>{
                return (
                    <View style={styles.box}>
                        <Text style={styles.isibox}>{item.name}</Text>
                    </View>
                )
            }}
        />
</ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    margin : {
        margin: 40,
    },
    header : {
        flexDirection: 'row',
        marginBottom: 10,
    },
    judul : {
        fontWeight:'bold',
        fontSize: 20,
    },
    img : {
        height:230,
        marginBottom:10,
        borderRadius:10,
    },
    desc : {
        textAlign: 'justify',
        fontSize: 12,
        marginBottom: 10,
    },
    teks : {
        marginBottom: 10,
        fontSize: 15,
    },
    box : {
        height: 20,
        width: 130,
        backgroundColor : '#D9D9D9',
        justifyContent : 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
    },
    isibox : {
        fontSize: 15,
    }

})
export default desc