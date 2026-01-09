const mainSection = document.querySelector('#main-section')
const categorySelector = document.querySelector('#category-dropdown');
const viewCategoryBtn = document.querySelector('#view-category-button');
const categoryList = document.querySelector('#category-list')
const addBookmarkBtn = document.querySelector('#add-bookmark-button');
const formSection = document.querySelector('#form-section');
const categoryName = document.querySelector('.category-name')
const bookmarkName = document.querySelector('#name');
const bookmarkURL = document.querySelector('#url');
const closeFormBtn = document.querySelector('#close-form-button');
const addBookmarkBtnForm = document.querySelector('#add-bookmark-button-form');
const bookmarkList = document.querySelector('#bookmark-list-section');
const closeListBtn = document.querySelector('#close-list-button');
const deleteBookmarkBtn = document.querySelector('#delete-bookmark-button');
const categoryListName = bookmarkList.querySelector('.category-name')

const getBookmarks = () => JSON.parse(localStorage.getItem('data')) || [];

let bookmarksArray = getBookmarks();

const addOrUpdateBookmarks = () => {

  if (!bookmarkName.value.trim()) {
    alert("Please enter a bookmark name.");
    return;
  }

  const bookmark = {
    name: bookmarkName.value,
    category: categorySelector.value,
    url: bookmarkURL.value
  }

  const bookmarkIndex = bookmarksArray.findIndex(find => find.name === bookmark.name);

  if (bookmarkIndex === -1) {
    bookmarksArray.push(bookmark)
  } else {
    bookmarksArray[bookmarkIndex] = bookmark
  }

  localStorage.setItem('data',JSON.stringify(bookmarksArray));

  bookmarkName.value = ''
  bookmarkURL.value = ''
}

const capitalizeFirst = (str) => str.replace(str[0],str[0].toUpperCase())

const displayOrCloseForm = () => {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
}

addBookmarkBtn.addEventListener('click', ()=> {
  categoryName.innerText = capitalizeFirst(categorySelector.value);
  displayOrCloseForm()
});

closeFormBtn.addEventListener('click', ()=> {
  displayOrCloseForm()
});

addBookmarkBtnForm.addEventListener('click', () =>{
  addOrUpdateBookmarks()
  displayOrCloseForm()
});

const displayOrHideCategory = () => {
  mainSection.classList.toggle('hidden');
  bookmarkList.classList.toggle('hidden');
}

const displayCategoryBookmarks = () => {
  categoryList.innerHTML = '';

  let categoryBooks = bookmarksArray.filter(bookmark => bookmark.category === categorySelector.value);

  if (!categoryBooks.length) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`
  } else {
    categoryBooks.forEach(bookmark => {
      const radioId = `${bookmark.name}-${Date.now()}`

    categoryList.innerHTML += `
    <div>
      <input
        id="${radioId}"
        type="radio"
        value="${bookmark.name}"
        name="${bookmark.category}">
        <label for="${radioId}">
          <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
        </label>
      </div>  `
    })
  }
}

viewCategoryBtn.addEventListener('click', ()=> {
  categoryList.innerText = capitalizeFirst(categorySelector.value);
  displayCategoryBookmarks()
  displayOrHideCategory()
});

closeListBtn.addEventListener('click', ()=> {
  displayOrHideCategory()
})

deleteBookmarkBtn.addEventListener('click', ()=> {
  let radioButton = categoryList.querySelector(`input[name="${categorySelector.value}"]:checked`);

  if (!radioButton){
    alert('Please select a bookmark to delete.');
    return
  }

  const bookmarkNameToDelete = radioButton.id.split('-')[0];

  const bookmarkIndex = bookmarksArray.findIndex(
    find => find.name === bookmarkNameToDelete
  );

  if (bookmarkIndex !== -1) {
      bookmarksArray.splice(bookmarkIndex, 1);
      localStorage.setItem('data', JSON.stringify(bookmarksArray));

      displayCategoryBookmarks();
  }

})
