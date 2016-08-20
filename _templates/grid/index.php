<?php
	set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
	$primary = 2;
	include('header.php');
?>

<main id="main">
	<!-- Hero Banner -->
	<header class="standard-banner backstretch lazy" data-original="/assets/firestarter/images/background.jpg">
		<div class="container">
			<h1>Grid</h1>
		</div>
	</header>
	<!-- Hero Banner -->

	<!-- Breadcrumbs -->
	<ul class="breadcrumbs">
		<li><a href="/">Home</a></li>
		<li>Grid</li>
	</ul>
	<!-- Breadcrumbs -->

	<section class="container grid">
		<h2>Standard Column Grid</h2>

		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>
		<div class="col-1">
			<p>.col-1</p>
		</div>

		<div class="col-2">
			<p>.col-2</p>
		</div>
		<div class="col-2">
			<p>.col-2</p>
		</div>
		<div class="col-2">
			<p>.col-2</p>
		</div>
		<div class="col-2">
			<p>.col-2</p>
		</div>
		<div class="col-2">
			<p>.col-2</p>
		</div>
		<div class="col-2">
			<p>.col-2</p>
		</div>

		<div class="col-3">
			<p>.col-3</p>
		</div>
		<div class="col-3">
			<p>.col-3</p>
		</div>
		<div class="col-3">
			<p>.col-3</p>
		</div>
		<div class="col-3">
			<p>.col-3</p>
		</div>

		<div class="col-4">
			<p>.col-4</p>
		</div>
		<div class="col-4">
			<p>.col-4</p>
		</div>
		<div class="col-4">
			<p>.col-4</p>
		</div>

		<div class="col-6">
			<p>.col-6</p>
		</div>
		<div class="col-6">
			<p>.col-6</p>
		</div>

		<div class="col-12">
			<p>.col-12</p>
		</div>
	</section>

	<section class="container grid">
		<h2>Nested Column Grid</h2>

		<div class="col-6">
			<p>Parent: .col-6</p>

			<div class="wrap">
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
			</div>
		</div>

		<div class="col-6">
			<p>Parent: .col-6</p>

			<div class="wrap">
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
				<div class="col-4">
					<p>Child: .col-4</p>
				</div>
			</div>
		</div>
	</section>

</main>

<?php include('footer.php'); ?>

