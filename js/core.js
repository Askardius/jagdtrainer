var m1DataLoaded = false;

$(document).ready(function() {

//set loading overlay
overlayControle();
//load data for module 1
getDataM1();

    //init core nav buttons

//start button for home
$("#coreStart0").click(function() {
    $("#coreInfoField").show();
    $("#m1mainFrame").hide();
});

//start button for module 1
$("#coreStart1").click(function() {
    $("#coreInfoField").hide();
    $("#m1mainFrame").show();
    startRun("haarwild");
});

//start button for module 1
$("#coreStart2").click(function() {
    
});

});

//gets the data for module 1 from the db and saves them in the matching lists
function getDataM1(){
    $.ajax({
        method: "POST",
        url: "../php/getDataM1.php",
        data: { type: "haarwild"}
      })
        .done(function(data) {
        haarwildList = JSON.parse(data);
        getPicturesM1();
        });
}

//gets the pictures for module 1 from the db and saves them in the matching lists
//synced ajax calls for each type 
function getPicturesM1(){
    $.ajax({
        method: "POST",
        url: "../php/getPicturesM1.php",
        data: { type: "haarwild"}  
      })
        .done(function(data) {
        data = JSON.parse(data);
        $.each(haarwildList, function(key) {
            haarwildList[key].pic = [];
            $.each(data, function(subKey) {
                if(data[subKey].parent === haarwildList[key].id){
                    haarwildList[key].pic.push(data[subKey].pic);
                }
            });
        });
        console.log(haarwildList);
        m1DataLoaded = true;
        overlayControle();
        });
}


function overlayControle(){
    if(m1DataLoaded){
        $("#overlay").hide();
    }else{
        $("#overlay").show();
    }
}