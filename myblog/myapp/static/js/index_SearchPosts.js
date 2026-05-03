document.addEventListener('DOMContentLoaded', function() {
    
    function searchPosts() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
        const articles = document.querySelectorAll("article.blog-post");
        let foundResults = false;

        articles.forEach(article => {
            const title = article.querySelector("h2").innerText.toLowerCase();
            const content = article.querySelector(".post-text").innerText.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                article.style.display = "block";
                article.classList.add("highlight");
                foundResults = true;
            } else {
                article.style.display = "none";
            }
        });

        
        if (!foundResults && searchTerm.length > 0) {
            alert("Nu s-au găsit rezultate pentru: " + searchTerm);
        }
    }

    
    function resetSearch() {
        document.getElementById("searchInput").value = "";
        document.querySelectorAll("article.blog-post").forEach(article => {
            article.style.display = "block";
            article.classList.remove("highlight");
        });
    }

    
    document.getElementById("searchButton").addEventListener("click", searchPosts);
    document.getElementById("resetButton").addEventListener("click", resetSearch);
    
    
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchPosts();
        }
    });
});