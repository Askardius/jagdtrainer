<html>
<head>
<!-- additional scripts and librarys --> 
<script language="javascript" type="text/javascript" src="lib/jquery-3.2.1.min.js"></script>
<script language="javascript" type="text/javascript" src="js/core.js"></script>
<script language="javascript" type="text/javascript" src="js/module1.js"></script>
<link rel="stylesheet" href="css/jagdtrainer.css">
</head>
<body id="body">
    <div id="overlay">
        <div id="loadingInfo">
        Loading...    
        <img id="loadingDeer" src="img/loadingDeer.gif" alt="Please wait" />
        </div>
    </div>
    <div id="core">
        <div id="coreNavigation">
            <div id="coreStart0" class="coreButton floatLeft divider">Home</div>
            <div id="coreStart1" class="coreButton floatLeft divider">Bilderkennen</div>
            <div id="coreStart2" class="coreButton">Waffenhandhabung</div>
        </div>
        <div id="coreInfoField">
            <h2>News</h2>
            <div id="coreNewsContent">
                Version 0.1<br>
                - Navigation umgebaut<br>
                - Loading Overlay implementiert<br>
                - kompltte Neustrukturierung der Datenbank<br>
                - implementierung Datenbank<br>
                - Haarwild vorerst komplett eingepflegt<br><br>
                <b>Achtung!</b> Sollte euch noch Haarwild einfallen das in die Liste sollte bitte mir mitteilen. Danke.<br>
                Offensichtliches Wild wie Schwarz oder Rehwild wurde nicht implementiert, das sollte jeder erkennen ;) 
            </div>
        </div>
    </div>
    <?php include "modules/module1.php"; ?>
</body>
</html>