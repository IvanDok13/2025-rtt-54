// Global Variables/State

const postsState = [];

// DOM Element Selection

const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const titleError = document.getElementById('title-error');
const contentInput = document.getElementById('content');
const contentError = document.getElementById('content-error');
const postsContainer = document.getElementById('posts-list');
const submitBtn = document.getElementById('submit-btn');
const charCount = document.getElementById('char-count');
const emptyInfo = document.getElementById('empty-info');

// Load Posts from localStorage

document.addEventListener('DOMContentLoaded', () => {
  const savedPost = localStorage.getItem('savedPosts');
  if (savedPost) {
    const parsedPosts = JSON.parse(savedPost);
    postsState.length = 0;
    postsState.push(...parsedPosts);
    renderPosts();
    // updateCharCount();
  }
});

// Render Posts Function

function createPostElement(post, index) {
  const postDiv = document.createElement('div');
  postDiv.className = 'posts-container';
  postDiv.dataset.index = String(index);

  const postHeader = document.createElement('h3');
  postHeader.className = 'post-header';
  postHeader.textContent = post.title.trim();

  const postText = document.createElement('p');
  postText.className = 'blog-post';
  postText.textContent = post.content.trim();

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  postDiv.appendChild(postHeader);
  postDiv.appendChild(postText);
  postDiv.appendChild(deleteBtn);

  return postDiv;
}

function renderPosts() {
  postsContainer.innerHTML = '';
  if (!postsState.length) {
    emptyInfo.style.display = '';
    return;
  }
  emptyInfo.style.display = 'none';

  postsState.forEach((post, i) =>
    postsContainer.appendChild(createPostElement(post, i))
  );
}

function createNewPost(title, content) {
  const newPost = {
    title: title.trim(),
    content: content.trim(),
  };

  postsState.push(newPost);
  savePostsToLocalStorage();
  renderPosts();
}

function savePostsToLocalStorage() {
  localStorage.setItem('savedPosts', JSON.stringify(postsState));
}
