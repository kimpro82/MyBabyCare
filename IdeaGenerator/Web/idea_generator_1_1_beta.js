// Idea Generator v1.1 Beta
// author : kimpro82
// date   : 2024.09.18
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Constants for animation
var MAX_SHUFFLE_COUNT = 20; // Number of rapid word changes
var SHUFFLE_INTERVAL = 20; // Interval between word changes in milliseconds
// The name of the external JSON file containing words data
var dataFileName = 'data_1_0_beta.json';
/**
 * Fetches word data from the external JSON file.
 *
 * @returns {Promise<WordData>} A promise that resolves with the word data.
 * @throws Will throw an error if the fetch request fails.
 */
function fetchWords() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(dataFileName)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch words: ".concat(response.statusText));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// This event listener triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () { return __awaiter(_this, void 0, void 0, function () {
    /**
     * Generates a random selection of unique words.
     *
     * @param {number} count - The number of words to generate.
     * @returns {string[]} An array of randomly selected words.
     */
    function generateWords(count) {
        if (count > words.length) {
            throw new Error("Requested word count exceeds available unique words.");
        }
        var selectedWords = [];
        var usedIndices = new Set();
        while (selectedWords.length < count) {
            var randomIndex = Math.floor(Math.random() * words.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                // Replace space with <br>
                var word = words[randomIndex].replace(/ /g, "<br>");
                selectedWords.push(word);
            }
        }
        return selectedWords;
    }
    /**
     * Displays the selected number of words in the 'generator' container.
     * Initially shows "?" and then animates the words when shuffled.
     *
     * @param {number} count - The number of words to display.
     */
    function displayWords(count) {
        generator.innerHTML = ''; // Clear any previously displayed words
        generator.className = "grid-".concat(count); // Set the grid class for layout
        var selectedWords = Array(count).fill("?"); // Initially show "?" on each card
        selectedWords.forEach(function (word) {
            var card = document.createElement('div'); // Create a new card element for each word
            card.className = 'card'; // Apply the 'card' class for styling
            // Create a wrapper for the text
            var textWrapper = document.createElement('div');
            textWrapper.className = 'text-wrapper';
            textWrapper.innerHTML = word; // Set the "?" as the initial content of the wrapper
            card.appendChild(textWrapper); // Append the wrapper to the card
            generator.appendChild(card); // Append the card to the generator container
        });
    }
    /**
     * Animates the shuffling of words on the cards.
     *
     * @param {number} count - The number of words to shuffle and display.
     */
    function animateShuffle(count) {
        var cards = Array.from(generator.getElementsByClassName('card'));
        var selectedWords = generateWords(count);
        var shuffleCount = 0;
        function updateWords() {
            cards.forEach(function (card) {
                var textWrapper = card.querySelector('.text-wrapper');
                var randomIndex = Math.floor(Math.random() * words.length);
                textWrapper.innerHTML = words[randomIndex].replace(/ /g, "<br>"); // Replace space with <br>
            });
            shuffleCount++;
            if (shuffleCount < MAX_SHUFFLE_COUNT) {
                setTimeout(updateWords, SHUFFLE_INTERVAL); // Change words quickly
            }
            else {
                // Set final words after shuffling
                cards.forEach(function (card, index) {
                    var textWrapper = card.querySelector('.text-wrapper');
                    textWrapper.innerHTML = selectedWords[index]; // Final words
                });
            }
        }
        // Start the shuffling
        updateWords();
    }
    var generator, wordCountSelect, shuffleBtn, words, wordData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                generator = document.getElementById('generator');
                wordCountSelect = document.getElementById('wordCount');
                shuffleBtn = document.getElementById('shuffleBtn');
                words = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetchWords()];
            case 2:
                wordData = _a.sent();
                words = wordData.words;
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching words:', error_1); // Log if there is an error while fetching words
                return [3 /*break*/, 4];
            case 4:
                // Initial display with a default selection of 3 words
                displayWords(3);
                // Event listener to update the word count and re-display words when the dropdown selection changes
                wordCountSelect.addEventListener('change', function (event) {
                    var selectedCount = parseInt(event.target.value, 10);
                    displayWords(selectedCount); // Redisplay with "?" initially
                });
                // Event listener to shuffle and regenerate the words when the 'Shuffle' button is clicked
                shuffleBtn.addEventListener('click', function () {
                    var selectedCount = parseInt(wordCountSelect.value, 10);
                    animateShuffle(selectedCount); // Animate shuffling of words
                });
                return [2 /*return*/];
        }
    });
}); });
