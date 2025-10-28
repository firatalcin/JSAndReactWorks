let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase(); // küçük harf
sonuc = kursAdi.toUpperCase(); // büyük harf
sonuc = kursAdi.length; // uzunluk
sonuc = kursAdi[1]; 
sonuc = kursAdi.slice(0, 6); // kesme
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6); // kesme
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" "); // boşluklardan ayır dizi yap
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);

sonuc1 = kursAdi.substring(5);
sonuc2 = kursAdi.slice(5);

console.log(sonuc1)
console.log(sonuc2)