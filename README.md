# Spam Script untuk Uji Coba API

Proyek ini adalah sebuah skrip yang dibuat untuk tujuan **uji coba API** menggunakan **Node.js** dan **axios** untuk melakukan permintaan POST ke server dengan nomor telepon acak. Skrip ini mengirimkan permintaan untuk menguji respons server dan melihat cara kerja API.

**Penting:** Skrip ini hanya digunakan untuk tujuan pendidikan dan **bukan untuk tindakan ilegal**. Gunakan dengan bijak dan pastikan kamu mematuhi kebijakan penggunaan API atau situs yang kamu uji.

## Fitur
- Mengirimkan permintaan POST ke API tertentu dengan nomor telepon acak.
- Menampilkan respons status dan data dari server.
- Dapat menonaktifkan verifikasi SSL untuk pengujian lokal.

## Teknologi
- **Node.js**: Lingkungan JavaScript untuk server-side.
- **axios**: Library HTTP client untuk melakukan permintaan ke server.
- **https.Agent**: Digunakan untuk mengonfigurasi dan menonaktifkan verifikasi SSL saat pengujian.

## Prasyarat
- **Node.js**: Pastikan kamu telah menginstal Node.js di sistem kamu. Jika belum, kamu dapat mengunduh dan menginstalnya di [situs resmi Node.js](https://nodejs.org/).

## Cara Instalasi

1. **Clone Repositori**  
   Pertama, clone repositori ini ke komputer lokal kamu menggunakan Git.

   ```bash
   git clone https://github.com/username/spam-script.git

2.**Instalasi Dependensi**
Install dependensi yang diperlukan dengan npm (Node Package Manager.
  ```bash
   npm install

3.**Penggunaan**
Setelah semuanya terinstal, kamu bisa menjalankan skrip dengan perintah berikut di terminal.
 ```bash
node spam.js

**Catatan**
SSL Verification: Jika kamu mendapatkan error terkait SSL (unable to get local issuer certificate), kamu dapat menonaktifkan verifikasi SSL untuk tujuan pengujian menggunakan https.Agent dalam kode.

Kepatuhan terhadap Kebijakan: Pastikan kamu memahami kebijakan API yang kamu uji dan tidak melanggar ketentuan penggunaan. Jangan gunakan skrip ini untuk spam atau penyalahgunaan layanan.

Lisensi
Proyek ini disediakan di bawah lisensi MIT. Lihat LICENSE untuk detail lebih lanjut.

Disclaimer: Proyek ini dibuat hanya untuk tujuan pendidikan dan pengujian API. Penggunaan untuk aktivitas ilegal atau merugikan orang lain sangat tidak dianjurkan. Selalu gunakan skrip ini dengan bertanggung jawab.
