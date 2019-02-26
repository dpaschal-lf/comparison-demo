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
    while(comparisonCarsArray.length){
        
        var currentCar = comparisonCarsArray.pop();
        var clonedElement = $("#compareColumn").clone();
        clonedElement.prop('id','');
        clonedElement.find('.name').text( currentCar.year + ' ' + currentCar.make + ' ' + currentCar.model + ' ' + currentCar.trim );
        clonedElement.find('.color').text(currentCar.color);
        clonedElement.find('.price').text(currentCar.price);
        clonedElement.find('.mileage').text(currentCar.mileage);
        clonedElement.find('.cylinders').text(currentCar.cyclinders);
        $('.compareColumn').eq(comparisonCarsArray.length).append(clonedElement);
    }

}







