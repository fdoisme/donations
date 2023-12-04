// function orderIdMidtrans() {
//     const sekarang = new Date();

//     const tanggal = sekarang.getDate().toString().padStart(2, '0'); // Mendapatkan tanggal dan memformatnya menjadi dua digit
//     const bulan = (sekarang.getMonth() + 1).toString().padStart(2, '0'); // Mendapatkan bulan (ingat, bulan dimulai dari 0)
//     const tahun = sekarang.getFullYear().toString(); // Mendapatkan tahun

//     const jam = sekarang.getHours().toString().padStart(2, '0'); // Mendapatkan jam
//     const menit = sekarang.getMinutes().toString().padStart(2, '0'); // Mendapatkan menit

//     const result = `${tanggal}${bulan}${tahun}${jam}${menit}`;
//     return result
// }

// cara 2
function orderIdMidtrans() {
    const sekarang = new Date();

    const tanggal = sekarang.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/[/]/g, '');

    const waktu = sekarang.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(/[.]/g, '');

    const result = tanggal + waktu;

    return result
}

module.exports = orderIdMidtrans