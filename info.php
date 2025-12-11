<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
    <style>
        body{
            font-family: Arial;
            padding: 20px; 
        }
        .card{
            background: #fafafa;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            width: 400px;
            margin: auto;
        }
    </style>
</head>
<body>
<div class="card">
    <h2>Infos PHP</h2>
    <?php
        $etablissement="EST Safi";
        $module="Développement Web";
        $annee=2024;
        $x=12;
        $y=8;
        $addition=$x+$y;
        $multiplication=$x*$y;
        echo "<p><strong>Établissement :</strong> $etablissement</p>";
        echo "<p><strong>Module :</strong> $module</p>";
        echo "<p><strong>Année :</strong> $annee</p>";
        echo "<hr>";
        echo "<p>Valeur de x=$x</p>";
        echo "<p>Valeur de y=$y</p>";
        echo "<p>Addition : $x + $y=$addition</p>";
        echo "<p>Multiplication : $x × $y=$multiplication</p>";
    ?>
</div>
</body>
</html>
