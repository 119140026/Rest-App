import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { fetchList } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'

const home = () => {

    const dispatch = useDispatch()

    const {imageData, dataList} = useSelector( state => state.userReducer)

    const navigate = useNavigation()

    useEffect (()=> {
        dispatch(fetchList())
    },[])

  return (
    <SafeAreaView style={styles.margin}>
        <View style={styles.bg}>
            <Text style={styles.text1}>Restaurant Apps</Text>
        </View>

        <FlatList
            data={dataList['restaurants']}
            renderItem = {({item, index, separators}) =>{
                return (
                    <View>
                        <TouchableOpacity style={styles.kotak} onPress={()=>{
                            navigate.navigate('desc',{
                                id : item.id,
                            })
                            }}>
                    {/* <View style={styles.img}/> */}
                    <Image source={{uri :imageData + item.pictureId }} style={styles.img}/>
                    <View>
                         <Text style={styles.isi}>{item.name}</Text>
                                 <Text style={styles.isi1}>{item.city}</Text>
                                 <Text style={styles.isi1}>Rating : {item.rating}</Text>
                                </View>
                         </TouchableOpacity>
                         <View style={{height: 10}}/>
                    </View>
                )
            }}
        />
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    margin : {
        margin : 40,
    },
    bg:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom : 30,
    },
    text1:{
       fontSize:24,
       fontWeight:'bold',
    },
    kotak:{
        flexDirection:'row',
    },
    img:{
        height:100,
        width:100,
        backgroundColor : 'red',
        marginRight: 10,
    },
    isi:{
        fontSize:20,
        fontWeight: 'bold',
        paddingTop:20,
        paddingBottom:20,
    },
    isi1:{
        fontSize:10,
    },
    e10:{
        height:10,
    },
    e20:{
        height:20,
    },
    e30:{
        height:30,
    },
})

export default home