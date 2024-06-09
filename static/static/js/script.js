// Fonksiyon, sayfadaki saati günceller
function saatGuncelle() {
    // Şu anki tarihi al
    var simdi = new Date();
    // Saati al
    var saat = simdi.getHours();
    // Dakikayı al
    var dakika = simdi.getMinutes();
    // Saniyeyi al
    var saniye = simdi.getSeconds();
    // Saat, dakika ve saniye değerlerini düzenle (örneğin, 9 için "09" şeklinde)
    saat = (saat < 10 ? "0" : "") + saat;
    dakika = (dakika < 10 ? "0" : "") + dakika;
    saniye = (saniye < 10 ? "0" : "") + saniye;
    // Zamanı oluştur
    var zaman = saat + ":" + dakika + ":" + saniye;
    // Saat div'ine zamanı yaz
    document.getElementById('saat').innerHTML = zaman;
}

// Belirli aralıklarla saatGuncelle fonksiyonunu çağırarak saati güncelle
setInterval(saatGuncelle, 1000);





document.addEventListener('DOMContentLoaded', function() {
    var loadingDiv = document.getElementById('loading');
    var contentDiv = document.getElementById('content');

    setTimeout(function() {
        loadingDiv.style.display = 'none';
        contentDiv.style.display = 'block';
    }, 4000); // 10 saniye = 10000 milisaniye
});








document.addEventListener('DOMContentLoaded', function() {
    var loadingDiv = document.getElementsByClassName('loader');
    var contentDiv = document.getElementById('content');

    setTimeout(function() {
        loadingDiv.style.display = 'none';
        contentDiv.style.display = 'block';
    }, 5000); // 10 saniye = 10000 milisaniye
});


 