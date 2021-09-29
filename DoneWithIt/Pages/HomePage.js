import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const HomePage = ( {navigation} ) => {
    const [drinks, setDrinks] = useState([])
    const [modalVisible, setModalVisible] = useState(false);

    const [restaurantName, setRestaurantName] = useState("")
    const [bobaType, setBoba] = useState("Milk Tea")
    const [sugarLevel, setSugar] = useState(null)
    const [size, setSize] = useState()
    const [price, setPrice] = useState("")


    const handleAddDrink = () => { 
        setDrinks([...drinks, {"restaurant": restaurantName,
        "name": bobaType,
        "sugar": sugarLevel,
        "size": size, 
        "price": price        
    }])
        setModalVisible(!modalVisible);
    }
    const showDrink = (drink) => { 
        console.log(drink)
    }

    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView> 
                <Text style={[styles.headerText, {paddingBottom: 40}]}>
                    Welcome To Your Boba Tracking App
                </Text>
                <Text style={styles.bodyText}>
                    Track your favorite drinks and calculate your weekly expenses!
                </Text>
                <Text style={[styles.headerText, {paddingTop: 40}]}>
                    Past Drinks 
                </Text>
                <View> 
                    {
                        drinks.map((drink, index) => {
                            console.log(drink)
                            return (
                                <TouchableOpacity key={index} onPress = {() => showDrink(drink)}>
                                    <Drink information={drink}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <Button title="Add Drink" onPress = {() => setModalVisible(!modalVisible)}/>
                <Modal animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        >
                            <View style={styles.modal}> 
                                <View style={styles.rightJustify}> 
                                    <Button title="Close" onPress = {() => setModalVisible(!modalVisible)}/>
                                </View>
                                <View style={styles.addDrink}>  
                                    <Text style={styles.bodyText}>  Restaurant Name</Text>
                                    <TextInput  style={styles.inputText} placeholder = "Kungfu Tea" 
                                    onChangeText = {restaurantName => setRestaurantName(restaurantName)}
                                    defaultValue= {restaurantName}/>
                                    <Text style={styles.bodyText}>  Boba Type</Text>
                                    <TextInput  style={styles.inputText} placeholder = "Classic Milk Tea" 
                                    onChangeText = {bobaType => setBoba(bobaType)}
                                    defaultValue= {bobaType}/>
                                    <Text style={styles.bodyText}>  Sugar Level </Text>
                                    <TextInput  style={styles.inputText} placeholder = "25%" 
                                    onChangeText = {sugarLevel => setSugar(sugarLevel)}
                                    defaultValue= {sugarLevel}/>
                                    <Text style={styles.bodyText}>  Size </Text>
                                    <TextInput  style={styles.inputText} placeholder = "M" 
                                    onChangeText = {size => setSize(size)}
                                    defaultValue= {size}/>
                                    <Text style={styles.bodyText}>  Price </Text>
                                    <TextInput  style={styles.inputText} placeholder = "2.50" 
                                    onChangeText = {price => setPrice(price)}
                                    defaultValue= {price}/>
                                    <Button title="Add" onPress={() => handleAddDrink()}/>

                            </View>
                            </View>
                </Modal>
        </SafeAreaView>
    )
}

const Drink = (props) => { 
    return(
        <View style={styles.drinkHistory}> 
            <Text style={[styles.bodyText, {paddingLeft: 20}]}>{props.information.restaurant}</Text>
            <Text style={[styles.bodyText, {paddingLeft: 20}]}>{props.information.name}</Text>
            <Text style={[styles.bodyText, {paddingLeft: 20}]}>{props.information.sugar}</Text>
            <Text style={[styles.bodyText, {paddingLeft: 20}]}>{props.information.size}</Text>
            <Text style={[styles.bodyText, {paddingLeft: 20}]}>{props.information.price}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        textAlign: "center",
    },
    bodyText: {
        fontSize: 20, 
        textAlign: "center",
    },
    inputText: {
        fontSize: 20, 
        textAlign: "center",
        color: "#808080",
        paddingTop: 10,
        paddingBottom: 20
    },
    container: {
      display: "flex",
      backgroundColor: "white",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    modal: { 
        margin: 30,
        flexDirection: "column",
        flex: 1
    },
    rightJustify: {
        position: "absolute", 
        right: 0,
        zIndex: 10
        // width: "100px"
    },
    addDrink: {
        paddingTop: 50,
        display: "flex",
        alignItems: "center",
    },
    radioButton : {
        zIndex: 10
    },
    drinkHistory: {
        display: "flex",
        flexDirection:"row",
        alignContent: "space-between",
    }

  });
  