<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Marshall Upshur - Hi!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">

  <link href="styles/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
  <style type="text/css">

  </style>
  <link href="styles/css/bootstrap-responsive.min.css" rel="stylesheet">
  <!--[if lt IE 9]>
    <script src="assets/vendor/html5shiv/dist/html5shiv.js"></script>
  <![endif]-->

  <link rel="resource" type="application/l10n" href="js/lib/pdf/locale/locale.properties"/>

  <link href="styles/css/main.css" rel="stylesheet">

  <link rel="shortcut icon" href="favicon.ico">

  <!-- add modernizr here until I decide to no longer support IE8 -->
  <script src="js/lib/modernizr.custom.mbu.js"></script>
</head>
    
<body data-spy="scroll" data-target=".navbar">
  <?php include_once "analyticstracking.php" ?>

  <div id="navigation" class="navbar navbar-fixed-top navbar-inverse" ng-controller="NavCtrl">
      <div class="navbar-inner">
          <div class="container-fluid">

              <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </a>

              <a class="brand hidden-phone" href="/">Marshall Upshur</a>
              <a class="brand visible-phone" href="/">MBU</a>

              <div class="nav-collapse">
                  <ul class="nav">
                      <li><a href="#about" tabindex="0" class="scrollto" title="About">About</a></li>
                      <li><a href="#creations" tabindex="0" class="scrollto" title="Creations">Creations</a></li>
                      <li><a href="#resume" tabindex="0" class="scrollto" title="Resume">Resume</a></li>
                      <li><a href="#blog" tabindex="0" class="scrollto" title="Blog">Blog</a></li>
                      <li><a href="#photos" tabindex="0" class="scrollto" title="Photos">Photos</a></li>
                      <li><a href="#" onclick="$('#contact-modal').modal('toggle'); return false;" tabindex="0" title="Contact">Contact</a></li>
                      <li class="social"><a target="_self" href="http://www.linkedin.com/in/marshallupshur" title="LinkedIn"><i class="icon-linkedin-sign"></i></a></li>
                      <li class="social"><a target="_self" href="http://twitter.com/mbuCreations" title="Twitter"><i class="icon-twitter-sign"></i></a></li>
                      <li class="social"><a target="_self" href="https://www.facebook.com/marshallbu" title="Facebook"><i class="icon-facebook-sign"></i></a></li>
                      <li class="social"><a target="_self" href="https://plus.google.com/116040772010267344237" title="Google+"><i class="icon-google-plus-sign"></i></a></li>
                      <li class="social"><a target="_self" href="https://github.com/marshallbu" title="github"><i class="icon-github-sign"></i></a></li>

                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div id="page" class="container-fluid">
      <section id="about" class="hero-unit main">
          <div class="page-header">
              <h1>Marshall Upshur <small>in a nutshell</small></h1>
          </div>
          <p class="portrait pull-right">

          </p>
          <p><span id="hello-world">Hello world!</span> My name's Marshall and I'm a progressive web technologist, focused on creating beautiful, easy to use goal oriented web applications using cutting edge technologies best suited for the job. I have a people-based personality, which allows me to foster positive working relationships and collaborations with my peers, increase the overall productivity of my working environment, and encourage cross-team collaboration in an effort to maximize workload output.</p>

          <p>Combining the forces of education obtained at Georgia Institute of Technology and Southern Polytechnic University with over 10 years of experience gained from employment both in the higher education and consumer sectors, I have gained a broad range of knowledge over the years on both the front and back end of the web. I'm self-sufficient, highly capable of attacking technical problems at all levels, while also being a great team player and people person.</p>

          <p class="hidden">Marshall has the advantage of a brilliant arsenal of knowledge and skill aided by his own creativity and unique eye. He is always on the side of cutting edge looking for the next and newest media and technological advances. On a personal note, Marshall is not all keyboards and CPUs. His creativity manifests itself in his sense of style along his choice in companions of the pet variety. Marshall owns two Boston Terriers, Tuxedo and Cognac, and a ball python named Akasha. This motley crew makes for fun times outside of the office and helps fuel his artistic side. This love for family and great care for his pets helps people connect with him and not just see him as a technological robot with amazing computer capabilities.</p>

          <p>Find out more about me, stuff I've worked (and am currently working) on, and some of my hobbies below.</p>

          <p>Thanks for visiting!</p>
      </section>

      <section id="creations">
          <div class="page-header">
              <h1>Creations <small>think it. dream it. create it.</small></h1>
          </div>
          <p class="lead match-view">Along with some of the cool stuff I work on at work, I do projects on the side to keep my healthy appetite for latest technology and trends up to date.  Check some of these out below and by going to my portfolio.</p>
          <div class="creations-slider-container">
              <div id="creations-slider" class="carousel slide">
                  <!-- Carousel items -->
                  <div class="carousel-inner">
                      <?php
                          $baseDir = "./";
                          $dir = "images/port/";
                          $portsDir = scandir($baseDir.$dir);
                          $first = true;
                          foreach ($portsDir as $key => $value) {
                              if (!in_array($value,array(".",".."))) {
                                  if ($first) {
                                      echo "<div class=\"item active\"><img alt=\"\" src=\"$dir$value\"></div>";
                                      $first = false;
                                  } else {
                                      echo "<div class=\"item\"><img alt=\"\" src=\"$dir$value\"></div>";
                                  }
                              }
                          }
                      ?>
                  </div>
                  <!-- Carousel nav -->
                  <a class="carousel-control left" href="#creations-slider" data-slide="prev" title="Previous Slide" tabindex="0">&lsaquo;</a>
                  <a class="carousel-control right" href="#creations-slider" data-slide="next" title="Next Slide" tabindex="0">&rsaquo;</a>
              </div>
          </div>
          <p style="text-align: center;"><a href="http://mbucreations.com/portfolio" target="_self" tabindex="0" class="btn btn-primary btn-large btn-link" title="mbu Creations Portfolio">mbu Creations portfolio</a></p>
      </section>

      <section id="resume">
          <div class="page-header">
              <h1>Resume <small>a summary of experience</small></h1>
          </div>
          <div class="resume-view-container" ng-controller="ResumeCtrl">
            <div class="section-loader" ng-hide="showResumeContainer"></div>
            <div id="resume-view" class="hidden-phone" ng-show="showResumeContainer" style="display: none;">

              <?php include_once "templates/resume_template.php" ?>

            </div> <!-- resume-view -->
          </div> <!-- resume-view-container -->
          <p style="text-align: center;"><a href="fs/Marshall_Upshur_2013a.pdf" target="_blank" tabindex="0" class="btn btn-primary btn-large btn-link" title="Download Marshall Upshur's Resume">download PDF resume</a></p>
      </section>

      <section id="blog">
          <div class="page-header">
              <h1>Blog <small>ramblings of a geek</small></h1>
          </div>
          <div class="blog-updates-container" ng-controller="FeedCtrl">
            <div class="span12 section-loader" ng-hide="feeds.length > 0"></div>
            <div class="row-fluid">
              <div ng-repeat="feed in feeds" class="span4">
                <div class="post">
                  <h4 class="title">{{feed.title}}</h4>
                  <p class="meta"><small>{{feed.publishedDateObject | date:'MM/dd/yyyy @ h:mma'}}</small></p>
                  <p class="text">{{feed.contentSnippet}}</p>
                  <p class="controls"><a href="{{feed.link}}" tabindex="0" class="btn btn-small btn-mbu" title="View blog post titled {{feed.title}}">View post <i class="icon-double-angle-right"></i></a></p>
                </div>
              </div>
            </div>

          </div>
      </section>

      <section id="photos">
          <div class="page-header">
              <h1>Photos <small>some of the world through my eyes</small></h1>
          </div>
          <div class="photos-player-container" ng-controller="PhotosCtrl">
              <div class="photos-player">
                  <div id="album-7"></div>
              </div>
          </div>
          <p style="text-align: center;"><a href="http://photos.marshallupshur.com" target="_self" tabindex="0" class="btn btn-primary btn-large btn-link" title="View more photos">view more of my photos</a></p>
      </section>

      <!-- contact-modal -->
      <div id="contact-modal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
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
              <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
              <button class="btn btn-primary hidden">Send Message</button>
          </div>
      </div>
  </div>

  <footer ng-controller="FooterCtrl">

    <div class="container-fluid">
      <p class="pull-left">
        <i class="icon-html5"></i>&nbsp;<i class="icon-css3"></i><span class="site-version">version{{version}}</span>
      </p>
      <p class="pull-right">
        &copy;<?php echo date("Y",time()); ?> Marshall Upshur | <a href="http://mbucreations.com" tabindex="0" class="btn-link" target="_self" title="Go to mbu Creations">mbu Creations</a>
      </p>
    </div>
  </footer>

  <div id="tux-egg" data-direction="left" data-stop="75" data-start="-150" style="display:none;">
      <img src="/images/t.png" />
  </div>

</body>

<script data-main="js/main" src="assets/vendor/requirejs/require.js"></script>
    
</html>