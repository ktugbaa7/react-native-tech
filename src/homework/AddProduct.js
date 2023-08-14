import { View,  TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from "axios";
import { Alert } from 'react-native';

const AddProduct = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [stock, setstock] = useState('');

    const add = () => {

        var newProduct = {
          name: name,
          price: price,
          stock: stock,
        }
    
        axios.post('https://northwind.vercel.app/api/products', newProduct)
        .then(res => {
          Alert.alert("Yeni bir kategori eklendi!!")
        })
      }
  return (
    <View>
      <View>
        <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={setname} />
      </View>
      <View>
        <TextInput placeholder='Unit Price' style={styles.input} value={price} onChangeText={setprice} />
      </View>
      <View>
        <TextInput placeholder='Units In Price' style={styles.input} value={stock} onChangeText={setstock} />
      </View>
      <View>
        <Button title="Add" onPress={add}></Button>
      </View>
      
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });