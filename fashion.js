// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
    }
});

// Dynamic To-Do List
document.getElementById('add-task').addEventListener('click', function() {
    let newTask = document.getElementById('new-task').value;
    if (newTask.trim() !== "") {
        let li = document.createElement('li');
        li.textContent = newTask;
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            this.parentElement.remove();
        });
        li.appendChild(removeBtn);
        document.getElementById('task-list').appendChild(li);
        document.getElementById('new-task').value = '';
    }
});

// Dynamic Image Gallery
document.getElementById('add-image').addEventListener('click', function() {
    let imageUrl = document.getElementById('image-url').value;
    if (imageUrl.trim() !== "") {
        let img = document.createElement('img');
        img.src = imageUrl;
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            this.previousElementSibling.remove();
            this.remove();
        });
        let div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(removeBtn);
        document.getElementById('image-gallery').appendChild(div);
        document.getElementById('image-url').value = '';
    }
});