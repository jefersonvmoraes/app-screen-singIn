import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
        <Animatable.View animation="flipInY" style={styles.containerLogo}>
            <Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{width: '100%'}}
                resizeMode="contain"
            />
        </Animatable.View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.navigate('SingIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#38A69D",
    },
    containerLogo:{
        flex: 2,
        backgroundColor: "#38A69D",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm:{
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: "#a1a1a1",
    },
    button:{
        position: 'absolute',
        backgroundColor: "#38A69D",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    }

})