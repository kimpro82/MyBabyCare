// Brachiosaurus for My Son
// kimpro82 / 2024.11.22
// Constant for the object ID
var SVG_OBJECT_ID = 'brachio-svg';
// Constants for SVG element IDs
var LEG1_ID = 'leg1';
var LEG2_ID = 'leg2';
var LEG3_ID = 'leg3';
var LEG4_ID = 'leg4';
var HEAD_ID = 'head';
var EYE_ID = 'eye';
var NECK_ID = 'neck';
document.addEventListener('DOMContentLoaded', function () {
    var svgObject = document.getElementById(SVG_OBJECT_ID);
    svgObject.addEventListener('load', function () {
        // Access the internal SVG document
        var svgDoc = svgObject.contentDocument;
        if (svgDoc) {
            // Get leg elements
            var leg1 = svgDoc.getElementById(LEG1_ID);
            var leg2 = svgDoc.getElementById(LEG2_ID);
            var leg3 = svgDoc.getElementById(LEG3_ID);
            var leg4 = svgDoc.getElementById(LEG4_ID);
            // Get head, eye, and neck elements
            var head = svgDoc.getElementById(HEAD_ID);
            var eye = svgDoc.getElementById(EYE_ID);
            var neck = svgDoc.getElementById(NECK_ID);
            // Add animations for legs
            if (leg1 && leg2 && leg3 && leg4) {
                // Animate leg1 and leg3 simultaneously
                [leg1, leg3].forEach(function (leg) {
                    leg.animate([
                        { transform: 'translateX(0)' }, // Original position
                        { transform: 'translateX(1.5%)' }, // Move slightly right
                        { transform: 'translateX(0)' } // Return to original position
                    ], {
                        duration: 1000, // Animation duration in milliseconds
                        iterations: Infinity, // Infinite loop
                        easing: 'ease-in-out' // Smooth movement
                    });
                });
                // Animate leg2 and leg4 simultaneously (opposite timing)
                [leg2, leg4].forEach(function (leg) {
                    leg.animate([
                        { transform: 'translateX(0)' }, // Original position
                        { transform: 'translateX(-1.5%)' }, // Move slightly left
                        { transform: 'translateX(0)' } // Return to original position
                    ], {
                        duration: 1000, // Animation duration in milliseconds
                        iterations: Infinity, // Infinite loop
                        easing: 'ease-in-out', // Smooth movement,
                    });
                });
            }
            // Add animations for head, eye, and neck
            if (head && eye && neck) {
                [head, eye, neck].forEach(function (element) {
                    element.animate([
                        { transform: 'translateY(0)' }, // Original position
                        { transform: 'translateY(3%)' }, // Move downward by 3%
                        { transform: 'translateY(0)' } // Return to original position
                    ], {
                        duration: 1000, // Animation duration in milliseconds
                        iterations: Infinity, // Infinite loop
                        easing: 'ease-in-out' // Smooth movement
                    });
                });
            }
        }
    });
});
