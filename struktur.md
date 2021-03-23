KONZEPT:

Aufbau der Anwendung nach Componenten


background          Animation im Hintergrund X
                        Skelette X


labels              Name der Anwendung X
                    Impressum als kleiner Button X


icon-container
    icon            animierte Hauptmenü Themen X


container-content
    container-multitouch
        container-menu
        window
            content
                fundorte  ||  entstehung  ||  entwicklung  ||  alter ||  stammbaum  ||  quizz  
                navigation-content
            navigation-main >> router ?? 
            close >> store X
            language-change >> router  ??


router
    erste ebene
        menu 1 entstehung                   "./views/Entstehung.vue";
X       menu 2 alter                        "./views/Alter.vue";
        menu 3 entwicklung                  "./views/Koerper.vue";
X       menu 4 stammbaum des lebens         "./views/StammbaumLeben.vue";
x       menu 5 stammbaum des menschen       "./views/StammbaumMenschen.vue";
               subroute homininen           "./views/Homininen.vue";
                    clusterHomininenMap (keine Navigation, aber Anzeige mehrerer Punkt)
               subroute gattung             "./views/Gattung.vue";
        menu 6 fundorte                     "./views/Fundorte.vue";
               subroute fundort             "./views/Fundort.vue";
                    clusterFundortMap (permanente Navigation, Anzeige mehrerer Punkt, aktiver wechselt)
        menu 7 quizz                        "./views/Quizz.vue";


__ fehlende Inhalte und Fragen

folgende Arten sind in der Wandgrafik, fehlen aber im Dokument
burtele foot
a. prometheus

wie sollen die 3? Gattungen in der Grafik dargestellt werden, ist ja so nicht klickbar, und auch kein Platz dazu
denkbar wär wenn eine Klammer in der Farbe oben unter dem Menschenaffen Balken wäre
und was könnte aus dieser Grafik für den MT Tisch noch raus?
bei Gattung des Austrlopithecinen gibt es geographische Varianten, sind die Touchbar? reicht der Name auf der Karte? oder brauchts hier ein jeweils ein Bild? Karte statisch angeliefert?
bei den gattungen werden die Arten in der Powerpoint teilweise locker platziert, darf das in einer LIste, Bild - Namen sein, wenn es mehr sind müsste man das scrollen...
vor allem beim Homo sapiens liegen die flockig rum???



__ die einzelnen Content Componenten



_ fundorte          Fundorte der Skelette Hauptkarte mit interaktiver Karte
                        ( mittellanger Text, teilweise Forscher verlinkt im Text Karte Fundstücke Fotos )
                        · Koobi Fora
                        · Ledi-Geraru – Die ältesten Oldowan-Werkzeuge
                        · „Lucy“ – Berühmtheit aus Hadar
                        · Kada Gona - Die älteste „Werkstatt“
                        · Begräbnis für Lucys Tochter?
                        · Aramis – ein neuer Hominine bekommt seinen Namen
                        · Nariokotome - wo Turkana-Boy sein Ende fand
                        · Lomekwi 3 - die ältesten Steinwerkzeuge der Welt
                        · Konso Gardula
                        · Laetoli - die ältesten Fußspuren Afrikas
                        · Makuyuni
                        · Die Fundstätte Malema
                        · Detektivarbeit in Uraha
                        · Swartkrans
                        · Sterkfontein - Die Wiege der Menschheit?
                        · Ein Kind in der Wiege von Taung
                        · Kokiselei 4

                    ForscherOverlay 
                        wird im Text mit einem Link markiert
                        Name, Daten, kurzer Text, Foto
                    GlossarOverlay
                        glossar wird aus glossar.json geladen und im Text durchsucht, dafür gibt es eine Textcomponente. 
                        


_ entstehung        Entstehung der Fosilien
                    ( kann man das wie gsap animieren und durchblenden oder integrieren wir hier ein Video
                    Animationssequenz ca 5-7 Einzelbilder und kurze Texte
                    start/pause, rechts links option )
                    · 


_ entwicklung       Entwicklung der menschlichen Körperform (komplexeres Thema mit einigen Zwischenschritten)
                    · Skelett mit einigen hervorgehobenen Elementen, kurzer Text
                        · Schädel
                            kurzer Text, FEATURE MORPHING, 4 Schädel Illu, 1 Tag extra
                            4 Bilder Schädelbasisknickung verschiebt sich, könnte man auch blättern??? einfach SLIDESHOW???
                        · Becken, Geburtskanal
                            kurzer Text
                            SLIDESHOW ??? Grafik vorhanden, einfache Animation anzulegen, Drehung des Kopfes bei der Geburt ??? Illu anpassen ???  
                        · Hände
                            allgemein, kurzer Text
                            GAME Zuordnung der Hände zu Tieren / Mensch ??? was kommt als Auflösung ??? kombiniertes Bild ???
                            GAME Handpuzzle, eigentlich ausgeschnittene Formen wie beim Pferd, nicht einzelne Knochen, ist viel zu schwer !!!  extra??? 1 Tag
                        · Wirbelsäule, Gang
                            kurzer Text
                            3 mal Grafik aufrechter Gang
                        · Bein, Knie


_ alter             Alter der Funde
                    · 4 Cards liegen auf dem Screen + Beschriftung
                    · einzelne Cards umdrehen lösen diese auf 
                    · 2 absolut, 2 relativ


_ stammbaum         Stammbaum der Menschen
                    · Stammbaum drag & drop, >> weiter zum Stammbaum >>
                    · großer Stammbaum, 
                        Gattungen als Gruppe anklickbar 
                            ( Texte mit Begriffserklärung und Bilder der Arten, Arten von hier aus aufrufbar, Arten sortiert nach Zeitraum)
                            · Die Gattung der Australopithecinen
                            · Die Gattung der Paranthropinen
                            · Die Gattung der Homo

                        Arten einzeln aufrufbar
                            Steckbrief mit Karte und Fotos, Zeitraum auf horizontaler Zeitleiste angezeigt.
                            Zeitleiste unten verfügbar und anklickbar, entweder kommt man darüber zurück auf die Karte
                            oder es wird ein Minimenü Angeboten zur Auswahl der an einer Stelle verfügbaren Art.entweder werden die geographischen Varianten gezeigt
                            · 1 Graecopithecus freybergi
                            · 2 Sahelanthropus tchadensis
                            · 3 Orrorin tugenensis
                            · 4 Ardipithecus kadabba
                            · 5 Ardipithecus ramidus
                            · 6 Australopithecus anamensis
                            · 7 Kenyanthropus platyops
                            · 8 Australopithecus deyiremeda
                            · 9 Australopithecus afarensis
                            · 10 Australopithecus garhi
                            · 11 Australopithecus bahrelghazali
                            · 12 Australopithecus sediba
                            · 13 Australopithecus africanus
                            · 14 Paranthropus boisei
                            · 15 Paranthropus robustus
                            · 16 Paranthropus aethiopicus
                            · 17 Homo rudolfensis
                            · 18 Homo habilis
                            · 19 Homo erectus
                            · 20 Homo ergaster
                            · 21 Homo heidelbergensis
                            · 22 Homo naledi
                            · 23 Homo antecessor
                            · 24 Homo floresienses
                            · 25 Denisova-Mensch
                            · 26 Homo sapiens neanderthalensis
                            · 27 Homo sapiens sapiens


_ quizz             das Quiz zur Steinzeit
                    · Introscreen
                    · Slides durch die Fragen
                    · Auflösung der Fragen


_ impressum         off menu, wie immer, kleines fenster