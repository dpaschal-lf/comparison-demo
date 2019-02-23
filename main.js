var vehicles = [
    {
        year: 2018,
        make: "Ford",
        model: "F-150",
        trim: "Raptor",
        price: 87500,
        mileage:12000,
        cylinders:8,
        horsepower:4000,
        color: "red",
        image: "./img/ford-raptor.jpg",
        features: ["off-road tires", "4x4", "Bluetooth adapter", "race suspension", "lift kit"]
    },
    {
        year: 2017,
        make: "Nissan",
        model: "Rogue",
        trim: "Base",
        price: 14000,
        mileage:600,
        cylinders:4,
        horsepower:30,
        color: "purple",
        image: "./img/nissan-rogue.jpg",
        features: ["baby seat", "bluetooth adapter"]
    },
    {
        year: 2015,
        make: "Chevrolet",
        model: "Malibu",
        trim: "XS",
        price: 15000,
        mileage:5200,
        cylinders:6,
        horsepower:60,
        color: "yellow",
        image: "./img/chevrolet-malibu.jpg",
        features: ["GPS","backup camera", "seat warmers"]
    },
    {
        year: 1934,
        make: "Ford",
        model: "Model T",
        trim: "Base",
        price: 150000,
        mileage:300000,
        cylinders:2,
        horsepower:2,
        color: "brown",
        image: "./img/ford-model-t.jpg",
        features: ["crank start", "windshield"]
    }
];


function initializePage(){
    console.log("init page!", vehicles);

    buildMenu();
}

function buildMenu(){
    var target = $("#vehicle-list");
    
    target.empty();

    for(x=0;x<vehicles.length;x++){
        var vehicle = vehicles[x];

        var li = $("<li></li>");

        var caption = $("<figcaption></figcaption>")
                        .text(vehicle.year + " " + vehicle.make + " " + vehicle.model + " " + vehicle.trim);

        var img = $("<img />")
                    .attr("src", vehicle.image);
        
        var fig = $("<figure></figure>")
                    .append(img)
                    .append(caption);
        
        li.append(fig);                        

        target.append(li);
    }

}


$(document).ready(initializePage);