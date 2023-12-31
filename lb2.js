console.log("Chaliye suru karte hai!")

//object create
// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log("draw");
//     }
// };

// function ne access karva mate
rectangle.draw();
rectangle.length();

// Factory function

function createRectangle(){

    return rectangle = { // aa factory functin e return karse
        length:1,
        breadth:2,

        draw: function() {
            console.log('drawing a rectangle')

        }
    }

}