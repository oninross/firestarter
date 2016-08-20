<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main">
	<section class="container">
		  <article>

<h2><a id="Leg_Godt_Builder_0"></a>Firestarter</h2>
<h3><a id="Introduction_2"></a>Introduction</h3>
<p><strong>Firestarter</strong> is a simple out of the box front-end templating base used for building new websites created and maintained by Nino Ross Rodriguez.  Firestarter is not to compete with other frameworks, but more on to provide a very easy and structured framework for any developer to use.  If you don’t want to use any of the available features in the build, you can easily just remove the files that you don’t need.  No need to go down to code level and find the lines of code.  It would be as easy as <code>right click &gt; delete</code>.</p>
<p>To get started, jump to <a href="#setup">setup</a>.</p>
<h3><a id="Browser_Compatibility_7"></a>Browser Compatibility</h3>
<ul>
<li>Chrome (Windows / Mac OS)</li>
<li>FireFox (Windows / Mac OS)</li>
<li>Safari (Mac OS)</li>
<li>Internet Explorer 8+ (Windows)</li>
</ul>
<h3><a id="Features_13"></a>Features</h3>
<ul>
<li>Full <strong>mobile first responsive framework</strong></li>
<li>Awesome mobile menu</li>
<li>Responsive tables
<ul>
<li>Responsive Tables plugin to open in new tab.  Simple solution to show large tables on small devices.</li>
<li>Ability to swipe left/right on mobile device for long tables</li>
</ul>
</li>
<li>IE9 Placeholder fallback</li>
<li>Uses Grunt to automate compiling into a folder for easy deployment
<ul>
<li>“Watches” your development folder and auto-reloads your browser so you don’t have to refresh your window every time</li>
<li>Concatenates and minifies all CSS and JS files</li>
<li>Compresses images</li>
</ul>
</li>
<li>Available standard content to quickly visualize any kind of content</li>
<li>Lazy loading images and background images (uses <a href="https://github.com/tuupola/jquery_lazyload">jQuery_lazyload</a> )
<ul>
<li>Dynamically add background images meant to have <code>background: cover</code> property, without hard coding in CSS</li>
</ul>
</li>
<li>Material Design Components</li>
</ul>
<h3><a id="Release_History_29"></a>Release History</h3>
<p><code>v0.0.0</code> - Your simple straight-forward base boilerplate for your next project</p>
<h3><a id="Dependencies_32"></a>Dependencies</h3>
<h4><a id="Grunt_Javascript_Task_Runner_33"></a>Grunt Javascript Task Runner</h4>
<p>If you haven’t used <a href="http://gruntjs.com/">Grunt</a> before, be sure to check out the <a href="http://gruntjs.com/getting-started">Getting Started</a> guide, as it explains how to create a <a href="http://gruntjs.com/sample-gruntfile"><code>gruntfile.js</code></a> as well as install and use Grunt plugins. Once you’re familiar with that process, you may use Grunt commands to compile your project.</p>
<h4><a id="SASS_36"></a>SASS</h4>
<p>If you haven’t used <a href="http://sass-lang.com/">SASS</a> before, be sure to have a read on how to get SASS on your local machine in their <a href="http://sass-lang.com/install">installation guide</a> as it will explain how to write your CSS in SASS.  The boilerplate is written in SASS and will be compiled by Grunt</p>
<h4><a id="Local_PHP_Server_39"></a>Local PHP Server</h4>
<p><strong>Note:</strong> You must set the document root in your Local PHP Server to the <code>dist</code> folder of the project for you to view it in a browser.  You can do this by editing the <code>httpd.conf</code> file. See the example below:</p>
<pre><code>DocumentRoot &quot;C:\xampp\htdocs\leggodt\dist&quot;
&lt;Directory &quot;C:\xampp\htdocs\leggodt\dist&quot;&gt;
</code></pre>
<h4><a id="GreenSock_TweenMax_and_TimeLineMax_optional_46"></a>GreenSock TweenMax and TimeLineMax <em>(optional)</em></h4>
<p>For the cool menu animation.  The files already included in the framework.  If you want to read more about TweenMax, you can check it out their <a href="http://http://greensock.com/">website</a>.</p>
<h4><a id="LiveReload_optional_49"></a>LiveReload <em>(optional)</em></h4>
<p>It will make your life a whole lot easier once you enable this in your browser.  No more <code>CTRL + F5</code> every time you make a change in your codes.  Download the extension and install it in your preferred browser.</p>
<h3><a id="Setup_52"></a>Setup</h3>
<p>Provided that you have <a href="http://gruntjs.com/">Grunt</a> and <a href="https://www.ruby-lang.org/en/">Ruby</a> installed in your system, follow the steps to get started with your project.</p>
<ol>
<li>
<p>Open <code>package.json</code> file and change <code>leggodt</code> the desired project name.  Do not use white spaces.  Hyphens and underscores are accepted.</p>
</li>
<li>
<p>Open <code>header.php</code> and <code>footer.php</code>.  Change <code>leggodt</code> to the project name that you chose in step 1.</p>
</li>
<li>
<p>Open your Command Prompt (Windows) or your Terminal (Mac OSX) and go to the directory of your project.</p>
</li>
<li>
<p>Run the following command: <code>npm install</code>.</p>
</li>
<li>
<p>Once that is completed, you’re ready to rock and roll.  You can use the following commands during your development.</p>
</li>
</ol>
<h3><a id="Available_Grunt_Tasks_65"></a>Available Grunt Tasks</h3>
<pre><code>grunt
</code></pre>
<p><strong><em>Development Task:</em></strong> Generates the project dist folder for easy deployment to any server.  This command will not minify nor uglify your CSS and JS.  Recommended on initial start up of a project.</p>
<pre><code>grunt watch
</code></pre>
<p><strong><em>Watch Task:</em></strong> Grunt will listen to any changes in your files will reload your page.</p>
<pre><code>grunt dist
</code></pre>
<p><strong><em>Production Task:</em></strong> Generates the project dist folder for easy deployment in any server.  This command will clean the <code>dist</code> folder, minify, uglify your CSS and JS, and compress your images.  In addition to this, Grunt will sift through the <code>header.php</code> and <code>footer.php</code> and will change the paths to the minified versions.  This will save you time changing them before going to deployment.  Recommended when your project is ready to go live and if your server supports PHP.</p>
<pre><code>grunt www
</code></pre>
<p><strong><em>Production Task Alternative (Servers that doesn’t support PHP):</em></strong> Basically the same as</p>
<pre><code>grunt validate
</code></pre>
<p><strong><em>Validation Task:</em></strong> Will sift through your JS and SASS files to check for any errors.</p>
<h3><a id="Whats_in_the_Package_92"></a>What’s in the Package?</h3>
<pre><code>leggodt/
    ├── _fonts/
    ├── _icomoon/
    ├── _images/
    │   ├── ie/
    │   │   └── transparent.png
    ├── _scripts/
    │   ├── modules/
    │   │   ├── rr.listeners.js
    │   │   ├── rr.materialDesign.js
    │   │   ├── rr.primaryNav.js
    │   │   └── rr.tableScrollbar.js
    │   ├── plugins/
    │   │   ├── minified/
    │   │   │   ├── doT.min.js
    │   │   │   ├── ScrollToPlugin.min.js
    │   │   │   ├── TimelineMax.min.js
    │   │   │   └── TweenMax.min.js
    │   │   ├── jquery.lazyload.js
    │   │   ├── jquery.mCustomScrollbar.js
    │   │   ├── jquery.visible.js
    │   │   ├── jRespond.js
    │   │   └── scrollMonitor.js
    │   ├── vendor/
    │   │   ├── jquery-1.11.3.min.js
    │   │   └── modernizr.js
    │   └── main.js
    ├── _scss/
    │   ├── common/
    │   │   ├── _defaults.scss
    │   │   ├── _fonts.scss
    │   │   ├── _mixins.scss
    │   │   └── _vars.scss
    │   ├── components/
    │   │   ├── materialDesign/
    │   │   |   ├── _main.scss
    │   │   |   ├── _desktop.scss
    │   │   |   └── _tablet.scss
    │   │   └── primaryNav/
    │   │       ├── _main.scss
    │   │       ├── _desktop.scss
    │   │       └── _tablet.scss
    │   ├── _desktop.scss
    │   ├── _tablet.scss
    │   ├── ie.scss
    │   ├── main.scss
    │   └── responsive.scss
    ├── styles/
    └── tempates/
        ├── grid/
        |   └── index.php
        ├── images/
        ├── includes/
        |   ├── footer.php
        |   ├── header.php
        |   └── primary-nav.php
        ├── list/
        |   └── index.php
        ├── material-design/
        |   └── index.php
        ├── standard/
        |   └── index.php
        └── index.php
</code></pre>
<h4><a id="What_Goes_Where_158"></a>What Goes Where</h4>
<p><code>_fonts/</code> - Downloaded webfonts are placed here.</p>
<p><code>_icomoon/</code> - Downloaded custom font icons are placed here.</p>
<p><code>_images/</code> - Images used across the website are placed here.</p>
<p><code>_scripts/plugins/</code> - Place all plugin files in this folder.</p>
<p><code>_scripts/plugins/minified/</code> - Place all minified files in this folder.</p>
<p><code>_scripts/vendor/</code> - Any JavaScript files that you don’t want to be concatinated but want to manually call in the markup.</p>
<p><code>_scss/</code> - All SCSS stylesheets.</p>
<p><code>_scss/common/</code> - Stylesheets that are commonly used through the entire project.</p>
<p><code>_scss/components/</code> - Stylesheets broken down to components for easy modification.</p>
<p><code>styles/</code> - Stylesheets from plugins are placed here.  <strong>Note:</strong> You must update <code>header.php</code> and link the CSS file.  CSS files in this folder will not be concatincated with the ones you have created.</p>
<p><code>templates/</code> - All created pages for the website goes here.</p>
<p><strong>Note:</strong> I placed <code>_delete</code> files in empty folders so Git will push the folders to the repo.  You can delete these files onces you have set up the boilerplate.</p>
<h3><a id="What_Is_Reponsible_For_What_183"></a>What Is Reponsible For What</h3>
<p><code>_scripts/modules/rr.primaryNav.js</code> - Where the mobile menu is initialized.</p>
<p><code>_scripts/modules/rr.tableScrollbar.js</code> - Where the responsive table is initialized.</p>
<p><code>_scripts/plugins/minified/ScrollToPlugin.min.js</code> - Responsible for scrolling the page while using TweenMax.</p>
<p><code>_scripts/plugins/minified/TimelineMax.min.js</code> - Responsible for animating the menu icon on mobile.  Dependent on TweenMax.</p>
<p><code>_scripts/plugins/minified/TweenMax.min.js</code> - Responsible for all cool JS animation.</p>
<p><code>_scripts/plugins/jRespond.js</code> - Creating breakpoints via JavaScript to run any functions depending on the width of the screen of the device / computer.</p>
<p><code>_scss/common/_defaults.scss</code> - Normalizing your HTML build from <code>normalize.css</code> and HTML5 Boilerplate</p>
<p><code>_scss/common/_fonts.scss</code> - Place all CSS webfonts in this file.</p>
<p><code>_scss/common/_mixins.scss</code> - Majority of long coding techniques for cross-browser compatibilty is in this file.  Have a look and it will make your coding life much better.</p>
<p><code>_scss/common/_vars.scss</code> - Common variables that will be used across your SCSS files.  Breakpoints, colors and column numbers can be edited here.</p>
<p><code>_scss/_desktop.scss</code> - Styles for desktop only.</p>
<p><code>_scss/_tablet.scss</code> - Styles for tablet only.</p>
<p><code>_scss/main.scss</code> - Styles from mobile that can cascade to .desktop.</p>
<h3><a id="Mobile_Responsive_Tables_211"></a>Mobile Responsive Tables</h3>
<h4><a id="Problem_212"></a>Problem</h4>
<p>Tables with large number of columns and responsive websites don’t mix well.  The majority’s solution is to wrap the <code>table</code> with a div and assign an <code>overflow-x: scroll</code> property to allow the users swipe left and right.  But users still can’t get a glimpse or an overview of the entire table.</p>
<h4><a id="A_Possible_Solution_215"></a>A Possible Solution</h4>
<p>The framework will wrap all tables and create a button as a call to action to “View table”.  Once the user taps on the button, it will open into a new window with the table only.  Users have now the ability to view the table in their mobile phones regardless of the manufacturer and or operating system. They can pinch to zoom in or out and swipe in any direction.</p>
<h4><a id="Mobile_Menu_219"></a>Mobile Menu</h4>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"primary-nav"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">nav</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"nav"</span> <span class="hljs-attribute">role</span>=<span class="hljs-value">"navigation"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"wrap"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">h1</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/"</span>&gt;</span>Firestarter<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">h1</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"no-link"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 1<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/standard/"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Standard Content<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/grid/"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Grid System<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 2<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl3"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">nav</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
</code></pre>
<p>You <strong>must</strong> follow the markup in order for the plugin to work that it is designed to be.  If one element or class is missing from the markup, the plugin might not work properly.  This plugin currently supports up to 3 levels only.</p>
<p>Add <code>.no-link</code> to <code>a</code> tags if it will not lead to anywhere.  This way when a user clicks on the link, the dropdown (if available) will open.</p>
<h4><a id="IE9_Placeholder_Fallback_254"></a>IE9 Placeholder Fallback</h4>
<p>For all <code>input[type=&quot;text&quot;]</code> tags that you want to use the <code>placeholder</code> property, add a <code>placeholder</code> attribute with the desired placeholder text.  JS will do the rest.</p>
<h4><a id="Image_Background_Cover_257"></a>Image Background Cover</h4>
<p>Add <code>.backstretch</code> on the <code>div</code> that you wish to have the image to have a <code>background: cover</code> property.  Then add data attribute named <code>data-background</code> with the path of the the image.  JS will do the rest.</p>
<h4><a id="Lazy_Load_Images_260"></a>Lazy Load Images</h4>
<p><code>&lt;img&gt;</code> tags must have the class <code>lazy</code> attached to it and a data attribute named <code>data-original</code> containing the path of the image.  JS will do the rest.</p>
<h3><a id="Issues_Bugs_or_Feature_Requests_263"></a>Issues, Bugs or Feature Requests</h3>
<p>If you found any bugs, would like to contribute, have comments or suggestions, head down to the <a href="https://github.com/oninross/leggodt/issues">issues section</a> and log it in.  I will be more than happy to discuss it.</p>

        </article>
	</section>
</main>

<?php include('footer.php'); ?>

