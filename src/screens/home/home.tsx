import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator } from "react-native";

import { useData } from "../../hooks/dataFunctions";
import { ImagePath } from "../../components/imagePath";
import style from './style';

const Home: React.FC = () => {
    const {
        picture, id, name, genero, email, cell, pais, profissao, loading, getData,
         setId, setName, setGenero, setEmail, setCell, setPais, setProfissao,
      } = useData();

    return(
        <View style={style.homeContainer}>

            <View style={style.personContainer}>

                <Image style={style.personPicture} source={picture ? {uri: picture} : ImagePath.defaultImage}/>

                <View>
                    <TextInput 
                    placeholder="Name Surname"
                    editable={false}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={style.personName}
                    />
                    <TextInput 
                    placeholder="Gender"
                    editable={false}
                    value={genero}
                    onChangeText={(text) => setGenero(text)}
                    style={style.personGender}
                    />
                </View>

                <View style={style.personInfoContainer}>

                    <View style={style.personInfo}>
                        <Image source={ImagePath.idIcon} style={style.infoIcon}/>
                        <TextInput 
                        placeholder="Id"
                        editable={false}
                        value={id}
                        onChangeText={(text) => setId(text)}
                        style={style.personText}
                        />
                    </View>

                    <View style={style.personInfo}>
                        <Image source={ImagePath.emailIcon} style={style.infoIcon}/>
                        <TextInput 
                        placeholder="Mail"
                        editable={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                            style={style.personText}
                        />
                    </View>

                    <View style={style.personInfo}>
                        <Image source={ImagePath.telefoneIcon} style={style.infoIcon}/>
                        <TextInput 
                        placeholder="Phone"
                        editable={false}
                        value={cell}
                        onChangeText={(text) => setCell(text)}
                        style={style.personText}
                        />
                    </View>

                    <View style={style.personInfo}>
                        <Image source={ImagePath.contryIcon} style={style.infoIcon}/>
                        <TextInput 
                        placeholder="Country"
                        editable={false}
                        value={pais}
                        onChangeText={(text) => setPais(text)}
                            style={style.personText}
                        />
                    </View>

                    <TextInput 
                    placeholder=""
                    
                    value={profissao}
                    onChangeText={(text) => (loading ? setProfissao(text) : '')}
                    style={style.personProfissao}
                    />

                    {loading ? (<ActivityIndicator size="large" color="#38343c"/>) : null }
                    
                </View>

            </View>
            
            <TouchableOpacity style={style.buttonContainer} onPress={getData}>
                <Text style={style.buttonText}>Generate user</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home;