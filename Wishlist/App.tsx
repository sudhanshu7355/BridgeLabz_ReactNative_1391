import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, label, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const WishlistItem = ({ item, onDelete, onAdjust, onAddToCart }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.quantityBox}>
      <Button label="-" onPress={() => onAdjust(item.id, -1)} style={styles.quantityBtn} />
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Button label="+" onPress={() => onAdjust(item.id, 1)} style={styles.quantityBtn} />
    </View>
    <Button label="Add" onPress={() => onAddToCart(item)} style={styles.addBtn} />
    <Button label="X" onPress={() => onDelete(item.id)} style={styles.deleteBtn} />
  </View>
);

const Cart = ({ items }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Cart</Text>
    {items.length === 0 ? (
      <Text style={styles.empty}>Cart is empty</Text>
    ) : (
      items.map(item => (
        <Text key={item.id} style={styles.cartItem}>
          {item.title} (x{item.quantity})
        </Text>
      ))
    )}
  </View>
);

export default function App() {
  const [wishlist, setWishlist] = useState([
    { id: '1', title: 'Item 1', quantity: 1 },
    { id: '2', title: 'Item 2', quantity: 1 },
    { id: '3', title: 'Item 3', quantity: 1 },
  ]);
  const [cart, setCart] = useState([]);

  const handleAdjust = (id, delta) => {
    setWishlist(wishlist.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Wishlist</Text>
      
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <WishlistItem
            item={item}
            onDelete={id => setWishlist(wishlist.filter(i => i.id !== id))}
            onAdjust={handleAdjust}
            onAddToCart={item => setCart([...cart, item])}
          />
        )}
        ListFooterComponent={
          <Button
            label="Add New Item"
            onPress={() => setWishlist([...wishlist, {
              id: Date.now().toString(),
              title: `Item ${wishlist.length + 1}`,
              quantity: 1
            }])}
            style={styles.newItemBtn}
          />
        }
      />
      
      <Cart items={cart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    minWidth: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  quantityBtn: {
    backgroundColor: '#007bff',
  },
  addBtn: {
    backgroundColor: '#28a745',
    marginLeft: 8,
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    marginLeft: 8,
  },
  section: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  empty: {
    color: '#666',
  },
  cartItem: {
    fontSize: 14,
    paddingVertical: 4,
  },
  newItemBtn: {
    backgroundColor: '#17a2b8',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
});