const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const githubContainer = document.querySelector('#github');
const dark = document.querySelector('#darkmode');


dark.addEventListener('click', function() { 
    if (dark.textContent === "light") {
         dark.textContent = "dark"; 
         document.querySelector('.sun').classList.add("hidden");
          document.querySelector('.moon').classList.remove("hidden");
          document.querySelector("body").classList.add("bg-blue-950");
          document.querySelector('.titre').classList.add("text-white");
        dark.classList.add("text-white");
         } else { 
            dark.textContent = "light";
             document.querySelector('.moon').classList.add("hidden");
              document.querySelector('.sun').classList.remove("hidden");
              document.querySelector("body").classList.remove("bg-blue-950");
              document.querySelector('.titre').classList.remove("text-white");
              dark.classList.remove("text-white");
             }
             });

             searchButton.addEventListener('click', async function () {
                const username = searchInput.value;

    const url = `https://api.github.com/users/${username}`;
        let response = await fetch(url);

        let data = await response.json();

        displayUser(data);
    
}
            );

function displayUser(user) {
    githubContainer.innerHTML = `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden border transition-shadow hover:shadow-xl">
            <img src="${user.avatar_url}" class="w-full h-64 object-cover">
            <div class="p-6">
                <h3 class="font-bold text-xl mb-2">${user.login}</h3>
                <p class="text-gray-700 mb-4">${user.bio || 'No bio available'}</p>
                <div class="flex justify-between text-sm">
                    <span>Followers: ${user.followers}</span>
                    <span>Following: ${user.following}</span>
                </div>
                <a href="${user.html_url}" target="_blank" 
                   class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Profile
                </a>
            </div>
        </div>
    `;
}

