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
        if (! id || ! tile_sets[id]) {
            // If no CSS ID has been specified,
            // lookup tile set by pathname.
            id = location.pathname;
        }
        var tile_set = tile_sets[id],
            html = [];
        if (! tile_set || Object.keys(tile_set).length === 0) {
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
                if (Object.keys(tile).length === 0) {
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
    // Nav consists of:
    // NAV = ELEM
    // ELEM = { path: "", title: "", children: [ ELEM, ... ] }

    if (location.pathname == '/') {
        return
    }

    // Convert nav to flat list, depth first.
    var stack = [nav],
        list = [],
        position = 0,
        i = 0,
        html = [],
        ancestor_id = 0, // unique ID for each ancestor
        ancestors = {},
        current_exhibition = null;
    while (stack.length > 0) {
        var current = stack.pop()
        var children = (current.children || []).reverse();
        if (! current.ancestors) {
            // Root element has no ancestors;
            // other elements have list of ancestors, [0, 1, ...]
            current.ancestors = []
        }
        // Store current position.
        if (current.path == location.pathname) {
            position = i;
        }
        if (current.ancestors.length == 1) {
            current_exhibition = current
        }
        Object.assign(current, { predecessor: (list[list.length-1]||{}).path, exhibition: current_exhibition })
        delete(current.children)
        list.push(current)
        ancestors[ancestor_id] = current
        children.forEach(function(child){
            child.ancestors = current.ancestors.slice(0)
            child.ancestors.push(ancestor_id)
            stack.push(child)
        })
        ancestor_id += 1
        i += 1
    }

    // Render clickable dots with tooltips.
    var i = 0,
        tds = [];
    list.forEach(function(e) {
        // Display a separator between exhibitions.
        var separator = ""
        if (e.ancestors.length == 1) {
            separator = "<span class='separator'> | </span>"
        }
        // Display exhibition and title in tooltip.
        var title = e.title
        if (e.exhibition) {
            title = e.exhibition.title + " - " + title
        }
        var a = "<a href=" + e.path + " data-toggle='tooltip' data-placement='bottom' title='" + title + "'>"
        if (i == position) {
            tds.push("<td class='current " + ancestors + "'>" + separator + a + "<i class='fa fa-square'></i></a></td>")
        } else {
            tds.push("<td class='" + ancestors + "'>" + separator + a + "<i class='fa fa-square-o'></i></a></td>")
        }
        i += 1
    })
    html = html.concat(["<table class='dots'><tr>"].concat(tds).concat("</tr></table>"))

    // Breadcrumb.
    var current = list[position]
    var breadcrumb = "<ol class='breadcrumb'>"
    if (current.exhibition) {
        var e = current.exhibition
        breadcrumb += "<li><a href='/museum'>Museum</a></li>"
        breadcrumb += "<li><a href='" + e.path + "'>" + e.title + "</a></li>"
    }
    breadcrumb += "<li class='active'>" + current.title + "</li></ol>"
    html = html.concat("<div>").concat(breadcrumb).concat("</div>")

    // Render back/current/forward text and buttons.
    var back = ""
    if (position > 0) {
        back = "<i class='fa fa-arrow-left arrow'></i>"
        var e = list[position-1]
        var title = "<span> " + e.title + "</span>"
        back = '<a class="btn btn-default btn-sm" href="' + e.path + '">' + back + title + "</a>"
    }
    var forward = ""
    if (position < list.length - 1) {
        forward = "<i class='fa fa-arrow-right arrow'></i>"
        var e = list[position+1]
        var title = "<span> " + e.title + " </span>"
        forward = '<a class="btn btn-default btn-sm" href="' + e.path + '">' + title + forward + "</a>"
    }
    var buttons = ["<table class='links'><tr><td class='first'>", back, '</td><td class="last">', forward,"</tr></table>"]
    html = html.concat(buttons)

    // Enclose nav within <div>.
    html = ["<div class='up40-nav'>"].concat(html).concat("</div>")
    jQuery('.up40-nav').replaceWith(html.join(''))
    buttons = ["<div class='up40-nav'>"].concat(buttons).concat("</div>")
    jQuery('.up40-nav-buttons').replaceWith(buttons.join(''))

    // Enable tooltips.
    jQuery('[data-toggle="tooltip"]').tooltip()
}
