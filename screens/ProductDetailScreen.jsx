import React, { useContext } from "react";
import { View, Text, Image, Button, Alert } from "react-native";
import { CartContext } from "../CartContext";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { cart, setCart } = useContext(CartContext); // ✅ Use context

  const addToCart = () => {
    // If item already in cart, increase qty
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    Alert.alert("Added to cart");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: "100%", height: 250 }} resizeMode="contain" />
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>{product.title}</Text>
      <Text style={{ fontSize: 16, marginVertical: 5 }}>${product.price.toFixed(2)}</Text>
      <Text style={{ marginBottom: 15 }}>{product.description}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
}
