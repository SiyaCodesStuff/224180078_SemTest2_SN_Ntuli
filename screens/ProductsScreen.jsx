import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Button, ActivityIndicator } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { colors } from "../theme";
import { CartContext } from "../CartContext";

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => alert("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
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
    alert(`${product.title} added to cart!`);
  };

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title="Logout" onPress={() => signOut(auth)} />
      <Button title={`Go to Cart (${cart.reduce((a, c) => a + c.qty, 0)})`} onPress={() => navigation.navigate("Cart")} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colors.card,
              marginVertical: 8,
              borderRadius: 16,
              padding: 12,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 3 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
              style={{ alignItems: "center" }}
            >
              <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} resizeMode="contain" />
              <Text numberOfLines={1} style={{ fontWeight: "bold", marginTop: 8 }}>
                {item.title}
              </Text>
              <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                ${item.price.toFixed(2)}
              </Text>
            </TouchableOpacity>

            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
}
