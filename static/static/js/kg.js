// Şifre görme/gizleme işlemini gerçekleştiren fonksiyon
function togglePassword() {
  // Şifre giriş alanını seç
  var passwordInput = document.getElementById("password");
  // Göz simgesini seç
  var eyeIcon = document.querySelector(".toggle-password i");

  // Şifre giriş alanının tipine göre işlem yap
  if (passwordInput.type === "password") {
    // Eğer şifre giriş alanı "password" tipindeyse, görünür hale getir
    passwordInput.type = "text";
    // Göz simgesinin ikonunu değiştir
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    // Eğer şifre giriş alanı "password" tipinde değilse, gizle
    passwordInput.type = "password";
    // Göz simgesinin ikonunu değiştir
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Rastgele renk üreten bir fonksiyon
function rastgeleRenk() {
  // Rastgele HEX renk kodu oluştur
  var renk = '#' + Math.floor(Math.random()*16777215).toString(16);
  // Oluşturulan rengi döndür
  return renk;
}

// Belirli aralıklarla sınır rengini değiştiren fonksiyon
setInterval(function() {
  // Giriş formu konteynerini seç
  var loginContainer = document.getElementById("login-container");
  // Rastgele renk al
  var yeniRenk = rastgeleRenk();
  // Sınır rengini ayarla
  loginContainer.style.borderColor = yeniRenk;
}, 2000); // Her 2 saniyede bir değiştir (milisaniye cinsinden)

// Belirli aralıklarla resimlerin sınır rengini değiştiren fonksiyon
setInterval(function() {
  // Tüm resimlerin bulunduğu sınıfı seç
  var resimler = document.querySelectorAll(".resimler");
  // Her bir resim için işlem yap
  resimler.forEach(function(resim) {
    // Rastgele renk al
    var yeniRenk = rastgeleRenk();
    // Sınır rengini ayarla
    resim.style.borderColor = yeniRenk;
  });
}, 2000); // Her 2 saniyede bir değiştir (milisaniye cinsinden)
