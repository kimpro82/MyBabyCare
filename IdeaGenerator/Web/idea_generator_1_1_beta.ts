// Idea Generator v1.1 Beta
// author : kimpro82
// date   : 2024.09.18


// Constants for animation
const MAX_SHUFFLE_COUNT: number = 20;  // Number of rapid word changes
const SHUFFLE_INTERVAL: number = 20;  // Interval between word changes in milliseconds

// The name of the external JSON file containing words data
const dataFileName: string = 'data_1_0_beta.json';

// Interface to define the structure of the word data from the JSON file
interface WordData {
  words: string[];
}

/**
 * Fetches word data from the external JSON file.
 * 
 * @returns {Promise<WordData>} A promise that resolves with the word data.
 * @throws Will throw an error if the fetch request fails.
 */
async function fetchWords(): Promise<WordData> {
  const response = await fetch(dataFileName);
  if (!response.ok) {
    throw new Error(`Failed to fetch words: ${response.statusText}`);
  }
  return response.json();
}

// This event listener triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  const generator = document.getElementById('generator') as HTMLElement; // Container for displaying words
  const wordCountSelect = document.getElementById('wordCount') as HTMLSelectElement; // Dropdown for selecting word count
  const shuffleBtn = document.getElementById('shuffleBtn') as HTMLButtonElement; // Shuffle button

  let words: string[] = []; // Array to store the fetched words

  try {
    // Fetch the words from the external JSON file
    const wordData = await fetchWords();
    words = wordData.words;
  } catch (error) {
    console.error('Error fetching words:', error); // Log if there is an error while fetching words
  }

  /**
   * Generates a random selection of unique words.
   * 
   * @param {number} count - The number of words to generate.
   * @returns {string[]} An array of randomly selected words.
   */
  function generateWords(count: number): string[] {
    if (count > words.length) {
      throw new Error("Requested word count exceeds available unique words.");
    }

    const selectedWords: string[] = [];
    const usedIndices: Set<number> = new Set();

    while (selectedWords.length < count) {
      const randomIndex = Math.floor(Math.random() * words.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        // Replace space with <br>
        const word = words[randomIndex].replace(/ /g, "<br>");
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
  function displayWords(count: number): void {
    generator.innerHTML = ''; // Clear any previously displayed words
    generator.className = `grid-${count}`; // Set the grid class for layout

    const selectedWords = Array(count).fill("?"); // Initially show "?" on each card

    selectedWords.forEach((word) => {
      const card = document.createElement('div'); // Create a new card element for each word
      card.className = 'card'; // Apply the 'card' class for styling

      // Create a wrapper for the text
      const textWrapper = document.createElement('div');
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
  function animateShuffle(count: number): void {
    const cards = Array.from(generator.getElementsByClassName('card')) as HTMLElement[];
    const selectedWords = generateWords(count);
    let shuffleCount = 0;

    function updateWords() {
      cards.forEach(card => {
        const textWrapper = card.querySelector('.text-wrapper') as HTMLElement;
        const randomIndex = Math.floor(Math.random() * words.length);
        textWrapper.innerHTML = words[randomIndex].replace(/ /g, "<br>"); // Replace space with <br>
      });

      shuffleCount++;
      if (shuffleCount < MAX_SHUFFLE_COUNT) {
        setTimeout(updateWords, SHUFFLE_INTERVAL); // Change words quickly
      } else {
        // Set final words after shuffling
        cards.forEach((card, index) => {
          const textWrapper = card.querySelector('.text-wrapper') as HTMLElement;
          textWrapper.innerHTML = selectedWords[index]; // Final words
        });
      }
    }

    // Start the shuffling
    updateWords();
  }

  // Initial display with a default selection of 3 words
  displayWords(3);

  // Event listener to update the word count and re-display words when the dropdown selection changes
  wordCountSelect.addEventListener('change', (event) => {
    const selectedCount = parseInt((event.target as HTMLSelectElement).value, 10);
    displayWords(selectedCount); // Redisplay with "?" initially
  });

  // Event listener to shuffle and regenerate the words when the 'Shuffle' button is clicked
  shuffleBtn.addEventListener('click', () => {
    const selectedCount = parseInt(wordCountSelect.value, 10);
    animateShuffle(selectedCount); // Animate shuffling of words
  });
});
