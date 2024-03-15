import sqlite3 
baglanti = sqlite3.connect("personel.db")  
imlec = baglanti.cursor()  


sorgu = "CREATE TABLE IF NOT EXISTS admin (ad TEXT , email TEXT , sifre TEXT , tur TEXT)"  
imlec.execute(sorgu) 
baglanti.commit 


sorgu = "INSERT INTO admin VALUES ('dogukan','d@gmail.com','1234','admin')"
imlec.execute(sorgu)
baglanti.commit()

sorgu = "INSERT INTO admin VALUES ('sevim','d@gmail.com','1234','admin')"
imlec.execute(sorgu)
baglanti.commit()


sorgu = "INSERT INTO admin VALUES ('osman','o@gmail.com','12345' ,'kullanici')"
imlec.execute(sorgu)
baglanti.commit()