async function searchBible() {
    const query = document.getElementById('search').value;
    if (query) {
        const response = await fetch(`https://bible-api.com/${query}`);
        const data = await response.json();
        document.getElementById('bible-content').innerHTML = data.text ? `<p>${data.text} (${data.reference})</p>` : "<p>No results found.</p>";
    }
}
