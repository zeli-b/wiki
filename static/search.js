// Begin search.js
let searchInput = document.querySelector('#searchInput'),
    searchResult = document.querySelector('#searchResult');

let dataJSON;

// add keydown listener, when user hit '/', it will focus on search input (Desktop)
window.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault()
        searchInput.focus()
    }
})
// add keydown listener, when user hit 'ESC', it will close search result and unfocus search input.
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27)
    {
        searchInput.value = '';
        searchResult.innerHTML = '';
        searchInput.blur()
    }
})
/**
 * Get the posts lists in json format.
 */
const getPostsJSON = async () => {
    let response = await fetch('/index.json')
    let data = await response.json()
    return data
}
/**
 * @param query, element.
 * query: the keyword that the user gives.
 * element: target element to show the result.
 */
const filterPostsJSON = (query, element) => {
    let result, itemsWithElement;
    query = new RegExp(query, 'ig')
    result = dataJSON.filter(item => query.test(item.content))
    itemsWithElement = result.map(item => (
        `<div class="search-result"><h2><a href="${item.url}">${item.title}</a></h2><p>${item.content}</p></div>`
    ))
    itemsWithElement.unshift(`<p>To cancel search, Press 'ESC'</p>`)
    element.innerHTML = itemsWithElement.join('');
}
/**
 * searchInputAction take two arguments, event and callback
 */ 
const searchInputAction = (event, callback) => {
    searchInput.addEventListener(event, callback)
}
/**
 * When the user focuses on the search input, the function getPostsJSON is called.
 */
searchInputAction('focus', () => getPostsJSON().then(data => dataJSON = data))
/**
 * filtering result with the query that user given on search input.
 */
searchInputAction('keyup', (event) => filterPostsJSON(event.target.value, searchResult))
