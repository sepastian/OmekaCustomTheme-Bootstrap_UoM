<?php
$title = metadata('exhibit_page', 'title');
echo head(array(
    'title' => $title . ' &middot; ' . metadata('exhibit', 'title'),
    'bodyclass' => 'exhibits show',
));
?>
<div class="primary">
  <div class="row page-header">
    <div class="col-xs-10 col-xs-offset-1">
      <h1><span class="glyphicon glyphicon-eye-open"></span> <?php echo $title; ?></h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-offset-1 col-sm-10">
      <div id="exhibit-blocks" role="main">
        <?php exhibit_builder_render_exhibit_page(); ?>
      </div>
      <!--
      <nav class="pager" id="exhibit-page-navigation">
        <?php if ($prevLink = exhibit_builder_link_to_previous_page()): ?>
        <div id="exhibit-nav-prev" class="previous">
          <?php echo $prevLink; ?>
        </div>
        <?php endif; ?>
        <?php if ($nextLink = exhibit_builder_link_to_next_page()): ?>
        <div id="exhibit-nav-next" class="next">
          <?php echo $nextLink; ?>
        </div>
        <?php endif; ?>
        <div id="exhibit-nav-up">
          <?php echo exhibit_builder_page_trail(); ?>
        </div>
      </nav>
      -->
    </div>
  </div>
</div>
<?php echo foot();
