# Dinçer Güder — Klinik Psikoloji Web Sitesi

Bu, GitHub Pages üzerinde ücretsiz olarak yayınlayabileceğiniz, hazır bir web sitesidir. Kod bilgisi gerekmeden, dosyaları düz metin editörüyle (ör. GitHub'ın kendi düzenleyicisi) açıp içeriği değiştirebilirsiniz.

## Site haritası

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa |
| `hakkimda.html` | Hakkımda / özgeçmiş |
| `hizmetler.html` | Testler (WISC-4, AGTE, MOXO) ve terapiler (çocuk-ergen, ACT, BDT, bireysel) |
| `randevu.html` | Randevu formu ve iletişim bilgileri |
| `yazilar/index.html` | Yazı listesi |
| `yazilar/*.html` | Tek tek yazılar |
| `assets/css/style.css` | Tüm görsel tasarım (renk, yazı tipi, boşluklar) burada |
| `assets/js/main.js` | Mobil menü ve randevu formu davranışı |
| `assets/images/` | Fotoğraflarınız |

---

## 1) GitHub Pages'e yükleme (ilk kurulum)

1. [github.com](https://github.com) üzerinde ücretsiz bir hesap açın (yoksa).
2. Sağ üstten **New repository** ile yeni bir depo (repo) oluşturun. İsmi örneğin `web-sitem` olabilir. **Public** seçin.
3. Depo sayfasında **Add file → Upload files** deyin, bu klasördeki **tüm dosya ve alt klasörleri** (site.zip'i açtıktan sonraki hali) sürükleyip bırakın. Klasör yapısının (`assets/`, `yazilar/` gibi) korunduğundan emin olun.
4. **Commit changes** ile yükleyin.
5. Depo içinde **Settings → Pages** sekmesine gidin.
6. **Branch** kısmından `main` (veya `master`) dalını ve `/root` klasörünü seçip **Save**'e basın.
7. Birkaç dakika sonra sayfanın en üstünde size bir adres verilecek: `https://kullaniciadiniz.github.io/web-sitem/`. Siteniz bu adreste yayında olacaktır.

> Kendi alan adınız varsa (ör. `adsoyadpsikolog.com`), yine **Settings → Pages** içinden "Custom domain" alanına yazıp DNS ayarlarını GitHub'ın gösterdiği şekilde yapmanız yeterli.

---

## 2) Kişisel bilgilerinizi güncelleme

Aşağıdaki yer tutucular **her sayfada** (ve `README.md` hariç) tekrar eder. GitHub'ın dosya düzenleyicisinde (bir dosyayı açıp kalem simgesine tıklayarak) veya bilgisayarınızda bulup-değiştir yaparak güncelleyin:

| Yer tutucu | Ne ile değiştirilecek |
|---|---|
| `[Ad Soyad]` | Gerçek adınız ve soyadınız |
| `[Şehir]` | Yaşadığınız/çalıştığınız şehir |
| `+90XXXXXXXXXX` (link) ve `+90 XXX XXX XX XX` (görünen metin) | Telefon numaranız |
| `ornek@eposta.com` | E-posta adresiniz |
| `https://instagram.com/kullaniciadi` | Instagram (veya başka sosyal medya) adresiniz |
| `[Klinik / muayenehane adresi]` | Açık adresiniz (randevu sayfasında) |
| `hakkimda.html` içindeki `[Üniversite adı]`, `[Yıl]` vb. | Eğitim ve kariyer bilgileriniz |

İpucu: GitHub'da bir depo içinde büyüteç ikonuyla (Search) `[Ad Soyad]` gibi bir metni aratıp hangi dosyalarda geçtiğini görebilirsiniz.

Fotoğraflarınızı değiştirmek isterseniz, `assets/images/` klasörüne yeni bir görsel yükleyip aynı isimle (`portre-tam.jpg`, `portre-yakin.jpg`) kaydetmeniz yeterlidir; sayfalarda başka bir değişiklik yapmanıza gerek kalmaz.

---

## 3) Randevu formunu gerçek bir alıcıya bağlama

Şu anda form, bir gönderim servisine bağlı **değil** — bağlanmazsa ziyaretçinin e-posta programını açar. Gerçek zamanlı, e-postanıza düşen bir randevu formu için ücretsiz **Formspree** servisini öneririm:

1. [formspree.io](https://formspree.io) adresinde ücretsiz bir hesap açın.
2. "New Form" ile yeni bir form oluşturun, alıcı e-postanızı girin.
3. Size verilen form adresi şuna benzer olacak: `https://formspree.io/f/abcd1234`
4. `randevu.html` dosyasını açın, şu satırı bulun:
   ```html
   <form id="randevu-form" action="https://formspree.io/f/FORMSPREE_ID" method="POST">
   ```
   `FORMSPREE_ID` kısmını kendi form kodunuzla (`abcd1234` gibi) değiştirin.
5. Kaydedip yayınladıktan sonra form gönderimleri doğrudan e-postanıza düşecektir.

**Alternatif:** Randevu takviminizi tam otomatik hale getirmek isterseniz (görüşme saatlerinizi ziyaretçinin doğrudan seçmesi), [Calendly](https://calendly.com) veya benzeri bir randevu aracı açıp, size verdiği "embed" (gömme) kodunu `randevu.html` içinde form kartının yerine yapıştırabilirsiniz. İsterseniz bu entegrasyonu birlikte bir sonraki adımda yapabiliriz.

---

## 4) Yeni bir yazı ekleme

1. `yazilar/_sablon-yeni-yazi.html` dosyasını kopyalayın.
2. Kopyaya, Türkçe karakter ve boşluk **kullanmadan** yeni bir isim verin. Örnek: `otizmde-erken-belirtiler.html`.
3. Dosyayı açıp `[YAZI BAŞLIĞI]`, tarih ve paragrafları kendi yazınızla değiştirin.
4. `yazilar/index.html` dosyasını açın, en üstteki `<a class="post-row">` bloğunu kopyalayıp yeni yazınız için bir tane daha ekleyin; `href` değerini yeni dosyanızın adıyla güncelleyin.
5. İsterseniz ana sayfadaki (`index.html`) "Yazılarımdan" bölümünü de en güncel yazınıza göre güncelleyebilirsiniz.

---

## 5) Görünümü değiştirme

Tüm renkler ve yazı tipleri `assets/css/style.css` dosyasının en üstündeki `:root { ... }` bloğunda tanımlı (ör. `--clay`, `--ink`, `--sand`). Bu değerleri değiştirmek tüm siteyi aynı anda günceller — sayfa sayfa uğraşmanız gerekmez.

---

## Not

Bu site bir bilgilendirme ve tanıtım aracıdır; acil durumlar için 112'ye yönlendiren bir not her sayfanın altında yer alır. İçerik olarak eklediğiniz test ve terapi açıklamaları genel bilgilendirme amaçlıdır, tanı yerine geçmez.
