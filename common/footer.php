              <div class="col-sm-10 col-sm-offset-1">
                <div class="up40-nav-buttons"></div>
              </div>


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
              <div class="col-sm-offset-1 col-sm-10">
                <!--
                <div class="col-sm-9">
                    <?php if ((get_theme_option('Display Footer Copyright') == 1) && $copyright = option('copyright')): ?>
                        <p><?php echo $copyright; ?></p>
                    <?php endif; ?>
                </div>
                -->
                <div class="col-sm-4 text-left">
                  <address>
                    Kontakt<br>
                    Universität Passau<br>
                    <a href="http://www.phil.uni-passau.de/dh/">Lehrstuhl für Digital Humanities</a><br>
                    Dr.-Hans-Kapfinger-Straße 14 d<br>
                    94032 Passau<br>
                  </address>
                </div>
                <div class="col-sm-4 text-center">
                </div>
                <div class="col-sm-4 text-right">
                  <a href="http://www.uni-passau.de/impressum/" target="blank">Impressum</a>
                  <br>
                  <a href="http://www.uni-passau.de/datenschutzerklaerung/" target="blank">Datenschutzerklärung</a>
                  <br>
                  <a href="/exhibits/show/projekt/">Über das Projekt</a>
                  <br>
                  Erstellt mit <a href="https://omeka.org">Omeka</a>.
                </div>
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

        // Load 3D models, if present.
        var containers = jQuery('.threejs');
        if (containers.length > 0) {
            load_3d_model(containers[0]);
        }

      // Inject tiles into current page,
      // replacing placeholders with class '.up40-tile-set'.
      inject_tile_sets(jQuery('.up40-tile-set'));
      inject_nav();
      });
    </script>

    <?php if (get_theme_option('Use Google Analytics') && $googleAccount = get_theme_option('Google Analytics Account')): ?>
    <?php echo common('analyticstracking.php', array('account' => $googleAccount)); ?>
    <?php endif; ?>
</body>
</html>
