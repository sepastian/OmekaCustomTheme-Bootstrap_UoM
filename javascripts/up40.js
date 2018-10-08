'use strict';

/*
 * Configure tiles.
 *
 * Tiles are used on may pages.
 * A tile consists of an image, text, title and target url.
 *
 * Tiles are grouped into tile sets.
 * A tile set maps consists of a list of lists
 * and maps to an HTML table consisting of rows and columns.
 * Each list in the tile set maps to a row;
 * each sub-list then maps to a cell.
 *
 * This file defines tile sets, tiles and an inserting function.
 * Tile sets are mapped by unique IDs.
 * For example, the tile set mapped by 'home' will be inserted
 * into <table id='home'>.
 *
 * A single HTML page can host multiple tile sets.
 */
function inject_tile_sets(elements) {
    // A page may host multiple tile sets.
    jQuery(elements).each(function(_,e) {
        var id = jQuery(e).attr('id');
        if (! id) {
            // If no CSS ID has been specified,
            // lookup tile set by pathname.
            id = location.pathname;
        }
        var tile_set = tile_sets[id],
            html = [];
        if (! tile_set || Object.keys(tile_set).length == 0) {
            // No tiles have been defined for this ID/pathname.
            console.warn(`No tiles have been defined!`)
            console.warn(`Pathname ${location.pathname}`)
            console.warn(`ID: ${jQuery(e).attr('id')}`)
            return
        }
        // Transfer classes of placeholder element to newly created table.
        html.push('<table class="' + jQuery(e).attr('class') + '">');
        tile_set.forEach(function(tiles) {
            var tile_width = Math.floor(100/tiles.length);
            html.push("<tr>");
            tiles.forEach(function(tile) {
                if (Object.keys(tile).length == 0) {
                    // Insert empty <td/> for empty tiles.
                    return
                }
                var css_bg_image = 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url("' + tile.image + '")';
                html.push('<td style="width:' + tile_width + '%;">');
                html.push('<div class="up40-tile" style=\'background-image:' + css_bg_image + '\'>');
                html.push('<div class="header">');
                html.push('<a href="' + tile.href + '">' + tile.title + "</a>");
                html.push('</div>');
                html.push('</div>');
                html.push('</td>');
            })
            html.push("</tr>");
        })
        html.push('</table>');
        jQuery(e).replaceWith(html.join(''));
    })
}

function inject_nav() {
    var e = nav[location.pathname]
    if (! e) {
        return
    }
    // TODO construct breadcrumbs resolving parent.
    var breadcrumbs = [{title: e.title, href: location.pathname}]
    var parent = e.parent
    while (parent) {
        breadcrumbs.push({title: parent.title, href: parent.href})
        parent = parent.parent
    }
    var html = ["<div class='up40-nav row'>","<div class='col-xs-10 col-xs-offset-1'>"]
    var keys = ['prev','parent','next']
    keys.forEach(function(k){
        html.push("<div class='col-xs-4 up40-nav-" + k + "'>")
        html.push("<a href='" + (e[k] || {href:'#'}).href + "'>")
        html.push((e[k] || {title:''}).title)
        html.push("</a>")
        html.push("</div>")
    })
    breadcrumbs.reverse().forEach(function(b,i){
        html.push("<a href='" + b.href + "'>" + b.title + "</a>")
        if (i < breadcrumbs.length - 1) {
            html.push("<span>&rarr;</span>")
        }
    })
    html.push("</div></div>")
    jQuery('.up40-nav').replaceWith(html.join(''));
}

// Use location.pathname to select navigation elements.
var nav = {
    '/' : {
        title: 'Start',
        prev: null,
        next: {
            title: 'Uni Geschichte',
            href: "/uni-geschichte"
        },
        parent: null,
    },
    '/uni-geschichte': {
        title: 'Uni Geschichte',
        prev: null,
        next: {
            title: 'Wie die Uni wurde, was sie ist',
            href: '/exhibits/show/wie-die-uni-wurde-was-sie'
        },
        parent: {
            title: 'Start',
            href: '/'
        }
    }
}

var tile_sets = {
    // / (homepage)
    'home-museum': [
        [
            {
                title: "Uni-Geschichte",
                image: "/files/square_thumbnails/21d7445429a759c8a369beabf581024e.jpg",
                text: "",
                href: "/uni-geschichte"
            },
            {
                title: "Lehre im Wandel",
                image: "/files/square_thumbnails/688550b26d959134207dfecec6ada8d2.jpg",
                text: "",
                href: "/lehre-im-wandel"
            },
            {
                title: "Studentenschaft",
                image: "/files/square_thumbnails/110f5bd92997fd7bdb17324ee905e30b.jpg",
                text: "",
                href: "/studentenschaft"
            }
        ], [
            {
                title: "Aussenwirkung",
                image: "/files/square_thumbnails/d8de70f47296b25232786736b2e45ec4.jpg",
                text: "",
                href: "/aussenwirkung"
            },
            {
                title: "Campus",
                image: "/files/square_thumbnails/c4456f479e4126354e2ff188572dd077.jpg",
                text: "",
                href: "/campus"
            },
            {
                title: "Projekt",
                image: "/files/square_thumbnails/97bed54fcdf5bcda14750902ef3228ac.jpg",
                text: "",
                href: "/projekt"
            }
        ]
    ],
    // /uni-geschichte
    'home-museum-unigeschichte': [
        [
            {
                title: "Wie die Uni wurde, was sie ist",
                image: "/files/square_thumbnails/21d7445429a759c8a369beabf581024e.jpg",
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie"
            }, {
                title: "Spiegel der Hochschulgeschichte",
                image: "/files/square_thumbnails/688550b26d959134207dfecec6ada8d2.jpg",
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte"
            }, {
                title: "Warum Passau?",
                image: "/files/square_thumbnails/110f5bd92997fd7bdb17324ee905e30b.jpg",
                text: "",
                href: "/exhibits/show/warum-passau"
            }
        ]

    ],

    // /Uni-Geschichte
    // /Wie die Uni wurde, was sie ist
    'exhibits/show/wie-die-uni-wurde-was-sie': [
        [
            {
                title: "Die Jesuiten und die Bildung",
                image: "/files/square_thumbnails/ed5d989590391a136a333b25a8140214.jpg",
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie/die-jesuiten-und-die-bildung"
            }, {
                title: "Die Säkularisation und ihre Folgen",
                image: "/files/square_thumbnails/806370884804db9808b68b257835daed.jpg",
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie/die-s--kularisation-und-ihre-f#?c=0&m=0&s=0&cv=0"
            }, {
                title: "Stagnation und Neuanfang",
                image: "/files/square_thumbnails/7ab7d7cabcb90fe2d849ea78bfa0c164.jpg",
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie/stagnation-und-neuanfang"
            }
        ],
        [
            {
                title: "Der Campus nimmt Gestalt an",
                image: "/files/square_thumbnails/4065dd20999c207a2a16a3d7d02de726.jpg",
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie/campus-gestalt"
            }, {
                title: "Geschichtlicher Überblick",
                image: "/files/square_thumbnails/648d8639a875fcd775ef45e6971b32b2.jpg", //FotoNeu
                text: "",
                href: "/exhibits/show/wie-die-uni-wurde-was-sie/geschichtlicher-ueberblick"
            }
        ]
    ],
    // /Spiegel der Hochschulgeschichte
    '/exhibits/show/spiegel_hochschulgeschichte': [
        [
            {
                title: "Der Jahresbericht 1932/33",
                image: "/files/square_thumbnails/26482cc2992af1070c1da3cfd9850ca6.jpg",
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht#?c=0&m=0&s=0&cv=0"
            }, {
                title: "Nachrichten und Veröffentlichungen",
                image: "/files/square_thumbnails/b2fea2d3f35fda304a0100a92cfe739e.jpg",
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/nachrichten"
            }
        ]
    ],
    // /Warum Passau
    '/exhibits/show/warum-passau': [
        [
            {
                title: "Überblick",
                image: "", //Grafik/nur Schrift
                text: "",
                href: "/exhibits/show/warum-passau/--berblick"
            }, {
                title: "Für Niederbayern",
                image: "/files/square_thumbnails/7abf49a756ede009884813af70c96f02.jpg", //veraltet
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht#?c=0&m=0&s=0&cv=0"
            }, {
                title: "Für Bildung",
                image: "/files/square_thumbnails/7abf49a756ede009884813af70c96f02.jpg", //veraltet
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht#?c=0&m=0&s=0&cv=0"
            }
        ],[
            {
                title: "Für Passau",
                image: "/files/square_thumbnails/110f5bd92997fd7bdb17324ee905e30b.jpg", //veraltet
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht#?c=0&m=0&s=0&cv=0"
            }, {
                title: "Förderer",
                image: "",
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte/jahresbericht#?c=0&m=0&s=0&cv=0"
            }, {

            }
        ]
    ],
    // /lehre-im-wandel
    'home-museum-lehreimwandel': [
        [
            {
                title: "Lehren und Lehre im 20. Jahrhundert",
                image: "/files/square_thumbnails/3d8d640f03d5aa938a636fd5d1ed7b6a.jpg",
                text: "",
                href: "/exhibits/show/lehren-und-lernen"
            },
            {
                title: "Oral History",
                image: "/files/square_thumbnails/a3b60c4dd04349cb81f00e60d7769959.jpg",
                text: "",
                href: "/exhibits/show/oral-history"
            }
        ]
    ],
    // Studentenschaft
    // Studentenleben im 19. Jahrhundert
    // TODO
    '/exhibits/show/studentenleben': [
    ],
    // Studentenschaft
    // Paul Esterl - Ein Student vor 180 Jahren
    // TODO
    '/exhibits/show/paul-esterl': [
    ],
    // Studentenschaft
    // Die Weltkriege, die Studenten
    // TODO
    '/exhibits/show/weltkriege-studenten': [
    ],
    // /Lehre im Wandel
    // /Lehren und Lernen im 20. Jahrhundert
    '/exhibits/show/lehren-und-lernen': [
        [
            {
                title: "Frühe Weimarer Zeit",
                image: "/files/square_thumbnails/03f0225ca8328520d54931dbeab94b4b.jpg",
                text: "",
                href: "/exhibits/show/lehren-und-lernen/weimarer-zeit"
            }, {
                title: "Vor- und Nachkriegszeit",
                image: "/files/square_thumbnails/607cf9419e6211de29a9576db5277c04.jpg",
                text: "",
                href: "/exhibits/show/vor-und-nachkriegszeit"
            }, {
                title: "Anfangszeit der BRD",
                image: "/files/square_thumbnails/3d8d640f03d5aa938a636fd5d1ed7b6a.jpg",
                text: "",
                href: "/exhibits/show/vorlesungsverzeichnis1951"
            }
        ], [
            {
                title: "Ein Abschied",
                image: "/files/square_thumbnails/bf7ca0ac859f03742a0b3141ea6961b7.jpg",
                text: "",
                href: "/exhibits/show/lehren-und-lernen/weimarer-zeit"
            }, {
                title: "Timeline",
                image: "", //Grafik/nur Text
                text: "",
                href: "/exhibits/show/lehren-und-lernen/timeline"
            }, {
                title: "Boshof",
                image: "", //Bild fehlt
                text: "",
                href: "/exhibits/show/lehren-und-lernen/boshof"
            }
        ]
    ],
    // /studentenschaft
    'home-museum-studentenschaft': [
        [
            {
                title: "Studentenleben im 19. Jahrhundert",
                image: "/files/square_thumbnails/df9110be9395bfc8c8e4f6e8e327c397.jpg",
                text: "",
                href: "/exhibits/show/studentenleben"
            }, {
                title: "Paul Esterl - Ein Student vor 180 Jahren",
                image: "/files/square_thumbnails/057b342a5bec039889c3fbc6c022c244.jpg",
                text: "",
                href: "/exhibits/show/paul-esterl"
            }, {
                title: "Die Weltkriege, die Studenten",
                image: "/files/square_thumbnails/2f39545c9b72357853a60a343bf69ba8.jpg",
                text: "",
                href: "/exhibits/show/weltkriege-studenten"
            }

        ]
    ],
    '/aussenwirkung': [
        [
            {
                title: "Fernliegend?",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/d8de70f47296b25232786736b2e45ec4.jpg",
                text: "",
                href: "/exhibits/show/fernliegend"
            },
            {
                title: "Was war wichtig?",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/87569c62c4ff35cf0b1938a9592e73a9.jpg",
                text: "",
                href: "/exhibits/show/sonderbeilagen"
            }
        ], [
            {
                title: "Das Logo",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/cfb38f38b6c9e5328b897550c45859b5.jpg",
                text: "",
                href: "/exhibits/show/logo"
            },
            {
                title: "Born Digital",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/22739f1799af2365bdea22c909d992d2.jpg",
                text: "",
                href: "/exhibits/show/born-digital"
            }
        ]
    ],
    '/campus': [
        [
            {
                title: "Besondere Orte",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/c4456f479e4126354e2ff188572dd077.jpg",
                text: "",
                href: "/exhibits/show/besondere-orte"
            },
            {
                title: "MEINE Kunst am Campus",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/ac673191dd14cc350342efd55d43796c.jpg",
                text: "",
                href: "/exhibits/show/kunst-am-campus"
            },
            {
                title: "Die Stadt und die Uni",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/60a8cf70f354f38a02cd0c22ffead294.jpg",
                text: "",
                href: "/exhibits/show/stadt-und-uni"
            }
        ]
    ],
    '/projekt': [
        [
            {
                title: "Das Projekt",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/ee0792235a4424ac04f74511149f3d0f.jpg",
                text: "",
                href: "/exhibits/show/projekt"
            },
            {
                title: "Ein Archiv packt aus",
                image: "http://dighum01.phil.uni-passau.de:8088/files/square_thumbnails/97bed54fcdf5bcda14750902ef3228ac.jpg",
                text: "",
                href: "/exhibits/show/ein-archiv-packt-aus"
            }
        ]
    ],
    // Projekt
    // Ein Archiv packt aus.
    // TODO
    '/exhibits/show/ein-archiv-packt-aus': [
    ],
    // Projekt
    // Das Projekt.
    // TODO
    '/exhibits/show/projekt': [
    ],
    // / (homepage)
    'home-depot': [
        [
            {
                title: "Depot",
                image: "/files/square_thumbnails/be4c6e0770b719d88e6f7143694bc972.jpg",
                text: "",
                href: "/depot"
            }
        ]
    ],
    // Campus
    // Besondere Orte
    // TODO
    '/exhibits/show/besondere-orte': [
    ],
    // Campus
    // MEINE Kunst am Campus
    // TODO
    '/exhibits/show/kunst-am-campus': [
    ],
    // Campus
    // Die Stadt und die Uni
    // TODO
    '/exhibits/show/stadt-und-uni': [
    ],
    // Aussenwirkung
    // Fernliegend?
    // TODO
    '/exhibits/show/fernliegend': [
    ],
    // Aussenwirkung
    // Was war wichtig?
    // TODO
    '/exhibits/show/sonderbeilagen': [
    ],
    // Aussenwirkung
    // Das Logo
    // TODO
    '/exhibits/show/logo': [
    ],
    // Aussenwirkung
    // Born Digital
    // TODO
    '/exhibits/show/born-digital': [
    ],
    // /depot
    'home-depot-typen': [
        [
            {
                title: "Akte",
                image: "/files/square_thumbnails/5bdfbf5f28dcb7fef661137d60e7fa12.jpg",
                text: "",
                href: "/items/browse?tags=Akte"
            },
            {
                title: "Audio",
                image: "/files/square_thumbnails/5f7bcbdcca5727a8bf51ff6a0ed508ab.jpg",
                text: "",
                href: "/items/browse?tags=Audio"
            },
            {
                title: "Brief",
                image: "/files/square_thumbnails/ba0c9ef0f3aeaa86832d43a43e13e671.jpg",
                text: "",
                href: "/items/browse?tags=Brief"
            },
            {
                title: "Dokument",
                image: "/files/square_thumbnails/2f39545c9b72357853a60a343bf69ba8.jpg",
                text: "",
                href: "/items/browse?tags=Dokument"
            },
        ], [
            {
                title: "Foto",
                image: "/files/square_thumbnails/8ff0dfd0a0de22a11b92512d3a9f787e.jpg",
                text: "",
                href: "/items/browse?tags=Foto"
            },
            {
                title: "Grafik",
                image: "/files/square_thumbnails/e15faef3b89ce8c00958cfcf3543bc6a.jpg",
                text: "",
                href: "/items/browse?tags=Grafik"
            },
            {
                title: "Rechnung",
                image: "/files/square_thumbnails/938bb7a1871d20f3739962bc8931c354.jpg",
                text: "",
                href: "/items/browse?tags=Rechnung"
            },
            {
                title: "Objekt",
                image: "/files/square_thumbnails/04c6f183627beb9a9ca9e92ff282d9bc.jpg",
                text: "",
                href: "/items/browse?tags=Objekt"
            },
        ], [
            {
                title: "Transkription",
                image: "/files/square_thumbnails/3e37e29ecc150bf9173f17840c647d80.jpg",
                text: "",
                href: "/items/browse?tags=Transkription"
            },
            {
                title: "Urkunde",
                image: "/files/square_thumbnails/71087e69bf7058c3f8520a34c6d65c6c.jpg",
                text: "",
                href: "/items/browse?tags=Urkunde"
            },
            {
                title: "Verzeichnis",
                image: "/files/square_thumbnails/bf7ca0ac859f03742a0b3141ea6961b7.jpg",
                text: "",
                href: "/items/browse?tags=Verzeichnis"
            },
            {
                title: "Zeitung",
                image: "/files/square_thumbnails/87185bbdc6e7ca97284fbbcd04ebe87c.jpg",
                text: "",
                href: "/items/browse?tags=Zeitung"
            },
        ]
    ],
    // /depot
    'home-depot-themen': [
        [
            {
                title: "Digital",
                image: "/files/square_thumbnails/80c936323e3d9b2fba9e54f4b77ab755.jpg",
                text: "",
                href: "/items/browse?tags=Digital"
            },
            {
                title: "Hochschule",
                image: "/files/square_thumbnails/607cf9419e6211de29a9576db5277c04.jpg",
                text: "",
                href: "/items/browse?tags=Hochschule"
            },
            {
                title: "Jubiläum",
                image: "/files/square_thumbnails/e6b8ceb25350164be5d7ed97bfe15669.jpg",
                text: "",
                href: "/items/browse?tags=Jubiläum"
            },
            {
                title: "Kolleg",
                image: "",
                text: "",
                href: "/items/browse?tags=Kolleg"
            },
        ], [
            {
                title: "Kunst",
                image: "/files/square_thumbnails/7ef5ccf77c378b59f546640b3789f670.jpg",
                text: "",
                href: "/items/browse?tags=Kunst"
            },
            {
                title: "Logo",
                image: "/files/square_thumbnails/e414b46dbdfbbf136b4164dae238e76a.jpg",
                text: "",
                href: "/items/browse?tags=Logo"
            },
            {
                title: "Lyzeum",
                image: "/files/square_thumbnails/12529b04cc6ea929e282d9ac51b671b0.jpg",
                text: "",
                href: "/items/browse?tags=Lyzeum"
            },
            {
                title: "Oral History",
                image: "",
                text: "",
                href: "/items/browse?tags=Oral%20History"
            },
        ], [
            {
                title: "Orte",
                image: "/files/square_thumbnails/c78d1e776ccce0198f68cabc1fdd65a5.jpg",
                text: "",
                href: "/items/browse?tags=Orte"
            },
            {
                title: "Partner",
                image: "/files/square_thumbnails/d8de70f47296b25232786736b2e45ec4.jpg",
                text: "",
                href: "/items/browse?tags=Partner"
            },
            {
                title: "Passau",
                image: "/files/square_thumbnails/a8e0ca17a325a9b996e39964b8c81365.jpg",
                text: "",
                href: "/items/browse?tags=Passau"
            },
            {
                title: "Studierende",
                image: "/files/square_thumbnails/50228cf422d497773b8bffdc6350dc96.jpg",
                text: "",
                href: "/items/browse?tags=Studierende"
            }
        ]
    ]
}
