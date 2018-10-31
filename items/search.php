<?php
$pageTitle = __('Search Items');
echo head(array(
    'title' => $pageTitle,
    'bodyclass' => 'items advanced-search',
    'bodyid' => 'items',
));
?>
<div id="primary">
    <div class="row page-header">
        <div class="col-xs-10 col-xs-offset-1">
            <h1><span class="glyphicon glyphicon-search"></span> <?php echo $pageTitle; ?></h1>
        </div>
    </div>
    <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
    <nav class="items-nav navigation secondary-nav">
        <?php echo public_nav_items()->setUlClass('nav nav-pills'); ?>
    </nav>
    </div>
    </div>
    <br/>
    
    <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
    <?php echo $this->partial('items/search-form.php',
        array('formAttributes' =>
            array('id' => 'advanced-search-form'))); ?>
    </div>
    </div>
</div><?php // end primary. ?>
<?php echo foot();
