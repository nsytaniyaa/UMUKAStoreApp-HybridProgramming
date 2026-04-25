# UMUKA Store App

Aplikasi Mobile Store sederhana berbasis **React Native** dan **Expo** yang dikembangkan untuk memenuhi tugas UTS mata kuliah **Hybrid Programming** di Universitas Muhammadiyah Karanganyar (UMUKA).

## Fitur Utama
- **Responsive Layout**: Tampilan adaptif (3 kolom di Web/Tablet, 1 kolom di Mobile).
- **Navigation**: Perpindahan halaman antar Home dan Detail Produk menggunakan Stack Navigation.
- **Quantity Counter**: Fitur tambah/kurang jumlah barang dengan validasi (tombol minus pudar saat jumlah = 1).
- **Persistent Favorites**: Fitur simpan produk favorit menggunakan **AsyncStorage** agar data tidak hilang saat aplikasi ditutup.

## Teknologi yang Digunakan
- **React Native** & **Expo Go**
- **TypeScript** (Type safety)
- **React Navigation** (Stack)
- **AsyncStorage** (Local Persistence)

## Demo Fitur
| Deskripsi | Visual |
|---|---|
| **Responsive Grid** | Transisi kolom otomatis berdasarkan lebar layar. |
| **Counter Logic** | Tombol pudar & disabled saat quantity mencapai batas minimum. |
| **Local DB** | Data favorit tersimpan permanen di memori perangkat. |

### Video dan Screenshot Demo Aplikasi
**[Klik di Sini untuk Menonton Video Demo](https://drive.google.com/file/d/14BTst_g2fkPTC97jwN7_B5xa3G2IE4SQ/view?usp=sharing)**

**[Klik di Sini untuk Melihat Screenshot Tampilan Pada Aplikasi Expo Go](https://drive.google.com/drive/folders/1OrluM0hvdfWfulvktJNUGbrnIn8rxy6i?usp=sharing)**

## Cara Menjalankan Project
1. Clone repository ini:
   ```bash
   git clone https://github.com/nsytaniyaa/UMUKAStoreApp-HybridProgramming.git
   ```

2. Masuk ke folder project:
   ```bash
   cd UMUKAStoreApp-HybridProgramming
   ```

3. Install dependencies: 
   ```bash
   npm install
   ```

4. Jalankan aplikasi: 
   ```bash
   npm run web
   ```
