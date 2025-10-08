import React, { useContext } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { CartContext } from "../CartContext";

export default function CartScreen() {
  const { cart, setCart } = useContext(CartContext);

  const updateQty = (item, change) => {
    const updated = cart.map((p) =>
      p.id === item.id ? { ...p, qty: Math.max((p.qty || 1) + change, 1) } : p
    );
    setCart(updated);
  };

  const total = cart.reduce((sum, p) => sum + p.price * (p.qty || 1), 0).toFixed(2);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Cart ({cart.reduce((a, c) => a + c.qty, 0)} items)
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text numberOfLines={1}>{item.title}</Text>
              <Text>Qty: {item.qty}</Text>
              <Text>${(item.price * item.qty).toFixed(2)}</Text>
            </View>
            <Button title="+" onPress={() => updateQty(item, 1)} />
            <Button title="-" onPress={() => updateQty(item, -1)} />
          </View>
        )}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total: ${total}</Text>
    </View>
  );
}
