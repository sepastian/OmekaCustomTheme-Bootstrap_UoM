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
                    Inhalte<br>
                    Universität Passau<br>
                    Prof. Dr. Malte Rehbein<br>
                    Lehrstuhl für Digital Humanities<br>
                    94030 Passau<br>
                  </address>
                  <address>
                    Lehrstuhlkontakt<br>
                    Heidi Riederer<br>
                    Telefon: +49(0)851/509 – 3451<br>
                    Fax: +49(0)851/509 – 3452<br>
                    E-Mail: heidi.riederer(at)uni-passau.de<br>
                  </address>
                </div>
                <div class="col-sm-4 text-center">
                  <p class="text-center">
                    <a href="http://www.uni-passau.de/impressum/" target="blank">Impressum Uni Passau</a>
                  </p>
                  <p class="text-center">
                    <a href="http://www.uni-passau.de/datenschutzerklaerung/" target="blank">Datenschutzerklärung Uni Passau</a>
                  </p>
                  <p class="text-center">
                    Erstellt mit <a href="https://omeka.org">Omeka</a>.
                  </p>
                </div>
                <div class="col-sm-4 text-right">
                  <address>
                    Kontakt<br>
                    Universität Passau<br>
                    Lehrstuhl für Digital Humanities<br>
                    Dr.-Hans-Kapfinger-Straße 14 d<br>
                    94032 Passau<br>
                  </address>
                  <address>
                    Dr. Andrea Schilz<br>
                    Tel.: +49(0)851/509 – 3454<br>
                    E-Mail: andrea.schilz(at)uni-passau.de
                  </address>
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
      jQuery('.header').each(function(i,h){
        jQuery(h).on('click',function(e){
          console.log(jQuery(e).data('href'))
        })
      });
      });
    </script>

    <?php if (get_theme_option('Use Google Analytics') && $googleAccount = get_theme_option('Google Analytics Account')): ?>
    <?php echo common('analyticstracking.php', array('account' => $googleAccount)); ?>
    <?php endif; ?>
</body>
</html>
