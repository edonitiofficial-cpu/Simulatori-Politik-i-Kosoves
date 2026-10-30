# Republika

Paketë e gatshme për ngarkim në repository dhe shërbim si faqe statike.

## Si ta ngarkosh

Ngarko **përmbajtjen e kësaj dosjeje** në rrënjën e repository-t: index.html duhet të jetë direkt në rrënjë, bashkë me style.css dhe skedarët JavaScript. Ruaje dosjen data me të njëjtin emër dhe strukturë.

Mos ngarko dosjen e jashtme Republika ose dosjet audit/backups/tests për këtë version publik. Ato nuk nevojiten për funksionimin e lojës. Kjo paketë nuk përmban save autentik të lojtarit.

Loja hapet përmes index.html në një shërbim statik. Nuk kërkohet instalim varësish ose build. Ngarkimi në repository nuk e publikon vetvetiu faqen; aktivizo shërbimin e faqes statike që do të përdorësh.

## Ruajtja e progresit

Progresi ruhet në shfletuesin e secilit lojtar. Ndryshimi i adresës, profilit ose pastrimi i të dhënave të shfletuesit mund të ndikojë në disponueshmërinë e save-it. Paketa nuk ofron sinkronizim cloud.

## Fotografi që mungojnë në burim

Projekti origjinal referon images/kuvendi.jpg, images/qeveria.jpg dhe images/konferenca.jpg, por këta skedarë nuk ekzistonin kur u krijua paketa. Fotografitë e sfondit të hyrjes nuk do të shfaqen. Nuk u vendosën fotografi të sajuara ose të shkarkuara pa kërkesë.

Për t'i shtuar më vonë, krijo dosjen images dhe vendosi fotografitë me këta emra. Kjo mungesë nuk është heqje e skedarëve gjatë paketimit.

## Përmbajtja

PAKETA.json regjistron skedarët e aplikacionit, madhësitë dhe SHA-256 për kontrollin e kopjeve. .nojekyll përfshihet për shërbimin e drejtpërdrejtë të skedarëve. Kodi i aplikacionit është kopjuar pa ndryshime nga projekti origjinal.

Kjo është kopje e veçantë publikimi. Ndryshimet e ardhshme në projektin kryesor nuk kopjohen automatikisht këtu; përpara publikimit të një versioni të ri, përditëso paketën.
