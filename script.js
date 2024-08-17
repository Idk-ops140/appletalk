function addUser() {
    const username = document.getElementById('username').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (username) {
        if (rememberMe) {
            localStorage.setItem('username', username);
        }
        document.getElementById('post-section').classList.remove('hidden');
    }
}

function addPost() {
    const postText = document.getElementById('postText').value;
    if (postText) {
        const postsDiv = document.getElementById('posts');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = postText;
        postsDiv.appendChild(newPost);
        document.getElementById('postText').value = '';
    }
}

window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('rememberMe').checked = true;
        document.getElementById('post-section').classList.remove('hidden');
    }
}
