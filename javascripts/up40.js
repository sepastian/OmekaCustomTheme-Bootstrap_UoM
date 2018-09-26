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
        var id = jQuery(e).attr('id')
        var tile_set = tile_sets[id]
        var html = []
        // Transfer classes of placeholder element to newly created table.
        html.push('<table class="' + jQuery(e).attr('class') + '">')
        tile_set.forEach(function(tiles) {
            var tile_width = Math.floor(100/tiles.length)
            html.push("<tr>")
            tiles.forEach(function(tile) {
                var css_bg_image = 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url("' + tile.image + '")'
                html.push('<td style="width:' + tile_width + '%;">')
                html.push('<div class="up40-tile" style=\'background-image:' + css_bg_image + '\'>')
                html.push('<div class="header">')
                html.push('<a href="' + tile.href + '">' + tile.title + "</a>")
                html.push('</div>')
                html.push('</div>')
                html.push('</td>')
            })
            html.push("</tr>")
        })
        html.push('</table>')
        console.log(html.join('\n'))
        jQuery(e).replaceWith(html.join(''))
    })
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
        ],[
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
            },
            {
                title: "Spiegel der Hochschulgeschichte",
                image: "/files/square_thumbnails/688550b26d959134207dfecec6ada8d2.jpg",
                text: "",
                href: "/exhibits/show/spiegel_hochschulgeschichte"
            },
            {
                title: "Warum Passau?",
                image: "/files/square_thumbnails/110f5bd92997fd7bdb17324ee905e30b.jpg",
                text: "",
                href: "/exhibits/show/warum-passau"
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
    // /studentenschaft
    'home-museum-studentenschaft': [
        [
            {
                title: "Studentenleben im 19. Jahrhundert",
                image: "/files/square_thumbnails/df9110be9395bfc8c8e4f6e8e327c397.jpg",
                text: "",
                href: "/exhibits/show/studentenleben_19jahrhundert"
            },
            {
                title: "Paul Esterl - Ein Student vor 180 Jahren",
                image: "/files/square_thumbnails/057b342a5bec039889c3fbc6c022c244.jpg",
                text: "",
                href: "/exhibits/show/paul-esterl"
            },
            {
                title: "Die Weltkriege, die Studenten",
                image: "/files/square_thumbnails/2f39545c9b72357853a60a343bf69ba8.jpg",
                text: "",
                href: "/exhibits/show/weltkriege-studenten"
            }

        ]
    ],
    // /aussenwirkung
    'home-museum-aussenwirkung': [
        [
            {
                title: "Fernliegend?",
                image: "",
                text: "",
                href: "/exhibits/show/fernliegend"
            },
            {
                title: "Was war wichtig?",
                image: "",
                text: "",
                href: "/exhibits/show/sonderbeilagen"
            }
        ],
        [
            {
                title: "Das Logo",
                image: "",
                text: "",
                href: "/exhibits/show/logo"
            },
            {
                title: "Born Digital",
                image: "",
                text: "",
                href: "/exhibits/show/born-digital"
            }
        ]
    ],
    // /campus
    'home-museum-campus': [
        [
            {
                title: "Besondere Orte",
                image: "",
                text: "",
                href: "/exhibits/show/besondere-orte"
            },
            {
                title: "MEINE Kunst am Campus",
                image: "",
                text: "",
                href: "/exhibits/show/kunst-am-campus"
            },
            {
                title: "Die Stadt und die Uni",
                image: "",
                text: "",
                href: "/exhibits/show/stadt-und-uni"
            }
        ]
    ],
    // /projekt
    'home-museum-projekt': [
        [
            {
                title: "Das Projekt",
                image: "",
                text: "",
                href: "/exhibits/show/projekt"
            },
            {
                title: "Ein Archiv packt aus",
                image: "",
                text: "",
                href: "/exhibits/show/ein-archiv-packt-aus"
            }
        ]
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
        ],[
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
        ],[
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
        ],[
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
        ],[
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
