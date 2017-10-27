//variables
//data lists
var haarwildList = [];
var dogList = [];

//work variables
var currentItem = [];
var entryCount = 0;
var currentType;
var currentNames = [];
var currentList = [];

$(document).ready(function() {
    //only needed to convert new list once
    init();

    //button listener
    $("#m1ok").hide();
    $("#m1moreInfo").hide();
    $("#m1infoBox").hide();
    //answer button
    $(".m1answerButton").click(function() {
        if(currentItem.name === $(this).val()){
            $("#resultCall").append("Richtig");
            handleResultButtons();
            colorButtons(currentItem.name);
        }else{
            $("#resultCall").append("Falsch");
            handleResultButtons();
            colorButtons(currentItem.name, $(this).val());
        }
    });

   


});

function handleResultButtons(){
    $("#m1ok").show();
    $("#m1moreInfo").show();
    $("#m1infoBox").show();
    colorButtons();
     //handle ok button
     $("#m1ok").click(function() {
        resetButtons();
        reRun();
    });

    //handle info button
    $("#m1moreInfo").click(function() {
        $("#m1infoBox").empty();
        $("#m1infoBox").append(currentItem.info);        
    });
}

//function to color the answer buttons
function colorButtons(right, wrong = false){
    $.each($(".m1answerButton"), function(key) {
        if($(this).val() === right){
            $(this).css('background-color', 'green');
        }
        if(wrong){
            if($(this).val() === wrong){
                $(this).css('background-color', 'red');
            }
        }
    });
}

//resets the answer button colors
function resetButtons(right, wrong = false){
    $.each($(".m1answerButton"), function(key) {
        $(this).css('background-color', '#aaa5aa');
    });
}


//functions for module1
//init function where everything is loaded and prepared
function init(){
    var initList;
    fillData();
    //later start all ( type = "all" ) as default
}



//fill the convert array data
//!test filling! later filled from database
function fillData(){
    haarwildList.push({
        id: 0,
        name: "Steinmarder",
        familie: "haarwild",
        pic: {
            0: "steinmarder0.jpg",
            1: "steinmarder1.jpg",
            2: "steinmarder2.jpg"
        },
        info: "Farbe d. Kehlflecks: weiß<br>Form d. Kehlflecks: unten gegabelt<br>  Nase: grau-rot bis fleischfarben<br>Branten: Sohlen fast nackt"
    })
    haarwildList.push({
        id: 1,
        name: "Baummarder",
        familie: "haarwild",
        pic: {
            0: "baummarder0.jpg",
            1: "baummarder1.jpg",
            2: "baummarder2.jpg"
        },
        info: "Farbe d. Kehlflecks: gelb<br>Form d. Kehlflecks: unten abgerundet<br>  Nase: grauschwarz bis schwarz<br>Branten: Sohlen behaart"
    })
    haarwildList.push({
        id: 2,
        name: "Iltis",
        familie: "haarwild",
        pic: {
            0: "iltis0.jpg",
            1: "iltis1.jpg",
            2: "iltis2.jpg"
        },
        info: "Verkehrtfärbung: Fell oben hell unten dunkel<br>Hals & Branten: Dunkel bis schwarz<br>  Viele verschiedene Farbvarianten (Honigiltis)"
    })
    haarwildList.push({
        id: 3,
        name: "Grosswiesel(Hermelin)",
        familie: "haarwild",
        pic: {
            0: "hermelin0.jpg",
            1: "hermelin1.jpg",
            2: "hermelin2.jpg"
        },
        info: "Rute lang, Rutenspitze (Quaste) buschig & schwarz<br>Haarkleid:<br>Sommer: oben rost-kastanienbraun<br>unten weiß bis gelb<br>Winter: reinweiß"
    })
    haarwildList.push({
        id: 3,
        name: "Kleinwiesel (Mauswiesel)",
        familie: "haarwild",
        pic: {
            0: "mauswiesel0.jpg",
            1: "mauswiesel1.jpg",
            2: "mauswiesel2.jpg"
        },
        info: "Rute kurz ohne schwarze Spitze<br>Haarkleid:<br>Oben: hellgrau bis braun<br>Unten: heller"
    })
    console.log("fill data");
    var test = JSON.stringify(haarwildList);
    console.log(test);
    console.log(JSON.parse(test));
}

//fills all needed variables, calculates all numbers and starts the run
function startRun(type = "all"){
    if(type === "all"){
        //do some stuff for all
    }else{
        setCurrentType(type);
        setEntryCount(type);
        fillWorkLists(type);
        setCurrentItem(type);
        setCurrentPicture();
        setButtonText();
    }
}

//rerun without init
function reRun(){
    $("#m1ok").hide();
    $("#m1moreInfo").hide();
    $("#m1infoBox").hide();
    $("#resultCall").empty();
    $("#m1infoBox").empty();

    setCurrentItem(currentType);
    setCurrentPicture();
    setButtonText();
}

//fills the nameList and workList for current type
function fillWorkLists(){
    var listToUse;
    switch(currentType) {
        case "all":
            
            break;
        case "haarwild":
            listToUse = haarwildList;
            break;
        default:
            console.log("Error! Could not fill name list. Unknown currentType!")
    }
    $.each(listToUse, function(key) {
        currentNames.push(listToUse[key].name);
        currentList.push(listToUse[key]);
    });
}

//sets the text of the buttons
function setButtonText(){
    //first generate a name array with the current name and 2 random names from the list
    var buttonTextArray = [];
    buttonTextArray.push(currentItem.name);
    while(buttonTextArray.length < 3){
        var nameToAdd = currentList[giveRandom(entryCount)].name;
        if($.inArray(nameToAdd, buttonTextArray) === -1){
            	buttonTextArray.push(nameToAdd);
        }
    }
    //now shuffle it
    var shuffle = function(){
        return Math.random()-0.5;
      };
    buttonTextArray = buttonTextArray.sort(shuffle);
    //clear the buttons and add new text
    $("#m1button1").empty();
    $("#m1button1").val(buttonTextArray[0]);
    $("#m1button1").append(buttonTextArray[0]);
    $("#m1button2").empty();
    $("#m1button2").val(buttonTextArray[1]);
    $("#m1button2").append(buttonTextArray[1]);
    $("#m1button3").empty();
    $("#m1button3").val(buttonTextArray[2]);
    $("#m1button3").append(buttonTextArray[2]);
}


//sets the current type
function setCurrentType(type){
    currentType = type;
}

//calculates the current item count
function setEntryCount(){
    switch(currentType) {
        case "all":
            setEntryCount("all");
            break;
        case "haarwild":
            entryCount = haarwildList.length;
            break;
        default:
            console.log("Error! Could not count items. Unknown currentType!")
    }

}

//chooses a item from the current list
function setCurrentItem(){
    var myNumber = giveRandom(entryCount);
    switch(currentType) {
        case "all":
            setEntryCount("all");
            break;
        case "haarwild":
            currentItem = haarwildList[myNumber];
            break;
        default:
            console.log("Error! Could not count items. Unknown currentType!")
    } 
}

//sets the current picture depending on the current item
function setCurrentPicture(){
    var url = "url('../pic/" + currentItem.pic[giveRandom(2)] + "')";
    $("#m1picture").css('background-image', url);
}


//gives a random number between 0 and the given max
function giveRandom(max){
    return Math.floor(Math.random() * max);
    
}

//shuffles the given array and returns it
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }