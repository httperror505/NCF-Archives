document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = document.getElementById('query').value;
  
      // Send the query to the Node.js server
      fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
          // Display search results
          displayResults(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  
    function displayResults(results) {
      // Clear previous results
      resultsDiv.innerHTML = '';
  
      if (results.length === 0) {
        resultsDiv.innerHTML = 'No matching documents found.';
      } else {
        const ul = document.createElement('ul');
        results.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result;
          ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
      }
    }
  });
  