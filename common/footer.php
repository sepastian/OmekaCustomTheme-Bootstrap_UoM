        </div><!-- end content -->
        <footer>
            <div class="row">
                <div id="footer-text" class="col-sm-9">
                    <?php if ( $footerText = get_theme_option('Footer Text') ): ?>
                    <p><?php echo $footerText; ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="row">
                <!--
                <div class="col-sm-9">
                    <?php if ((get_theme_option('Display Footer Copyright') == 1) && $copyright = option('copyright')): ?>
                        <p><?php echo $copyright; ?></p>
                    <?php endif; ?>
                </div>
                -->
                <div class="col-sm-4">
                  <a href="/impressum">Impressum</a>
                </div>
                <div class="col-sm-4">
                  <p class="text-center">
                    <a href="/datenschutzerklaerung">Datenschutzerklärung</a>
                  </p>
                </div>
                <div class="col-sm-4">
                    <p class="text-right omeka-props-footer text-right"><?php echo __('Erstellt mit <a href="https://omeka.org">Omeka</a>.'); ?></p>
                </div>
            </div>
            <div>
                <?php fire_plugin_hook('public_footer'); ?>
            </div>
        </footer>
</div><!--end wrap-->

    <?php
    // Omeka 2.4 and Bootstrap 3.3.7 use the same jQuery (1.12), so it is not
    // recalled.
    ?>
    <?php if (get_theme_option('Use Internal Bootstrap')) :?>
    <script src="<?php echo src('bootstrap.min', 'javascripts', 'js'); ?>"></script>
    <?php else: ?>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <?php endif; ?>

    <?php
    if (is_current_url('/')):
        $displayGridRotator = (boolean) get_theme_option('Display Grid Rotator');
        if ($displayGridRotator):
            echo js_tag('modernizr-custom');
            echo js_tag('jquery.gridrotator');
        endif;
    else:
        $displayGridRotator = false;
    endif;
    ?>

     <script type="text/javascript">
    jQuery(document).ready(function () {
        <?php if (get_theme_option('Use Advanced Search')): ?>
        /*Omeka.showAdvancedForm();*/
        <?php endif; ?>
        /*Omeka.dropDown();*/
        <?php if ($displayGridRotator): ?>
        /*Omeka.displayGridRotator();*/
        <?php endif; ?>
        /*
        jQuery('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          gutter: 0
        })
        */
        /* Set background on tiles. */
        // Use ID of each .tile-with-text
        // as a key to background image in tiles.
        jQuery('.tile-with-text').each(function(i,e) {
          var key = jQuery(e).attr('id').replace(/^tile-with-text--/,'');
          var url = tiles[key];
          var css = "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))," + 'url("' + tiles[key] + '")';
          jQuery(e).css('background-image', css);
        });
    });
    </script>

    <?php if (get_theme_option('Use Google Analytics') && $googleAccount = get_theme_option('Google Analytics Account')): ?>
    <?php echo common('analyticstracking.php', array('account' => $googleAccount)); ?>
    <?php endif; ?>
</body>
</html>
