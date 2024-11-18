// Title  : Mad Typer for My Son v0.9 Beta
// Author : kimpro82
// Date   : 2024-11-18
/**
 * TypingVisualizer class
 * Creates a visual effect for typed characters on the webpage.
 */
var TypingVisualizer = /** @class */ (function () {
    function TypingVisualizer() {
        this.container = document.body;
        this.initEventListeners();
        this.disableShortcuts();
    }
    /**
     * Initialize event listeners for keydown events
     */
    TypingVisualizer.prototype.initEventListeners = function () {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    };
    /**
     * Handle keypress events
     * @param event - The keyboard event
     */
    TypingVisualizer.prototype.handleKeyPress = function (event) {
        var char = event.key;
        if (char.length === 1) {
            this.createCharElement(char);
        }
    };
    /**
     * Create and display a character element on the screen
     * @param char - The character to display
     */
    TypingVisualizer.prototype.createCharElement = function (char) {
        var _this = this;
        // Convert alphabetic characters to uppercase
        var displayChar = char.match(/[a-zA-Z]/) ? char.toUpperCase() : char;
        var element = document.createElement('div');
        element.textContent = displayChar;
        element.className = 'typed-char';
        // Generate random font size and position
        var fontSize = Math.floor(Math.random() * (TypingVisualizer.MAX_FONT_SIZE - TypingVisualizer.MIN_FONT_SIZE + 1)) + TypingVisualizer.MIN_FONT_SIZE;
        var x = Math.random() * (window.innerWidth - fontSize);
        var y = Math.random() * (window.innerHeight - fontSize);
        // Apply styles
        element.style.fontSize = "".concat(fontSize, "px");
        element.style.left = "".concat(x, "px");
        element.style.top = "".concat(y, "px");
        var color = this.randomColor();
        element.style.color = color;
        var font = this.randomFont();
        element.style.fontFamily = font;
        this.container.appendChild(element);
        // Test output
        if (TypingVisualizer.IS_TEST) {
            console.log("Character: ".concat(displayChar, ", Font: ").concat(font, ", Color: ").concat(color, ", Size: ").concat(fontSize, "px"));
        }
        // Fade in
        setTimeout(function () {
            element.style.opacity = '1';
        }, TypingVisualizer.FADE_IN_DELAY);
        // Fade out and remove
        setTimeout(function () {
            element.style.opacity = '0';
            setTimeout(function () {
                _this.container.removeChild(element);
            }, TypingVisualizer.FADE_OUT_DURATION);
        }, TypingVisualizer.DISPLAY_DURATION);
    };
    /**
     * Generate a random RGBA color with some transparency
     * @returns A string representing an RGBA color
     */
    TypingVisualizer.prototype.randomColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(TypingVisualizer.CHAR_OPACITY, ")");
    };
    /**
     * Select a random font from the predefined list
     * @returns A string representing a font family
     */
    TypingVisualizer.prototype.randomFont = function () {
        return TypingVisualizer.FONTS[Math.floor(Math.random() * TypingVisualizer.FONTS.length)];
    };
    /**
     * Disable specific keyboard shortcuts and function keys
     */
    TypingVisualizer.prototype.disableShortcuts = function () {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey && !e.altKey && !e.shiftKey) ||
                (e.metaKey && !e.altKey && !e.shiftKey) ||
                TypingVisualizer.DISABLED_KEYS.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, false);
    };
    // Constants for customization
    TypingVisualizer.IS_TEST = false; // Set to true to enable test mode
    TypingVisualizer.FONTS = [
        'Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia',
        'Helvetica', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS'
    ];
    TypingVisualizer.MIN_FONT_SIZE = 50;
    TypingVisualizer.MAX_FONT_SIZE = 150;
    TypingVisualizer.CHAR_OPACITY = 0.7;
    TypingVisualizer.FADE_IN_DELAY = 10;
    TypingVisualizer.DISPLAY_DURATION = 2000;
    TypingVisualizer.FADE_OUT_DURATION = 1000;
    TypingVisualizer.DISABLED_KEYS = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
    return TypingVisualizer;
}());
// Initialize the TypingVisualizer
new TypingVisualizer();
