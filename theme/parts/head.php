<!DOCTYPE html>
<html dir="ltr" lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php wp_title();?></title>
	<?php wp_head();?>

	<link rel="icon" type="image/png" href="<?php bloginfo('template_directory');?>/images/favicon.png"/>

	<!-- Theme Style Bundle -->
	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/style/css/style.css">

</head>
<body <?php body_class();?>>
