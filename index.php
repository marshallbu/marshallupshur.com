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
                      <li><a href="#about" tabindex="0" class="scrollto">About</a></li>
                      <li><a href="#creations" tabindex="0" class="scrollto">Creations</a></li>
                      <li><a href="#resume" tabindex="0" class="scrollto">Resume</a></li>
                      <li><a href="#blog" tabindex="0" class="scrollto">Blog</a></li>
                      <li><a href="#photos" tabindex="0" class="scrollto">Photos</a></li>
                      <li><a href="#" onclick="$('#contact-modal').modal('toggle'); return false;" tabindex="0">Contact</a></li>
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
                  <a class="carousel-control left" href="#creations-slider" data-slide="prev">&lsaquo;</a>
                  <a class="carousel-control right" href="#creations-slider" data-slide="next">&rsaquo;</a>
              </div>
          </div>
          <p style="text-align: center;"><a href="http://mbucreations.com/portfolio" target="_self" class="btn btn-primary btn-large btn-link">mbu Creations portfolio</a></p>
      </section>

      <section id="resume">
          <div class="page-header">
              <h1>Resume <small>a summary of experience</small></h1>
          </div>
          <div class="resume-view-container" ng-controller="ResumeCtrl">
            <div class="section-loader" ng-hide="showResumeContainer"></div>
            <div id="resume-view" class="hidden-phone" ng-show="showResumeContainer" style="display: none;">

              <div id="outerContainer" class="loadingInProgress">

                <div id="sidebarContainer">
                  <div id="toolbarSidebar">
                    <div class="splitToolbarButton toggled">
                      <button id="viewThumbnail" class="toolbarButton group toggled" title="Show Thumbnails" tabindex="2" data-l10n-id="thumbs">
                         <span data-l10n-id="thumbs_label">Thumbnails</span>
                      </button>
                      <button id="viewOutline" class="toolbarButton group" title="Show Document Outline" tabindex="3" data-l10n-id="outline">
                         <span data-l10n-id="outline_label">Document Outline</span>
                      </button>
                    </div>
                  </div>
                  <div id="sidebarContent">
                    <div id="thumbnailView">
                    </div>
                    <div id="outlineView" class="hidden">
                    </div>
                  </div>
                </div>  <!-- sidebarContainer -->

                <div id="mainContainer">
                  <div class="findbar hidden doorHanger hiddenSmallView" id="findbar">
                    <label for="findInput" class="toolbarLabel" data-l10n-id="find_label">Find:</label>
                    <input id="findInput" class="toolbarField" tabindex="21">
                    <div class="splitToolbarButton">
                      <button class="toolbarButton findPrevious" title="" id="findPrevious" tabindex="22" data-l10n-id="find_previous">
                        <span data-l10n-id="find_previous_label">Previous</span>
                      </button>
                      <div class="splitToolbarButtonSeparator"></div>
                      <button class="toolbarButton findNext" title="" id="findNext" tabindex="23" data-l10n-id="find_next">
                        <span data-l10n-id="find_next_label">Next</span>
                      </button>
                    </div>
                    <input type="checkbox" id="findHighlightAll" class="toolbarField">
                    <label for="findHighlightAll" class="toolbarLabel" tabindex="24" data-l10n-id="find_highlight">Highlight all</label>
                    <input type="checkbox" id="findMatchCase" class="toolbarField">
                    <label for="findMatchCase" class="toolbarLabel" tabindex="25" data-l10n-id="find_match_case_label">Match case</label>
                    <span id="findMsg" class="toolbarLabel"></span>
                  </div>
                  <div class="toolbar">
                    <div id="toolbarContainer">
                      <div id="toolbarViewer">
                        <div id="toolbarViewerLeft">
                          <button id="sidebarToggle" class="toolbarButton" title="Toggle Sidebar" tabindex="4" data-l10n-id="toggle_sidebar">
                            <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                          </button>
                          <div class="toolbarButtonSpacer"></div>
                          <button id="viewFind" class="toolbarButton group hiddenSmallView" title="Find in Document" tabindex="5" data-l10n-id="findbar">
                             <span data-l10n-id="findbar_label">Find</span>
                          </button>
                          <div class="splitToolbarButton">
                            <button class="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="6" data-l10n-id="previous">
                              <span data-l10n-id="previous_label">Previous</span>
                            </button>
                            <div class="splitToolbarButtonSeparator"></div>
                            <button class="toolbarButton pageDown" title="Next Page" id="next" tabindex="7" data-l10n-id="next">
                              <span data-l10n-id="next_label">Next</span>
                            </button>
                          </div>
                          <label id="pageNumberLabel" class="toolbarLabel hide" for="pageNumber" data-l10n-id="page_label">Page: </label>
                          <input type="number" id="pageNumber" class="toolbarField pageNumber" style="display: none;" value="1" size="4" min="1" tabindex="8">
                          </input>
                          <span id="numPages" class="toolbarLabel hide"></span>
                        </div>
                        <div id="toolbarViewerRight">
                          <input id="fileInput" class="fileInput" type="file" oncontextmenu="return false;" style="visibility: hidden; position: fixed; right: 0; top: 0" />

                          <button id="presentationMode" class="toolbarButton presentationMode hiddenSmallView" title="Switch to Presentation Mode" tabindex="12" data-l10n-id="presentation_mode">
                            <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                          </button>

                          <button id="openFile" class="toolbarButton openFile hiddenSmallView hide" title="Open File" tabindex="13" data-l10n-id="open_file">
                             <span data-l10n-id="open_file_label">Open</span>
                          </button>

                          <button id="print" class="toolbarButton print" title="Print" tabindex="14" data-l10n-id="print">
                            <span data-l10n-id="print_label">Print</span>
                          </button>

                          <button id="download" class="toolbarButton download" title="Download" tabindex="15" data-l10n-id="download">
                            <span data-l10n-id="download_label">Download</span>
                          </button>
                          <!-- <div class="toolbarButtonSpacer"></div> -->
                          <a href="#" id="viewBookmark" class="toolbarButton bookmark hiddenSmallView hide" title="Current view (copy or open in new window)" tabindex="16" data-l10n-id="bookmark"><span data-l10n-id="bookmark_label">Current View</span></a>
                        </div>
                        <div class="outerCenter">
                          <div class="innerCenter" id="toolbarViewerMiddle">
                            <div class="splitToolbarButton">
                              <button id="zoomOut" class="toolbarButton zoomOut" title="Zoom Out" tabindex="9" data-l10n-id="zoom_out">
                                <span data-l10n-id="zoom_out_label">Zoom Out</span>
                              </button>
                              <div class="splitToolbarButtonSeparator"></div>
                              <button id="zoomIn" class="toolbarButton zoomIn" title="Zoom In" tabindex="10" data-l10n-id="zoom_in">
                                <span data-l10n-id="zoom_in_label">Zoom In</span>
                               </button>
                            </div>
                            <span id="scaleSelectContainer" class="dropdownToolbarButton">
                               <select id="scaleSelect" title="Zoom" oncontextmenu="return false;" tabindex="11" data-l10n-id="zoom">
                                <option id="pageAutoOption" value="auto" selected="selected" data-l10n-id="page_scale_auto">Automatic Zoom</option>
                                <option id="pageActualOption" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                                <option id="pageFitOption" value="page-fit" data-l10n-id="page_scale_fit">Fit Page</option>
                                <option id="pageWidthOption" value="page-width" data-l10n-id="page_scale_width">Full Width</option>
                                <option id="customScaleOption" value="custom"></option>
                                <option value="0.5">50%</option>
                                <option value="0.75">75%</option>
                                <option value="1">100%</option>
                                <option value="1.25">125%</option>
                                <option value="1.5">150%</option>
                                <option value="2">200%</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="loadingBar">
                        <div class="progress">
                          <div class="glimmer">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <menu type="context" id="viewerContextMenu">
                    <menuitem id="firstPage" label="First Page"
                              data-l10n-id="first_page" ></menuitem>
                    <menuitem id="lastPage" label="Last Page"
                              data-l10n-id="last_page" ></menuitem>
                    <menuitem id="pageRotateCcw" label="Rotate Counter-Clockwise"
                              data-l10n-id="page_rotate_ccw" ></menuitem>
                    <menuitem id="pageRotateCw" label="Rotate Clockwise"
                              data-l10n-id="page_rotate_cw" ></menuitem>
                  </menu>

                  <div id="viewerContainer">
                    <div id="viewer" contextmenu="viewerContextMenu"></div>
                  </div>

                  <div id="errorWrapper" hidden='true'>
                    <div id="errorMessageLeft">
                      <span id="errorMessage"></span>
                      <button id="errorShowMore" onclick="" oncontextmenu="return false;" data-l10n-id="error_more_info">
                        More Information
                      </button>
                      <button id="errorShowLess" onclick="" oncontextmenu="return false;" data-l10n-id="error_less_info" hidden='true'>
                        Less Information
                      </button>
                    </div>
                    <div id="errorMessageRight">
                      <button id="errorClose" oncontextmenu="return false;" data-l10n-id="error_close">
                        Close
                      </button>
                    </div>
                    <div class="clearBoth"></div>
                    <textarea id="errorMoreInfo" hidden='true' readonly="readonly"></textarea>
                  </div>
                </div> <!-- mainContainer -->

              </div> <!-- outerContainer -->
              <div id="printContainer"></div>

            </div> <!-- resume-view -->
          </div> <!-- resume-view-container -->
          <p style="text-align: center;"><a href="fs/Marshall_Upshur_2013a.pdf" target="_blank" class="btn btn-primary btn-large btn-link">download PDF resume</a></p>
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
                  <p class="controls"><a href="{{feed.link}}" class="btn btn-small btn-mbu">View post <i class="icon-double-angle-right"></i></a></p>
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
          <p style="text-align: center;"><a href="http://photos.marshallupshur.com" target="_self" class="btn btn-primary btn-large btn-link">view more of my photos</a></p>
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
        &copy;<?php echo date("Y",time()); ?> Marshall Upshur | <a href="http://mbucreations.com" class="btn-link" target="_self">mbu Creations</a>
      </p>
    </div>
  </footer>

  <div id="tux-egg" data-direction="left" data-stop="75" data-start="-150" style="display:none;">
      <img src="/images/t.png" />
  </div>

</body>

<script data-main="js/main" src="assets/vendor/requirejs/require.js"></script>
    
</html>