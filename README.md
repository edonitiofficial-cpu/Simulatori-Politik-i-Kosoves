# Republika — paketa për GitHub

Përditësuar më **4 nëntor 2026**, cache PWA **v36**. Përfshin Regjistrin e Kuadrove, Bombën Mediatike, Mega-Projektin e Autostradës, AKP/Fondin Sovran me dy faza, Grevën e Trepçës, Betejën për RTK-në, Komisionin Hetimor të Rrymës dhe të gjitha varësitë aktuale të lojës.

Ngarko **përmbajtjen e folderit publikim** në rrënjën e repository-t. index.html duhet të jetë direkt aty, bashkë me JavaScript, CSS, manifestin, service worker-in, ikonat dhe folderin data. Mbaje .nojekyll. Nuk kërkohet build ose instalim paketash. Për GitHub Pages, zgjidh branch-in dhe folderin ku i vendos këta skedarë.

Mysafirët vazhdojnë me ruajtje lokale. Firebase ofron Google Auth dhe ruajtje manuale në Cloud; autosave nuk shkruan në Firestore. Nëse mungon, shto domain-in e faqes te Authorized domains në Firebase Auth. firestore.rules duhet publikuar edhe në Firebase; ngarkimi në GitHub nuk i aktivizon rregullat në Firebase.

PAKETA.json përmban madhësitë dhe SHA-256 të skedarëve të aplikacionit. Paketa nuk përmban ruajtje personale, teste, backups ose çelësa privatë. Konfigurimi publik i Firebase përfshihet për funksionimin e hyrjes.

**Logoja hyrëse mungon në projektin burimor:** rruga e kërkuar është assets/logo.png. Shto aty logon zyrtare dhe ngarko edhe folderin assets në GitHub. logo.png dhe ikonat PWA ekzistojnë në rrënjë. Sfondet opsionale images/kuvendi.jpg, images/qeveria.jpg dhe images/konferenca.jpg gjithashtu mungojnë në burim.

Për sinkronizime të ardhshme ekzekuto nga projekti kryesor: node tools/build-publication.cjs. Skripti kopjon runtime-in dhe rifreskon manifestin e hash-eve. Versioni i ri offline aktivizohet kur mbyllen dritaret me cache-in e vjetër.
