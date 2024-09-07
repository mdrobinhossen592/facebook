function toggleText() {
    const textContainer = document.querySelector('.text-container');
    const seeMoreButton = document.querySelector('.see-more-button');
  
    if (textContainer.classList.contains('expanded')) {
      textContainer.classList.remove('expanded');
      seeMoreButton.innerHTML = 'আরও দেখুন';
    } else {
      textContainer.classList.add('expanded');
      seeMoreButton.innerHTML = 'সংক্ষেপ করুন';
    }
  
    seeMoreButton.classList.toggle('show-button');
  }
  