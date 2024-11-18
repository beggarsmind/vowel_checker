function checkVowels() {
  const name = document.getElementById("nameInput").value;
  const vowels = ["a", "e", "i", "o", "u"];
  const foundVowels = [];
  const vowelCount = {};

  // Loop through each character in the name and check if it's a vowel
  for (const char of name.toLowerCase()) {
    if (vowels.includes(char)) {
      // Track unique vowels
      if (!foundVowels.includes(char)) {
        foundVowels.push(char);
      }
      // Count the occurrences of each vowel
      vowelCount[char] = (vowelCount[char] || 0) + 1;
    }
  }

  const resultElement = document.getElementById("result");
  if (foundVowels.length > 0) {
    // Create a string for each vowel and its count
    const vowelList = foundVowels
      .map((vowel) => `${vowel}: ${vowelCount[vowel]}`)
      .join(", ");
    // Calculate the total number of vowels
    const totalVowels = Object.values(vowelCount).reduce(
      (sum, count) => sum + count,
      0
    );
    resultElement.innerHTML = "Results : ";
    // Display the vowel list on the first line
    resultElement.innerHTML = `Vowels: ${vowelList}<br><br>`;
    // Display the total count of vowels on the second line
    resultElement.innerHTML += `Total vowels: ${totalVowels}`;
  } else {
    resultElement.textContent = "No vowels found in the name.";
  }
}
