import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Product, RootStackParamList } from './types';

const PRODUCTS: Product[] = [
    { id: '1', name: 'Almamater UMUKA', price: 'Rp 150.000', desc: 'Jas resmi Universitas Muhammadiyah Karanganyar.', image: 'https://picsum.photos/id/1/400/300' },
    { id: '2', name: 'PDH Kesenian', price: 'Rp 135.000', desc: 'PDH resmi UKM Kesenian Gita Mandala.', image: 'https://picsum.photos/id/20/400/300' },
    { id: '3', name: 'Topi UMUKA', price: 'Rp 45.000', desc: 'Aksesoris resmi mahasiswa UMUKA.', image: 'https://picsum.photos/id/30/400/300' },
    { id: '4', name: 'PDH Himaforti', price: 'Rp 115.000', desc: 'PDH resmi Himpunan Mahasiswa Informatika.', image: 'https://picsum.photos/id/40/400/300' },
    { id: '5', name: 'Seragam TSPM', price: 'Rp 125.000', desc: 'Seragam resmi Tapak Suci Putera Muhammadiyah.', image: 'https://picsum.photos/id/40/400/300' },
];

type HomeProps = { navigation: StackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: HomeProps) {
    const { width } = useWindowDimensions();
    const numColumns = width > 768 ? 3 : 1;

    const renderItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={[styles.card, { width: (width / numColumns) - 20 }]}
            onPress={() => navigation.navigate('Detail', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        // Gunakan View dengan flex: 1 agar memenuhi layar
        <View style={styles.mainContainer}>
            <FlatList
                data={PRODUCTS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                key={numColumns}
                // Tambahkan padding bawah agar item terakhir tidak mepet
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, // SANGAT PENTING: Agar View mengambil seluruh tinggi layar
        backgroundColor: '#F8F9FA'
    },
    listContent: {
        padding: 8,
        paddingBottom: 40, // Jarak ekstra di bawah
    },
    card: { backgroundColor: '#fff', margin: 8, borderRadius: 15, overflow: 'hidden', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
    image: { width: '100%', height: 150, resizeMode: 'cover' },
    textContainer: { padding: 12, alignItems: 'flex-start' },
    title: { fontWeight: '700', fontSize: 16, color: '#2D3436', marginBottom: 4 },
    price: { color: '#0984E3', fontWeight: 'bold', fontSize: 14 }
});