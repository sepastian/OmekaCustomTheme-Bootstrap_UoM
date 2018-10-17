<?php
$title = metadata('simple_pages_page', 'title');
$bodyclass = 'page simple-page';
if ($is_home_page):
    $bodyclass .= ' simple-page-home';
endif;

echo head(array(
    'title' => $title,
    'bodyclass' => $bodyclass,
    'bodyid' => metadata('simple_pages_page', 'slug')
));
?>
<div id="primary">
    <?php // Don't duplicate the main breadcrumb, but set it if needed.
    if ($breadcrumb = get_theme_option('Display Breadcrumb Trail')):
        echo common('breadcrumb', array('title' => @$title, 'mode' => $breadcrumb));
    endif; ?>

    <?php if (!$is_home_page): ?>
    <div class="row page-header">
        <div class="col-xs-offset-1 col-xs-10">
            <h1><?php echo $simple_pages_page->title; ?></h1>
        </div>
    </div>
    <?php endif;
    ?>
    <div class="col-sm-10 col-sm-offset-1">
      <?php $text = metadata('simple_pages_page', 'text', array('no_escape' => true)); ?>
      <?php echo $this->shortcodes($text); ?>
    </div>
</div>
<?php echo foot();
