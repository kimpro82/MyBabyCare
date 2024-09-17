// Idea Generator v1.0 Beta
// author : kimpro82
// date   : 2024.09.17

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
   * Generates a random selection of words.
   * 
   * @param {number} count - The number of words to generate.
   * @returns {string[]} An array of randomly selected words.
   */
  function generateWords(count: number): string[] {
    const selectedWords: string[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      selectedWords.push(words[randomIndex]); // Randomly select words from the 'words' array
    }
    return selectedWords;
  }

  /**
   * Displays the selected number of words in the 'generator' container.
   * Adjusts the grid layout based on the number of words.
   * 
   * @param {number} count - The number of words to display.
   */
  function displayWords(count: number): void {
    generator.innerHTML = ''; // Clear any previously displayed words
    generator.className = `grid-${count}`; // Set the grid class for layout

    const selectedWords = generateWords(count); // Get the randomly selected words

    selectedWords.forEach((word) => {
      const card = document.createElement('div'); // Create a new card element for each word
      card.className = 'card'; // Apply the 'card' class for styling
      card.textContent = word; // Set the word as the content of the card
      generator.appendChild(card); // Append the card to the generator container
    });
  }

  // Initial display with a default selection of 3 words
  displayWords(3);

  // Event listener to update the word count and re-display words when the dropdown selection changes
  wordCountSelect.addEventListener('change', (event) => {
    const selectedCount = parseInt((event.target as HTMLSelectElement).value, 10);
    displayWords(selectedCount);
  });

  // Event listener to shuffle and regenerate the words when the 'Shuffle' button is clicked
  shuffleBtn.addEventListener('click', () => {
    const selectedCount = parseInt(wordCountSelect.value, 10);
    displayWords(selectedCount); // Redisplay with the currently selected number of words
  });
});
