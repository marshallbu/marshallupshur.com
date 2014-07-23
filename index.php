<?php
/**
 * Some setup stuff to go back to the future of awesome
 */

try {
  require 'config/Config.php';
  $appConfig = new Config();
  $config = $appConfig->getConfig();

  if (isset($config['CONFIG']['APP_VERSION'])) {
    $version = $config['CONFIG']['APP_VERSION'];
  } else { 
    $version = '';
  }

  if (isset($config['CONFIG']['APP_ENVIRONMENT'])) {
    $environment = $config['CONFIG']['APP_ENVIRONMENT'];
  } else {
    $environment = '';
  }

} catch (Exception $e) {
  $version = '';
  $environment = '';
}

$dataMain = 'app/js/main';
if (!empty($environment) && $environment != 'development') {
  $dataMain = $dataMain . '.min';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Marshall Upshur - Hi!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <link rel="shortcut icon" href="favicon.ico">

  <!--[if lt IE 9]>
    <script src="assets/vendor/html5shiv/dist/html5shiv.js?v<?=$version?>"></script>
  <![endif]-->

  <link rel="resource" type="application/l10n" href="app/js/lib/pdf/locale/locale.properties?v<?=$version?>"/>

  <link rel="stylesheet" href="app/styles/css/main.css?v<?=$version?>">

  <!-- add modernizr here until I decide to no longer support IE8 -->
  <script src="app/js/lib/modernizr.custom.mbu.js?v<?=$version?>"></script>
</head>
    
<body data-spy="scroll" data-target=".navbar">
  <?php include_once "analyticstracking.php" ?>

  <header class="navbar navbar-fixed-top navbar-inverse" role="navigation" ng-controller="NavCtrl">
    <div class="container">

      <div class="navbar-header navbar-right">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mbu_main_navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand hidden-xs hidden-sm" href="/">Marshall Upshur</a>
        <a class="navbar-brand visible-xs visible-sm" href="/">mbu</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="mbu_main_navbar">
        <ul class="nav navbar-nav">
          <li><a href="#about" tabindex="0" class="scrollto" title="About">About</a></li>
          <li><a href="#creations" tabindex="0" class="scrollto" title="Creations">Creations</a></li>
          <li><a href="#resume" tabindex="0" class="scrollto" title="Resume">Resume</a></li>
          <li><a href="#blog" tabindex="0" class="scrollto" title="Blog">Blog</a></li>
          <li><a href="#photos" tabindex="0" class="scrollto" title="Photos">Photos</a></li>
          <li><a href="#" onclick="$('#contact-modal').modal('toggle'); return false;" tabindex="0" title="Contact">Contact</a></li>
          <li class="social"><a target="_self" href="http://www.linkedin.com/in/marshallupshur" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
          <li class="social"><a target="_self" href="http://twitter.com/mbuCreations" title="Twitter"><i class="fa fa-twitter"></i></a></li>
          <li class="social"><a target="_self" href="https://www.facebook.com/marshallbu" title="Facebook"><i class="fa fa-facebook"></i></a></li>
          <li class="social"><a target="_self" href="https://plus.google.com/116040772010267344237" title="Google+"><i class="fa fa-google-plus"></i></a></li>
          <li class="social"><a target="_self" href="https://github.com/marshallbu" title="github"><i class="fa fa-github-alt"></i></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->

    </div>
  </header>

  <div id="content">
    <div class="container">



      

      

      

      <!-- contact-modal -->
      <div id="contact-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 id="contact-modal-label">Contact Me!</h3>
            </div>

            <div class="modal-body">
              <p style="text-align: center;">Form still under construction.<br/>Just send an email to <strong><a href="mailto:me@marshallupshur.com?subject=Hi Marshall!" class="">me@marshallupshur.com</a></strong> for now!</p>
              <p class="hidden">Message <strong><a href="mailto:me@marshallupshur.com?subject=Hi Marshall!" class="">me@marshallupshur.com</a></strong> using the form below.</p>
              <p class="hidden">
                <label for="name">Name:</label>
                <input id="name" name="name" type="text" required>

                <label for="email">Email:</label>
                <input id="email" name="email" type="email" required>

                <label for="message">Message:</label>
                <textarea rows="3" id="message" name="message" required></textarea>
              </p>
            </div>

            <div class="modal-footer">
                <button class="btn btn-mbu" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-primary hidden">Send Message</button>
            </div>

          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div>

    </div>
  </div>

  <footer ng-controller="FooterCtrl">

    <div class="container">
      <p class="pull-left">
        <i class="fa fa-html5"></i>&nbsp;<i class="fa fa-css3"></i>&nbsp;<i class="fa fa-apple"></i><span class="site-version">version{{version}}</span>
      </p>
      <p class="pull-right">
        &copy;<?php echo date("Y",time()); ?> Marshall Upshur | <a href="http://mbucreations.com" tabindex="0" class="btn-link" target="_self" title="Go to mbu Creations">mbu Creations</a>
      </p>
    </div>
  </footer>

  <div id="tux-egg" data-direction="left" data-stop="75" data-start="-150" style="display:none;">
      <img src="app/img/t.png" />
  </div>



</body>

<script type="text/javascript">
    var require = {
        urlArgs : "v<?=$version?>"
    };
</script>
<script data-main="<?=$dataMain?>" src="assets/vendor/requirejs/require.js?v<?=$version?>"></script>
</html>