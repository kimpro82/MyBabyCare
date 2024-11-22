// Brachiosaurus for My Son
// kimpro82 / 2024.11.22

// Constant for the object ID
const SVG_OBJECT_ID = 'brachio-svg';

// Constants for SVG element IDs
const LEG1_ID = 'leg1';
const LEG2_ID = 'leg2';
const LEG3_ID = 'leg3';
const LEG4_ID = 'leg4';
const HEAD_ID = 'head';
const EYE_ID = 'eye';
const NECK_ID = 'neck';

document.addEventListener('DOMContentLoaded', () => {
    const svgObject = document.getElementById(SVG_OBJECT_ID) as HTMLObjectElement;

    svgObject.addEventListener('load', () => {
        // Access the internal SVG document
        const svgDoc = svgObject.contentDocument;
        if (svgDoc) {
            // Get leg elements
            const leg1 = svgDoc.getElementById(LEG1_ID);
            const leg2 = svgDoc.getElementById(LEG2_ID);
            const leg3 = svgDoc.getElementById(LEG3_ID);
            const leg4 = svgDoc.getElementById(LEG4_ID);

            // Get head, eye, and neck elements
            const head = svgDoc.getElementById(HEAD_ID);
            const eye = svgDoc.getElementById(EYE_ID);
            const neck = svgDoc.getElementById(NECK_ID);

            // Add animations for legs
            if (leg1 && leg2 && leg3 && leg4) {
                // Animate leg1 and leg3 simultaneously
                [leg1, leg3].forEach((leg) => {
                    leg.animate(
                        [
                            { transform: 'translateX(0)' },     // Original position
                            { transform: 'translateX(1.5%)' },  // Move slightly right
                            { transform: 'translateX(0)' }      // Return to original position
                        ],
                        {
                            duration: 1000,                     // Animation duration in milliseconds
                            iterations: Infinity,               // Infinite loop
                            easing: 'ease-in-out'               // Smooth movement
                        }
                    );
                });

                // Animate leg2 and leg4 simultaneously (opposite timing)
                [leg2, leg4].forEach((leg) => {
                    leg.animate(
                        [
                            { transform: 'translateX(0)' },     // Original position
                            { transform: 'translateX(-1.5%)' }, // Move slightly left
                            { transform: 'translateX(0)' }      // Return to original position
                        ],
                        {
                            duration: 1000,                     // Animation duration in milliseconds
                            iterations: Infinity,               // Infinite loop
                            easing: 'ease-in-out',              // Smooth movement,
                        }
                    );
                });
            }

            // Add animations for head, eye, and neck
            if (head && eye && neck) {
                [head, eye, neck].forEach((element) => {
                    element.animate(
                        [
                            { transform: 'translateY(0)' },     // Original position
                            { transform: 'translateY(3%)' },    // Move downward by 3%
                            { transform: 'translateY(0)' }      // Return to original position
                        ],
                        {
                            duration: 1000,                     // Animation duration in milliseconds
                            iterations: Infinity,               // Infinite loop
                            easing: 'ease-in-out'               // Smooth movement
                        }
                    );
                });
            }
        }
    });
});
