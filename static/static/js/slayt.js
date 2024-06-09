// Slayt gösterimi için gerekli değişkenlerin tanımlanması
var index = 0; // Slaytın bulunduğu konumu izlemek için bir indeks
var slaytFotolar = document.getElementsByClassName("slayt-foto"); // Slayt fotoğraflarının bulunduğu sınıfın tüm öğelerini al

// Slayt gösterimini başlatan fonksiyon
function slaytGoster() {
  // Tüm resimleri gizle
  for (var i = 0; i < slaytFotolar.length; i++) {
    slaytFotolar[i].style.display = "none";  
  }
  
  // İndeks değerini arttır ve son resme ulaşıldıysa sıfıra döndür
  index++;
  if (index >= slaytFotolar.length) {
    index = 0;
  }
  
  // Şu anki resmi göster
  slaytFotolar[index].style.display = "block";  
  
  // Bir sonraki resme geçmek için 10 saniye bekleyin
  setTimeout(slaytGoster, 10000); // 10 saniye aralıklarla değiştir
}

// İlk çağrıyı yap
slaytGoster();

// Değişen yazılar için gerekli değişkenlerin tanımlanması
var degisenYazilar = [
  "Steve Jobs'un dediği gibi, 'Bir şirketin sadece parasını kazanma amacı varsa, o şirket asla büyük olamaz.' DAPHNE Yazılım Şirketi olarak, kar amacının ötesine geçerek, teknolojiyi insanların hayatlarını iyileştirmek için bir araç olarak kullanıyoruz.'",
  "'Kodlayanlar geleceği yazıyor.'derler. Biz de bu sözü kendimize misyon edindik ve her gün bir adım daha ileri gitmek için çalışıyoruz. Çünkü bizim için yazılım sadece bir meslek değil, bir tutkudur.",
  "Dijital dönüşüm çağında, DAPHNE Yazılım Şirketi sizin yanınızda. İnovasyon, kalite ve müşteri memnuniyeti konusundaki kararlılığımızla, geleceği birlikte şekillendiriyoruz.",
  "Dijital çağın öncüsü olmak, yazılım dünyasında yıldızlaşmak, geleceği bugünden şekillendirmek... İşte tüm bu hedeflerin gerçeğe dönüştüğü yer:   DAPHNE Yazılım Şirketi.",
  "DAPHNE Yazılım Şirketi, bugünün sorunlarına yarının çözümlerini sunuyor. Müşterilerimizin işletme ihtiyaçlarına uygun özelleştirilmiş çözümler üretirken, aynı zamanda topluma ve dünyaya katkıda bulunmanın gururunu yaşıyoruz."
];

var indexYazi = 0; // Yazı dizisinin indeksini izlemek için bir değişken
var yaziElementi = document.getElementById("degisenYazi"); // HTML'deki yazıyı gösteren element

// Değişen yazıları gösteren fonksiyon
function yaziGoster() {
  // İlgili HTML elementine bir sonraki yazıyı yaz
  yaziElementi.textContent = degisenYazilar[indexYazi];
  // İndeks değerini arttır ve son yazıya ulaşıldıysa sıfıra döndür
  indexYazi++;
  if (indexYazi >= degisenYazilar.length) {
    indexYazi = 0;
  }
}

// İlk çağrıyı yap
yaziGoster();

// Her 10 saniyede bir yeni yazıyı göstermek için setInterval kullanılır
setInterval(yaziGoster, 10000); // 10 saniye aralıklarla değiştir
