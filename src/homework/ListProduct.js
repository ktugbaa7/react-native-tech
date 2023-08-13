import { View, Text, Alert, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ListProduct = () => {
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState(null);

  useEffect(() => {
    //fonksiyon başarılıysa then içerisine düşer. hata alırsa catch içerisine düşer
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        Alert.alert("İşlem sırasında bir hata meydana geldi");
        seterror(err);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View>
            {item.unitPrice >= 50 ? (
              <Text style={{ color: "red", fontSize: 15 }}>{item.name}</Text>
            ) : (
              <Text style={{ fontSize: 15 }}>{item.name}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default ListProduct;
