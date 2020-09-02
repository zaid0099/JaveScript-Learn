//  ==========-- Floater --==========
const body = document.body;
const input = document.querySelector('input[type = text]');
const overlay = document.querySelector('.overlay');

function showFloater() {
    body.classList.add('show-floater');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        //
    }
    body.classList.remove('show-floater');
}

input.addEventListener('focusin', showFloater);
// input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

//  ==========-- Add Bookmark --==========

//  =======- Determinat Variables -=======
const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmarks-form');
const bookmarkInput = document.querySelector('input[type=text]');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// =========================================================================== try
// const apiUrl = 'https://opengraph.io/api/1.0/site';
// const appId = '58858c7bcf07b61e64257391';
// const myUrl = encodeURIComponent('https://scotch.io/starters/react');

// fetch(apiUrl + '/' + myUrl + 'app_id=' + appId).then((response) => {
// fetch(`${apiUrl}/${myUrl}/'?app_id='${appId}`)
//     .then((response) => response.json())
//     .then(data => );
// =========================================================================== fetch

filllBookkmarkList(bookmarks);

//  =======- Create Bookmark -=======
function createBookmark(e) {
    e.preventDefault();

    const title = bookmarkInput.value;
    const bookmark = {
        title: title,
    };

    bookmarks.push(bookmark);
    filllBookkmarkList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();

    // const bookmark = document.createElement('a');

    // bookmark.className = 'bookmark';
    // bookmark.innerText = title;
    // bookmark.className = 'bookmark';
    // bookmark.href = '#';
    // bookmark.target = '_blank';

    // bookmarksList.appendChild(bookmark);

    // console.table(bookmarks);
}

function filllBookkmarkList(bookmarkd = []) {
    const bookmarksHtml = bookmarks
        .map((bookmark, i) => {
            return `
        <a href="#" class="bookmark" data-id="${i}">
        <div class="img"></div>
        <div class="title">${bookmark.title}</div>
        <span class="fas fa-minus-circle"></span>
        </a>`;
        })
        .join('');

    bookmarksList.innerHTML = bookmarksHtml;

    // let bookmarksHtml = '';
    // for (let i = 0; i < bookmarks.length; i++) {
    //     bookmarksHtml += `
    //     <a href="#" class="bookmark">
    //         ${bookmarks[i].title}
    //     </a>`;
    // }
    // console.log(bookmarksHtml);
}

//  =======- Local Storage -=======
localStorage.setItem('my_thing', 'something');

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

//  =======- Remove -=======
function removeBookmark(e) {
    if (!e.target.matches('.fa-minus-circle')) return;

    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    filllBookkmarkList(bookmarks);
    storeBookmarks(bookmarks);

    // console.log('Clic on Remove Icon');
    // console.dir(index);
}

//  =======- Handel Events -=======
bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);