const axios = require('axios');
const https = require('https');

// Membuat agent untuk menonaktifkan verifikasi SSL (Hanya untuk uji coba, tidak disarankan untuk produksi)
const agent = new https.Agent({
    rejectUnauthorized: false // Nonaktifkan verifikasi SSL hanya untuk pengujian (gunakan dengan hati-hati)
});

// Nomor telepon acak yang ingin dikirim
const randomPhoneNumber = '081234567890'; // Ganti dengan nomor acak atau logika untuk menghasilkan nomor acak

// Fungsi utama untuk mengirimkan request POST
async function sendRequest() {
    try {
        // Mengirim request POST
        const response = await axios.post(
            'https://indonesia-dana.official-resmi.top/',
            new URLSearchParams({ nohp: randomPhoneNumber }), // Payload data dengan nomor acak
            {
                httpsAgent: agent, // Menggunakan agent untuk menonaktifkan SSL
                headers: {
                    'sec-ch-ua-platform': '"Windows"',
                    'Referer': 'https://indonesia-dana.official-resmi.top/',
                    'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
                    'sec-ch-ua-mobile': '?0',
                    'X-Requested-With': 'XMLHttpRequest',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
                    'Accept': 'text/plain, */*; q=0.01',
                    'DNT': '1',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Cookie': 'PHPSESSID=c48542d30bc5497768e2fc693c2d0a66' // Pastikan session ID ini valid
                }
            }
        );

        // Menampilkan hasil request
        console.log('Random No HP:', randomPhoneNumber);
        console.log('Response Code:', response.status);
        console.log('Response Data:', response.data);
    } catch (error) {
        // Menangani error dengan detail
        if (error.response) {
            // Error jika server merespons dengan status error (4xx, 5xx)
            console.error('Error fetching data:', error.response.status, error.response.data);
        } else if (error.request) {
            // Jika tidak ada respons yang diterima dari server
            console.error('No response received:', error.request);
        } else {
            // Error lain yang terjadi selama pembuatan request
            console.error('Error during request setup:', error.message);
        }
    }
}

// Memanggil fungsi untuk mengirimkan request
sendRequest();
