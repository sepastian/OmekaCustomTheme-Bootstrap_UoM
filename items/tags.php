<?php
$pageTitle = __('Browse Items');
echo head(array(
    'title' => $pageTitle,
    'bodyid' => 'items',
    'bodyclass' => 'tags',
));
?>
<div id="primary">
    <div class="row page-header">
        <div class="col-xs-10 col-xs-offset-1">
            <h1><span class="glyphicon glyphicon-list"></span> <?php echo $pageTitle; ?> <small><span class="glyphicon glyphicon-tags"></span>Nach Tags</small></h1>
        </div>
    </div>
    <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
    <nav class="items-nav navigation secondary-nav">
        <?php echo public_nav_items()->setUlClass('nav nav-pills'); ?>
    </nav>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
    <?php
        asort($tags);
        echo tag_cloud($tags, url('items/browse'));
    ?>
    </div>
    </div>
</div><?php // end primary. ?>
<?php echo foot();
