// Global Variables/State

const postsState = [];

// DOM Element Selection

const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title-input');
const titleError = document.getElementById('title-error');
const contentInput = document.getElementById('content-input');
const contentError = document.getElementById('content-error');
const postsContainer = document.getElementById('posts-list');
const submitBtn = document.getElementById('submit-btn');
const charCount = document.getElementById('char-count');

// Load Posts from localStorage

document.addEventListener('DOMContentLoaded', () => {
  const savedPost = localStorage.getItem('savedPost');
  if (savedPost) {
    const { title, content } = JSON.parse(savedPost);
    titleInput.value = title;
    contentInput.value = content;
    // updateCharCount();
  }
});

// Render Posts Function

function createPostElement(post, index) {
  titleInput.value.trim();
  contentInput.value.trim();
}
