from flask import Flask ,render_template ,redirect,session ,request , url_for
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter
import io
import sys
from sorgular import select , insert , delete , update
# # #site yönlendirmesi


app =Flask(__name__)
app.secret_key="1234"

@app.route("/")            
def anasayfa(): 
    return render_template("index.html")

@app.route("/python")            
def python(): 
    return render_template("py.html")

@app.route("/muhyazilim")            
def muhyazilim(): 
    return render_template("yazilimmuhendisi.html")

@app.route("/giris")            
def giris(): 
    return render_template("giris.html")

@app.route("/kayit")            
def kayit(): 
    return render_template("kayit.html")

@app.route("/admin_panel")
def admin_panel():
    return render_template("admin.html")

@app.route("/kullanici")
def kullanici():
    return render_template("kayit.html")










@app.route("/loginbilgilerikontrol", methods=["POST"])
def login_kontrol():
    if request.method == "POST":
        kullaniciadi = request.form.get("kullaniciadi")
        sifre = request.form.get("sifre")
        
        sorgu = f"SELECT * FROM admin WHERE ad = '{kullaniciadi}' AND  sifre='{sifre}'"           
        kayitlar = select(sorgu)                  
     
        if kayitlar and len(kayitlar) != 0:
            sorgu = f"SELECT * FROM admin WHERE ad = '{kullaniciadi}' AND  sifre='{sifre}' OR tur ='admin'"           
            kayitlar = select(sorgu)
            return redirect(url_for("admin_panel"))
          
        elif kayitlar and len(kayitlar) > 0:

            sorgu = f"SELECT * FROM admin WHERE ad = '{kullaniciadi}' AND  sifre='{sifre}' OR tur ='kullanici'"           
            kayitlar = select(sorgu)
            return redirect(url_for("kullanici"))
        else:
            
            return redirect(url_for("kullancıyok.html"))












# python kodları çalışması için

@app.route('/python_op')
def index():
    return render_template('py.html')

@app.route('/runcode', methods=['POST'])
def run_code():
    code = request.form['code']
    output = run_python_code(code)
    return output

def run_python_code(code):
    # Yakalanan standart çıktıyı (print) bir StringIO nesnesine yönlendir
    stdout_capture = io.StringIO()
    sys.stdout = stdout_capture

    try:
        exec(code)  # Python kodlarını çalıştır
    except Exception as e:
        sys.stdout = sys.__stdout__  # Standart çıktıyı geri yükle
        return f'Hata: {str(e)}'

    # Standart çıktıyı geri yükle
    sys.stdout = sys.__stdout__

    # Çıktıyı renklendir ve HTML formatına dönüştür
    formatted_output = highlight(stdout_capture.getvalue(), PythonLexer(), HtmlFormatter())

    return formatted_output

if __name__ == '__main__':
    app.run(debug=True)






   