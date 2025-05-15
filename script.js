document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const type = item.getAttribute('data-type');
    const src = item.getAttribute('data-src');
    const content = document.getElementById('lightbox-content');

    content.innerHTML = '';

    if (type === 'image') {
      const img = document.createElement('img');
      img.src = src;
      content.appendChild(img);
    } else if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      content.appendChild(video);
    }

    document.getElementById('lightbox').classList.remove('hidden');
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').classList.add('hidden');
  document.getElementById('lightbox-content').innerHTML = '';
});// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation for gallery images
window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 200);
    });
});

// Add image modal functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
