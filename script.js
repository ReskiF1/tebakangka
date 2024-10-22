alert('Tebak angka dari 1 - 10\nKamu punya 3 Kesempatan');
var com = Math.floor(Math.random() * 10) + 1;
console.log(com);

var c = 3;
while(c >= 1){
    var p = prompt('Masukkan angka tebakan');
    var hasil = '';
    if (p < 1 || p > 10){
        c--;
        hasil = alert('Kamu memasukkan pilihan yang salah!\nAyo masih ada ' + c + ' kesempatan');
    } else if (p == com){
        hasil = alert('Anda benar!\nAngka yang dicari adalah ' + com);
        break;
    } else if (p < com){
        c--;
        if (c > 0){
            hasil = alert('Terlalu RENDAH!\nAyo masih ada ' + c + ' kesempatan');
        } else{
            hasil = alert('Terlalu RENDAH!\nKesempatan Anda habis');
        }
    } else if (p > com){
        c--;
        if (c > 0){
            hasil = alert('Terlalu TINGGI!\nAyo masih ada ' + c + ' kesempatan');
        } else{
            hasil = alert('Terlalu TINGGI!\nKesempatan Anda habis');
        }
    }

    if (c === 0){
        hasil = alert('Anda gagal!\nAngka yang dicari adalah ' + com);
    }
}

alert('terimakasih');