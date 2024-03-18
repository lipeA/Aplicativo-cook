import React, { useState } from 'react'
import { ScrollView, Text, View, useAnimatedValue, Alert } from 'react-native'
import { styles } from './styles'
import Ingrediente from '@/components/ingrediente'
import Selecionados from '@/components/selecionados'
import { router } from 'expo-router'


export default function Index() {

    const [selecionado, setSelecionado] = useState<string[]>([])

    function handleTrocaSelecionado(value: string){
        if( selecionado.includes(value)){
            return setSelecionado( (state) => state.filter((item) =>item !== value ) )
        }


        setSelecionado( (state) => [...state, value])
        console.log(selecionado)
    }


    function handleClear(){
        Alert.alert("Limpar", "deseja limpar tudo?", [
            {text: "não", style:"cancel"},
            {text: "sim", onPress: () =>  setSelecionado([]) }
        ])
      
    }

    // navegar para outra tela
    function handleSearch(){
        router.navigate("/recipes");
    }



    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descubra receitas baseadas nos {"\n"} produtos que você escolheu.</Text>

            <ScrollView contentContainerStyle={styles.ingredientes}>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingrediente key={index} name="tomate" imagem="" selecionado={selecionado.includes(String(index))}  onPress={ ()=>handleTrocaSelecionado(String(index)) } />
                ))}
            </ScrollView>

           {selecionado.length > 0 && (<Selecionados quantidade={selecionado.length}  onClear={handleClear} onSearch={handleSearch}  />)}
        </View>
    )
}



