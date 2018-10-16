// Use location.pathname to select navigation elements.
var nav = {
    path: '/museum',
    title: 'Museum',
    children: [
        {
            path: '/uni-geschichte',
            title: 'Uni Geschichte',
            children: [
                {
                    path: '/exhibits/show/wie-die-uni-wurde-was-sie',
                    title: 'Wie die Uni Wurde, was sie ist',
                    children: [
                        {
                            path: '/exhibits/show/wie-die-uni-wurde-was-sie/die-jesuiten-und-die-bildung',
                            title: "Die Jesuiten und die Bildung"
                        },
                        {
                            path: '/exhibits/show/wie-die-uni-wurde-was-sie/die-s--kularisation-und-ihre-f#',
                            title: "Stagnation und Neuanfang"
                        },
                        {
                            path: '/exhibits/show/wie-die-uni-wurde-was-sie/stagnation-und-neuanfang',
                            title: "Stagnation und Neuanfang"
                        },
                        {
                            path: '/exhibits/show/wie-die-uni-wurde-was-sie/campus-gestalt',
                            title: "Der Campus nimmt Gestalt an"
                        },
                        {
                            path: '/exhibits/show/wie-die-uni-wurde-was-sie/geschichtlicher-ueberblick',
                            title: "Geschichtlicher Überblick"
                        }
                    ]
                },
                {
                    path: '/exhibits/show/spiegel_hochschulgeschichte',
                    title: 'Spiegel der Hochschulgeschichte',
                    children: [
                        {
                            path: '/exhibits/show/spiegel_hochschulgeschichte/jahresbericht',
                            title: "Der Jahresbericht 1932/33",
                        },
                        {
                            path: '/exhibits/show/spiegel_hochschulgeschichte/nachrichten',
                            title: "Nachrichten und Veröffentlichungen",
                        }
                    ]
                },
                {
                    path: '/exhibits/show/warum-passau',
                    title: "Warum Passau?",
                    children: [
                        {
                            path: '/exhibits/show/warum-passau/--berblick',
                            title: "Überblick",
                        },
                        {
                            path: '/exhibits/show/warum-passau/niederbayern',
                            title: "Für Niederbayern",
                        },
                        {
                            path: '/exhibits/show/warum-passau/bildung',
                            title: "Für Bildung",
                        },
                        {
                            path: '/exhibits/show/warum-passau/passau',
                            title: "Für Passau",
                        },
                        {
                            path: '/exhibits/show/warum-passau/foerderer',
                            title: "Förderer",
                            children: [

                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '/lehre-im-wandel',
            title: "Lehre im Wandel",
            children: [
                {
                    path: '/exhibits/show/lehren-und-lernen',
                    title: "Lehren und Lehre im 20. Jahrhundert",
                    children: [
                        {
                            path: '/exhibits/show/lehren-und-lernen/weimarer-zeit',
                            title: 'Frühe Weimarer Zeit'
                        },
                        {
                            path: 'exhibits/show/vor-und-nachkriegszeit',
                            title: 'Vor- und Nachkriegszeit'
                        },
                        {
                            path: '/exhibits/show/vorlesungsverzeichnis1951',
                            title: 'Anfangszeit der BRD'
                        },
                        {
                            path: '/exhibits/show/lehren-und-lernen/abschied',
                            title: 'Ein Abschied'
                        },
                        {
                            path: '/exhibits/show/lehren-und-lernen/timeline',
                            title: 'Timeline'
                        },
                        {
                            path: '/exhibits/show/lehren-und-lernen/boshof',
                            title: 'Boshof'
                        }
                    ]
                },
                {
                    path: '/exhibits/show/oral-history',
                    title: "Oral History",
                    children: [
                        {
                            path: "/exhibits/show/oral-history/up-mehralseinarbeitsplatz",
                            title: "Die Universität Passau - mehr als nur ein Arbeitsplatz"
                        },
                        {
                            path: "/exhibits/show/oral-history/perspektive--studierende--dozi",
                            title: "Perspektive: Studierende, Dozierende"
                        },
                        {
                            path: "/exhibits/show/oral-history/internationalisierung-der-univ",
                            title: "Fernliegend?"
                        },
                        {
                            path: "/exhibits/show/oral-history/vergort",
                            title: "Vergangene Orte, bleibende Orte"
                        },
                        {
                            path: "/exhibits/show/oral-history/uniwan",
                            title: "Uni im Wandel"
                        },
                        {
                            path: "/exhibits/show/oral-history/von-fast-nichts-zu-sehr-viel--",
                            title: "Von fast nichts zu sehr viel (Boshof)"
                        },
                        {
                            path: "/exhibits/show/oral-history/40-jahre-campus-passau",
                            title: "40 Jahre Campus - oder?",
                            children: [
                                {
                                    path: "/exhibits/show/oral-history/40-jahre-campus-passau/von-der-baugrube-zum-campus",
                                    title: "Von der Baugrube zum Campus - die Uni entsteht"
                                },
                                {
                                    path: "/exhibits/show/oral-history/40-jahre-campus-passau/in-guten-haenden-das-referat-l",
                                    title: "In guten Händen: Das Referat Liegenschaften"
                                }
                            ]
                        }
                    ]
                },

            ]
        },
        {
            path: '/studentenschaft',
            title: "Studentenschaft",
            children: [
                {
                    path: "/exhibits/show/studentenleben/",
                    title: "Studentenleben im 19. Jahrhundert",
                    children: [
                        {
                            path: "/exhibits/show/studentenleben/lyzeum",
                            title: "Am Lyzeum"
                        },
                        {
                            path: "/exhibits/show/studentenleben/regeln",
                            title: "Wir haben Regeln"
                        },
                        {
                            path: "/exhibits/show/studentenleben/stundenplaene",
                            title: "Stundenpläne"
                        },
                        {
                            path: "/exhibits/show/studentenleben/noten",
                            title: "Noten und mehr",
                            children: [
                                {
                                    path: "/exhibits/show/studentenleben/noten/zwei-studenten",
                                    title: "Zwei Studenten"
                                },
                                {
                                    path: "/exhibits/show/studentenleben/noten/karrierestart",
                                    title: "Karrierestart"
                                }
                            ]
                        },
                        {
                            path: "/exhibits/show/studentenleben/timeline",
                            title: "Timeline"
                        },
                        {
                            path: "/exhibits/show/studentenleben/wohngemeinschaft",
                            title: "Eine Wohngemeinschaft?"
                        }
                    ]
                },
                {
                    path: "/exhibits/show/paul-esterl",
                    title: "Paul Esterl - ein Student vor 180 Jahren",
                    children: [
                        {
                            path: "/exhibits/show/paul-esterl/paul_esterl_absolutorium",
                            title: "Das Absolutorium"
                        },
                        {
                            path: "/exhibits/show/paul-esterl/paul_esterl_immatrikulation",
                            title: "Immatrikulation"
                        },
                        {
                            path: "/exhibits/show/paul-esterl/paul_esterl_noten",
                            title: "Seine Noten"
                        },
                        {
                            path: "/exhibits/show/paul-esterl/paul_esterl_semestralzeugnis",
                            title: "Semesteralzeugnis"
                        },
                        {
                            path: "/exhibits/show/paul-esterl/paul_esterl_lebensweg",
                            title: "Der Lebensweg des Paul Esterl"
                        }
                    ]
                },
                {
                    path: "/exhibits/show/weltkriege-studenten",
                    title: "Die Weltkriege, die Studenten",
                    children: [
                        {
                            path: "/exhibits/show/weltkriege-studenten/1--weltkrieg",
                            title: "1. Weltkrieg"
                        },
                        {
                            path: "/exhibits/show/weltkriege-studenten/2--weltkrieg",
                            title: "2. Weltkrieg",
                            children: [
                                {
                                    path: "/exhibits/show/weltkriege-studenten/2--weltkrieg/alois-winklhofer",
                                    title: "Alois Winklhofer"
                                },
                                {
                                    path: "/exhibits/show/weltkriege-studenten/2--weltkrieg/antonius-hofmann",
                                    title: "Antonius Hofmann"
                                },
                                {
                                    path: "/exhibits/show/weltkriege-studenten/2--weltkrieg/johann-unterberg",
                                    title: "Johann Unterberg"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '/aussenwirkung',
            title: 'Aussenwirkung',
            children: [
            ]
        },
        {
            path: '/campus',
            title: 'Aussenwirkung',
            children: [
            ]
        },
        {
            path: '/projekt',
            title: 'Aussenwirkung',
            children: [
            ]
        }
    ]
}


/*
{ path: "/exhibits/show/sonderbeilagen/im-lauf-der-zeit", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-1978", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-1983", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-1993", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-1998", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-2003", title: "" }
{ path: "/exhibits/show/sonderbeilagen/pnp-sonderbeilage-2008", title: "" }
{ path: "/exhibits/show/sonderbeilagen/das-grusswort", title: "" }
{ path: "/exhibits/show/sonderbeilagen/paesident", title: "" }
{ path: "/exhibits/show/sonderbeilagen/titelseiten", title: "" }
{ path: "/exhibits/show/sonderbeilagen/universitaetfakultaeten", title: "" }

{ path: "/exhibits/show/fernliegend/lviv", title: "" }
{ path: "/exhibits/show/fernliegend/prag", title: "" }
{ path: "/exhibits/show/fernliegend/tours", title: "" }
{ path: "/exhibits/show/fernliegend/verona", title: "" }
{ path: "/exhibits/show/fernliegend/wo-", title: "" }
{ path: "/exhibits/show/fernliegend/zeitleiste", title: "" }

{ path: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht", title: "" }
{ path: "/exhibits/show/spiegel_hochschulgeschichte/nachrichten", title: "" }

{ path: "/exhibits/show/kunst-am-campus/boot", title: "" }
{ path: "/exhibits/show/kunst-am-campus/graffiti", title: "" }
{ path: "/exhibits/show/kunst-am-campus/kugeln", title: "" }
{ path: "/exhibits/show/kunst-am-campus/objekte", title: "" }
{ path: "/exhibits/show/kunst-am-campus/ohne-titel", title: "" }
{ path: "/exhibits/show/kunst-am-campus/segel", title: "" }
{ path: "/exhibits/show/kunst-am-campus/wolf", title: "" }

{ path: "/exhibits/show/logo/der--madonnenstreit-", title: "" }
{ path: "/exhibits/show/logo/logo", title: "" }

{ path: "/exhibits/show/besondere-orte/kapelle-buergerkongregatio", title: "" }
{ path: "/exhibits/show/besondere-orte/philosophicum-bilder", title: "" }
{ path: "/exhibits/show/besondere-orte/polyeder", title: "" }
{ path: "/exhibits/show/besondere-orte/roemischer-grabstein", title: "" }


{ path: "/exhibits/show/born-digital/born-digital", title: "" }
{ path: "/exhibits/show/born-digital/design", title: "" }
{ path: "/exhibits/show/born-digital/fakultaeten", title: "" }
{ path: "/exhibits/show/born-digital/funktion", title: "" }

{ path: "/exhibits/show/projekt/ablauf", title: "" }
{ path: "/exhibits/show/projekt/beitr--gerinnen", title: "" }
{ path: "/exhibits/show/projekt/datenbanken", title: "" }
{ path: "/exhibits/show/projekt/digitalisierung", title: "" }
{ path: "/exhibits/show/projekt/oral-history", title: "" }
{ path: "/exhibits/show/projekt/projektarbeit", title: "" }
{ path: "/exhibits/show/projekt/projektarbeit-f--r-kultur", title: "" }

{ path: "/exhibits/show/stadt-und-uni/das-studenten-ghetto", title: "" }
{ path: "/exhibits/show/stadt-und-uni/die-studenten-kommen-", title: "" }
{ path: "/exhibits/show/stadt-und-uni/passau-r--umt-auf", title: "" }

{ path: "/exhibits/show/ein-archiv-packt-aus/aufarbeiten-", title: "" }
{ path: "/exhibits/show/ein-archiv-packt-aus/bewahren-", title: "" }
{ path: "/exhibits/show/ein-archiv-packt-aus/zeigen-", title: "" }
{ path: "/exhibits/show/ein-archiv-packt-aus/sozialstruktur", title: "" }
{ path: "/exhibits/show/ein-archiv-packt-aus/zahlen", title: "" }
*/
