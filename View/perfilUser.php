<?php
session_start();

if((!isset ($_SESSION['email']) == true) and (!isset ($_SESSION['senha']) == true)){
	unset($_SESSION['email']);
	unset($_SESSION['senha']);
	header("Location:login.php?status=forbidden");
}

if(isset($_GET['logout'])){
  session_destroy();
  header("Location:login.php");
}

if(isset($_SESSION['email']) == true){
	require_once("../Controller/perfilController.php");
	
	$control2 = new PerfilController();
	
	$email = $_SESSION['email'];
	
	$resultado2 = $control2->checaPerfil($email);
	
	if ($resultado2 == false){
		header("Location:perfil.php");
	}
}

if(isset($_GET['id']) == true){
	echo "<p id='id_usuario'>".$_GET['id']."</p>";
	
}

?>




<!DOCTYPE html>
<html lang="en">
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, inicial-scale=1">
	
	<!-- Bootstrap -->
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/bootstrap-datepicker.standalone.css" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	
	<!-- Css -->
	<link rel="stylesheet" href="css/perfilUser.css">
	
	<!-- Fonte -->
	<link href='https://fonts.googleapis.com/css?family=Muli:400,400italic' rel='stylesheet' type='text/css'>
	
	<title> Perfil </title>
</head>

<body>
	<nav class="navbar navbar-default"  id= "barra">
	  <div class="container-fluid">
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>                        
		  </button>
		<img id="brand" class="img-responsive img-circle" src="" width="54">
		</div>
		<div class="collapse navbar-collapse" id="myNavbar">
		  <ul class="nav navbar-nav">
			<li><a id="nomePerfil"></a></li>
		  </ul>
		  <ul class="nav navbar-nav navbar-right">
			<li><a href="inicial.php"><span class="glyphicon glyphicon-home"></span>&nbsp; Home</a></li>
			<li><a href="amigos.php"><span class="glyphicon glyphicon-user"></span>&nbsp; Amigos</a></li>
			<li><a href="pesquisar.php"><span class="glyphicon glyphicon-search"></span>&nbsp; Pesquisar</a></li>
			<li><a href="perfil.php"><span class="glyphicon glyphicon-edit"></span>&nbsp; Editar Perfil</a></li>
			<li><a href='inicial.php?logout'><span class="glyphicon glyphicon-log-in"></span>&nbsp; Sair</a></li>
		  </ul>
		</div>
	  </div>
	</nav>

	<div id="perfil" class=" col-sm-12">
		<div class="col-sm-12 col-xs-12">
			<img id="foto_perfil" class="img-responsive img-circle center-block">
		</div>
		<div class="col-sm-offset-4 col-sm-4 col-xs-12" id="informacoes_perfil">
			<table class="table">
				<thead>
				  <tr>
					<h3 id="Nome_Usuario"></h3>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td id="sexo"><span class= "glyphicon glyphicon-user"></span>&nbsp; </td>
					<td id="dataN"><span class= "glyphicon glyphicon-calendar"></span>&nbsp; </td>
					<td id="localizacao"><span class= "glyphicon glyphicon-map-marker"></span>&nbsp; </td>
				  </tr>
				</tbody>	
			</table>
		</div>
		<div class="col-sm-offset-5 col-sm-2 col-xs-12" id="status_amizade">
			
		</div>
	</div>
	
	
<div id="publicacoes"></div>
	
<span class="btn btn-info center-block" id="carregar_posts">Carregar mais publicações.</span>
	
	

	
<!-- jQuery (necessario para os plugins Javascript Bootstrap) -->
<script src="js/jquery.min.js"></script>
<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/jquery-2.2.3.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/perfilUser.js"></script>

</body>
</html>
