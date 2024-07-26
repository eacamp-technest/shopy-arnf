import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TypographyStyles } from '../theme/typography';
import { colors } from '../theme/colors';

interface IProduct {
    url:string;
    productName:string;
    cost:string;
    brand:string;
}

export const Product:React.FC<IProduct> = ({url,productName,cost,brand}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:url}}/> 
        <View style={styles.about}>
            <Text style={[TypographyStyles.LargeNoneSemibold,styles.name]}>{productName}</Text>
            <Text style={[TypographyStyles.TinyNormalBold,styles.cost]}>{cost}</Text>
            <Text style={[TypographyStyles.TinyNormalRegular,styles.brand]}>{brand}</Text>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        gap:12,
    },
    about:{
        gap:8
    },
    image:{
        width:156,
        height:141,
        borderRadius:8
    },
    name:{
        color:colors.ink.base
    },
    cost:{
        color:colors.ink.base
    },
    brand:{
        color:colors.ink.lighter
    }
})