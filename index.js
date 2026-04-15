// Write your code here!
// Step 7: Create async function
async function fetchData() {
  // Apply await to fetch
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();
  // Call displayPosts after fetch (step 6)
  displayPosts([post]);
}

// Step 2: Create function to display posts
function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  if (!ul) return;
  // Clear existing content (optional, but keeps page clean)
  ul.innerHTML = '';
  // Step 4: Loop through posts list
  for (let i = 0; i < posts.length; i++) {
    // Step 5a: Create li tag
    const li = document.createElement('li');
    // Step 5b: Create h1 tag, add title
    const h1 = document.createElement('h1');
    h1.textContent = posts[i].title;
    // Step 5c: Create p tag, add body
    const p = document.createElement('p');
    p.textContent = posts[i].body;
    // Step 5d: Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    // Step 5e: Append li to ul
    ul.appendChild(li);
  }
}

