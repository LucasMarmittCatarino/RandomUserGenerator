import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    homeContainer:{
        alignItems: 'center',
    },
    personContainer:{
        marginTop: '10%',
        height: '78%',
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
    },
    personPicture:{
        marginTop: '5%',
        marginBottom: '2.5%',
        borderRadius: 100,
        height: 130,
        width: 130,
    },
    personName:{
        color: '#38343c',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
    },
    personGender:{
        marginTop: -20,
        color: '#38343c',
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'center',
    },
    personInfoContainer:{
        width: '95%',
    },
    personInfo:{
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 25,
    },
    infoIcon:{
        marginTop: 10,
        marginRight: 15,
        width: 25,
        height: 25,
    },
    personText:{
        paddingBottom: 5,
        fontSize: 13,
        fontWeight: '300',
        color: '#38343c',
    },
    personProfissao:{
        color: '#38343c',
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
    },
    buttonContainer:{
        marginTop: '15%',
        backgroundColor: '#38343c',
        borderRadius: 30,
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    
})

export default style;