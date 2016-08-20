<?php
	set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
	$primary = 2;
	include('header.php');
?>

<main id="main">

	<!-- Hero Banner -->
	<header class="standard-banner backstretch lazy" data-original="/assets/firestarter/images/background.jpg">
		<div class="container">
			<h1>Material Design</h1>
		</div>
	</header>
	<!-- Hero Banner -->

	<!-- Breadcrumbs -->
	<ul class="breadcrumbs">
		<li><a href="/">Home</a></li>
		<li>Material Design</li>
	</ul>
	<!-- Breadcrumbs -->

	<section class="container">
		<h2>Buttons</h2>

		<h3>Normal Buttons</h3>

		<div class="wrap">
			<div class="col-3">
				<button class="btn default">Button</button>
			</div>

			<div class="col-3">
				<button class="btn colored">Colored</button>
			</div>

			<div class="col-3">
				<button class="btn disabled">Disabled</button>
			</div>

			<div class="col-3">
				<a href="#" class="cta">Link</a>
			</div>
		</div>

		<h3>Flat Buttons</h3>

		<div class="wrap">
			<div class="col-3">
				<button class="btn flat default">Button</button>
			</div>

			<div class="col-3">
				<button class="btn flat colored">Colored</button>
			</div>

			<div class="col-3">
				<button class="btn flat disabled">Disabled</button>
			</div>

			<div class="col-3">
				<a href="#" class="flat cta">Link</a>
			</div>
		</div>

		<h3>Raised Buttons</h3>

		<div class="wrap">
			<div class="col-3">
				<button class="btn default raised">Button</button>
			</div>

			<div class="col-3">
				<button class="btn colored raised">Colored</button>
			</div>

			<div class="col-3">
				<button class="btn disabled raised">Disabled</button>
			</div>

			<div class="col-3">
				<a href="#" class="cta raised">Link</a>
			</div>
		</div>

		<h3>Floating Action Buttons</h3>

		<div class="wrap">
			<div class="col-3">
				<button class="menu action material-menu">
					<span class="line top"></span>
					<span class="line mid"></span>
					<span class="line bot"></span>
				</button>
			</div>
		</div>
	</section>

	<hr/>

	<section class="container">
		<h2>Cards and Shadows</h2>

		<div class="wrap">
			<div class="card-container">
				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z0">
							<h3>Shadow 0</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>

				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z1">
							<h3>Shadow 1</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>

				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z2">
							<h3>Shadow 2</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>

				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z3">
							<h3>Shadow 3</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>

				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z4">
							<h3>Shadow 4</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>

				<div class="col-4">
					<div class="card">
						<div class="card-wrapper shadow-z5">
							<h3>Shadow 5</h3>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus nisl arcu, a finibus erat rutrum id. Phasellus pretium pharetra sem at facilisis. Mauris interdum vestibulum faucibus. Sed non arcu nisl. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<hr/>

	<section class="container">
		<div class="wrap">
			<div class="col-4">
				<h2>Radio Buttons</h2>

				<input type="radio" name="name" id="radio1" value="value">
				<label for="radio1" class="radio-button">Radio Button</label>

				<input type="radio" name="name" id="radio2" value="value">
				<label for="radio2" class="radio-button">Radio Button</label>

				<input type="radio" name="name" id="radio3" value="value">
				<label for="radio3" class="radio-button">Radio Button</label>

				<input type="radio" name="name" id="radio4" value="value">
				<label for="radio4" class="radio-button">Radio Button</label>

				<h2>Checkbox</h2>

				<input type="checkbox" name="name" id="checkbox1" value="value">
				<label for="checkbox1" class="checkbox">Checkbox Button</label>

				<input type="checkbox" name="name" id="checkbox2" value="value">
				<label for="checkbox2" class="checkbox">Checkbox Button</label>

				<input type="checkbox" name="name" id="checkbox3" value="value">
				<label for="checkbox3" class="checkbox">Checkbox Button</label>

				<input type="checkbox" name="name" id="checkbox4" value="value">
				<label for="checkbox4" class="checkbox">Checkbox Button</label>
			</div>

			<div class="col-8">
				<h2>Dropdown with Material Design</h2>

				<select class="material">
					<option class="active" value="Select an option">Select an option</option>
					<option value="Option 1">Option 1</option>
					<option value="Option 2">Option 2</option>
					<option value="Option 3">Option 3</option>
					<option value="Option 4">Option 4</option>
					<option value="Option 5">Option 5</option>
				</select>

				<h2>Dropdown with Material Design (with native select on mobile<sup>NEW</sup></h2>

				<select class="material native">
					<option class="active" value="Select an option">Select an option</option>
					<option value="Option 1">Option 1</option>
					<option value="Option 2">Option 2</option>
					<option value="Option 3">Option 3</option>
					<option value="Option 4">Option 4</option>
					<option value="Option 5">Option 5</option>
				</select>
			</div>
		</div>
	</section>

	<hr/>

	<section class="container">
		<h2>Input</h2>

		<div class="wrap">
			<div class="col-6">
				<h3>Basic Placeholder</h3>
				<input type="text" placeholder="Label" />
			</div>

			<div class="col-6">
				<h3>Floating Placeholder</h3>
				<input class="floating-input" type="text" placeholder="Label" />
			</div>

			<div class="col-6">
				<h3>Hints</h3>

				<input class="floating-input" type="text" placeholder="Label" data-hint="Lorem ipsum dolor" />
			</div>

			<div class="col-6">
				<h3>Disabled Input</h3>
				<input type="text" placeholder="Label" disabled />
			</div>
		</div>
	</section>

	<hr/>

	<section class="container">
		<h2>Progress Bar</h2>

		<div class="wrap">
			<div class="col-6">
				<h3>Basic Progress Bar</h3>

				<div class="progress">
	                <div class="progress-bar" data-value="75"></div>
				</div>
			</div>

			<div class="col-6">
				<h3>Loader</h3>

				<div class="loader">
					<svg class="circular" viewBox="25 25 50 50">
				      	<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
				    </svg>
				</div>
			</div>
		</div>
	</section>
</main>

<?php include('footer.php'); ?>

