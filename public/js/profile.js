// pulled starter code from mini profile and past unit assignments

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  // const needed_funding = document.querySelector('#post-funding').value.trim();
  const description = document.querySelector('#blog-contents').value.trim();

  if (name && description) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ post_title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  // .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);