// ===== Projects Page - Filter & Lightbox =====

document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      projectItems.forEach(function (item) {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox
  projectItems.forEach(function (item) {
    const card = item.querySelector('.project-card');
    if (card) {
      card.addEventListener('click', function () {
        const img = this.querySelector('img');
        if (img && lightbox) {
          lightboxImg.src = img.src.replace('w=600', 'w=1200');
          lightbox.classList.add('active');
        }
      });
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('active');
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox) lightbox.classList.remove('active');
  });
});
