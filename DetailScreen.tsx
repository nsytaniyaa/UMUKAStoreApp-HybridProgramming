import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './types';

type DetailProps = { route: RouteProp<RootStackParamList, 'Detail'> };

export default function DetailScreen({ route }: DetailProps) {
    const { product } = route.params;
    const [count, setCount] = useState(1);
    const [isFav, setIsFav] = useState(false);

    // Gunakan ID produk di dalam Key agar tidak tertukar dengan produk lain
    const STORAGE_KEY = `@fav_status_${product.id}`;

    // 1. Fungsi muat data (Load)
    const loadStatus = async () => {
        try {
            const savedStatus = await AsyncStorage.getItem(STORAGE_KEY);
            if (savedStatus !== null) {
                setIsFav(savedStatus === 'true'); // Konversi string ke boolean
            }
        } catch (error) {
            console.log("Error loading status:", error);
        }
    };

    // 2. Fungsi simpan data (Toggle)
    const toggleFavorite = async () => {
        try {
            const nextStatus = !isFav;

            // Simpan dulu ke AsyncStorage sebagai string
            await AsyncStorage.setItem(STORAGE_KEY, nextStatus ? 'true' : 'false');

            // Baru update State agar tampilan berubah
            setIsFav(nextStatus);

            if (nextStatus) {
                Alert.alert("UMUKA Store", "Produk berhasil ditambah ke Favorit! ❤️");
            }
        } catch (error) {
            Alert.alert("Error", "Gagal menyimpan ke memori.");
            console.log(error);
        }
    };

    // Jalankan loadStatus setiap kali halaman dibuka
    useEffect(() => {
        loadStatus();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.imageLarge} />
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.desc}>{product.desc}</Text>

                <View style={styles.counterContainer}>
                    {/* Tombol Minus dengan logika Disabled */}
                    <TouchableOpacity
                        onPress={() => setCount(Math.max(1, count - 1))}
                        disabled={count <= 1} // Tombol mati jika jumlah 1
                        style={[
                            styles.btnCount,
                            // GANTI BAGIAN INI:
                            count <= 1
                                ? { backgroundColor: '#E0E0E0', opacity: 0.5 } // Style saat tombol mati
                                : { backgroundColor: '#fff' }                // Style saat tombol aktif
                        ]}
                    >
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.countText}>{count}</Text>

                    <TouchableOpacity
                        onPress={() => setCount(count + 1)}
                        style={styles.btnCount}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.favBtn, { backgroundColor: isFav ? '#FF7675' : '#2D3436' }]}
                    onPress={toggleFavorite}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        {isFav ? '❤️ Tersimpan di Favorit' : '🤍 Tambah ke Favorit'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    imageLarge: { width: '100%', height: 350 },
    info: { padding: 24, marginTop: -20, backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25 },
    name: { fontSize: 26, fontWeight: '800', color: '#2D3436' },
    price: { fontSize: 22, color: '#00B894', fontWeight: 'bold', marginVertical: 10 },
    desc: { fontSize: 15, color: '#636E72', lineHeight: 24, marginBottom: 25 },
    counterContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F1F2F6', padding: 10, borderRadius: 12, marginBottom: 20 },
    btnCount: { width: 45, height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 },
    btnText: { fontSize: 20, fontWeight: 'bold' },
    countText: { marginHorizontal: 30, fontSize: 20, fontWeight: 'bold' },
    favBtn: { padding: 18, borderRadius: 15, alignItems: 'center', elevation: 3 }
});