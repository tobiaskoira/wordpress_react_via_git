<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header  class="w-full">

	<nav id="site-header" class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default transiton-all duration-300">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
			<span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Mytest_Page</span>
		</a>
		<div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<button type="button" class="text-heading border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Contact me</button>
			<button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
			</button>
		</div>
		<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
			<?php 
				wp_nav_menu([
					'theme_location' => 'primary',
					'container' => false,
					'menu_class' => 'font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary',
					'fallback_cb'    => false,
					'depth'          => 1,
				])
			?>

		</div>
		</div>
	</nav>

</header>
