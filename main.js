$(document).ready(initializePage);

function initializePage(){
    console.log("init page!", vehicles);
    buildMenu();
}

var comparisonCarsArray = [];






function buildMenu(){
    var target = $("#vehicle-list");
    
    target.empty();

    for(var x=0;x<vehicles.length;x++){
        var vehicle = vehicles[x];

        var li = $("<li></li>");

        var caption = $("<figcaption></figcaption>")
                        .text(vehicle.year + " " + vehicle.make + " " + vehicle.model + " " + vehicle.trim);

        var img = $("<img />")
                    .attr("src", vehicle.image);
        
        var createdFigure = makeDatFig( vehicles[x])
        createdFigure.append(img)
        createdFigure.append(caption)

        //createdFigure[0].carData = vehicles[x];
        
        li.append(createdFigure);                        

        target.append(li);
    }

}

function makeDatFig(carData){
    var fig = $("<figure>")
        .click( function(){
            addCompareCar( carData );
    })
    return fig;
}

function addCompareCar(car){
    comparisonCarsArray.push( car );
    if( comparisonCarsArray.length === 2){
        compareCars();
        comparisonCarsArray = [];
    }
}
/*
                  <div class="name"></div>
                    <div class="color"></div>
                    <div class="price"></div>
                    <div class="mileage"></div>
                    <div class="cylinders"></div>
*/
function compareCars(){
    $('.compareColumn').empty();
    while(comparisonCarsArray.length){
        
        var currentCar = comparisonCarsArray.pop();
        var clonedElement = $("#compareColumn").clone();
        clonedElement.prop('id','');
        var children = clonedElement.find('*');
        for( var i = 0; i< children.length; i++){
            var innerText = $(children[i]).text();

            if( innerText[0] === '{' && innerText.slice(-1) === '}'){
                var searchingFor = innerText.slice(1,-1);
                $(children[i]).text( currentCar[searchingFor]);
            }                

        }
        $('.compareColumn').eq(comparisonCarsArray.length).append(clonedElement);
    }

}







