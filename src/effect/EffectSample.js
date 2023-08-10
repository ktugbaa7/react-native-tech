import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectSample = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((res) => setcategories(res.data));
  }, []); // dizi boş ise useeffect sadece 1 kereliğine çalışır.
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 30 }}>{item.name}</Text>
        )}
      />
      <Button title="increase"></Button>
    </View>
  );
};

export default EffectSample;
