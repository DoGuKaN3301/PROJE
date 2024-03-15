import sqlite3
def select(sorgu):
     baglanti = sqlite3.connect("personel.db")           #    veriler.bd isimli bir veri tabanı yaratır
     imlec = baglanti.cursor()
     imlec.execute(sorgu)
     kayitlar = imlec.fetchall()                        #        .fetchall() tüm kayıtlar gelir 
     baglanti.close()
     return kayitlar



def insert(sorgu):
    baglanti = sqlite3.connect("personel.db")           #    veriler.bd isimli bir veri tabanı yaratır
    imlec = baglanti.cursor()
    imlec.execute(sorgu)
    baglanti.commit()
    baglanti.close()


def delete(sorgu):
    baglanti = sqlite3.connect("personel.db")          #  veriler.bd isimli bir veri tabanı yaratır
    imlec = baglanti.cursor()
    imlec.execute(sorgu)
    baglanti.commit()  
    baglanti.close()

def update(sorgu):
        baglanti = sqlite3.connect("personel.db")          #  veriler.bd isimli bir veri tabanı yaratır
        imlec = baglanti.cursor()
        imlec.execute(sorgu)
        baglanti.commit()
        baglanti.close()     