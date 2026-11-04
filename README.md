# Republika — paketa për GitHub

Përditësuar më **4 nëntor 2026**, cache PWA **v39**. Përfshin zgjerimin e 15 sektorëve me 45 politika dhe 45 ndërtime, efektet fiskale dhe krizat përkatëse, Regjistrin e Kuadrove, Bombën Mediatike, Mega-Projektin e Autostradës, AKP/Fondin Sovran, Grevën e Trepçës, RTK-në, Komisionin Hetimor të Rrymës dhe të gjitha varësitë aktuale të lojës.

Ngarko **përmbajtjen e folderit publikim** në rrënjën e repository-t. index.html duhet të jetë direkt aty, bashkë me JavaScript, CSS, manifestin, service worker-in, ikonat dhe folderin data. Mbaje .nojekyll. Nuk kërkohet build ose instalim paketash. Për GitHub Pages, zgjidh branch-in dhe folderin ku i vendos këta skedarë.

Ekrani hyrës përdor PNG-në zyrtare transparente `assets/logo.png` (1200×675, rreth 348 KB), preload me prioritet të lartë, skripte `defer` dhe sfond statik. Panelet e lojës renderohen kur lojtari hyn. Ikonat Apple, favicon dhe PWA janë krijuar nga e njëjta logo zyrtare. Përfshi edhe folderin `assets` gjatë ngarkimit në GitHub.

Mysafirët vazhdojnë me ruajtje lokale. Firebase ofron Google Auth dhe ruajtje manuale në Cloud; autosave nuk shkruan në Firestore. Nëse mungon, shto domain-in e faqes te Authorized domains në Firebase Auth. firestore.rules duhet publikuar edhe në Firebase; ngarkimi në GitHub nuk i aktivizon rregullat në Firebase.

PAKETA.json përmban madhësitë dhe SHA-256 të skedarëve të aplikacionit. Paketa nuk përmban ruajtje personale, teste, backups ose çelësa privatë. Konfigurimi publik i Firebase përfshihet për funksionimin e hyrjes.

Logoja zyrtare dhe ikonat përfshihen në paketë. Splash-i përdor sfond statik dhe nuk pret shkarkimin e fotografive të institucioneve.

Për sinkronizime të ardhshme ekzekuto nga projekti kryesor: node tools/build-publication.cjs. Skripti kopjon runtime-in dhe rifreskon manifestin e hash-eve. Versioni i ri offline aktivizohet kur mbyllen dritaret me cache-in e vjetër.
