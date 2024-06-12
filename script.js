document.getElementById('mcuForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil data dari form
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;
    var cakevariant = document.getElementById('cakevariant').value;
    var alamat = document.getElementById('alamat').value;
    var email = document.getElementById('email').value;
    var information = document.getElementById('information').value;

    // Nomor WhatsApp tujuan (ganti dengan nomor tujuan)
    var phoneNumber = '0895354022121'; // Ganti dengan nomor WhatsApp tujuan tanpa tanda '+' dan ' ' (contoh: 6281234567890 untuk nomor Indonesia)

    // Buat URL WhatsApp API
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' 
        + encodeURIComponent(
            'Nama: ' + name + '\n' +
            'Jumlah: ' + amount + '\n' +
            'Varian Kue: ' + cakevariant + '\n' +
            'Alamat: ' + alamat + '\n' +
            'Email: ' + email + '\n' +
            'Keterangan: ' + information
        );

    // Arahkan pengguna ke URL WhatsApp
    window.open(whatsappURL, '_blank');
});
