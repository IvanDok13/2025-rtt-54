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
  const savedPost = localStorage.getItem('savedPost');
  if (savedPost) {
    const parsedPosts = JSON.parse(savedPosts);
    postsState.length = 0;
    postsState.push(...parsedPosts);
    // renderPosts();
    // updateCharCount();
  }
});

// Render Posts Function
