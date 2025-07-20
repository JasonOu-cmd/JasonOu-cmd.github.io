// Animate images and headers on mouseover, and zoom text/image on click

// Change mouse cursor to a green dot for the whole page
// SVG cursor technique inspired by: 
// https://css-tricks.com/using-svg-as-an-html5-cursor/
// https://stackoverflow.com/questions/25704650/how-to-create-a-custom-cursor-using-svg
document.documentElement.style.cursor =
  'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><circle cx=\'8\' cy=\'8\' r=\'8\' fill=\'%2300c853\'/></svg>") 8 8, pointer';

// Animate images
document.querySelectorAll('img').forEach(img => {
  img.style.transition = 'transform 0.3s, box-shadow 0.3s';
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.08) rotate(-2deg)';
    img.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = '';
    img.style.boxShadow = '';
  });
  img.addEventListener('click', () => {
    img.style.transform = 'scale(1.25)';
    setTimeout(() => {
      img.style.transform = '';
    }, 600);
  });
});

// Animate headers
document.querySelectorAll('h1, h2, h3').forEach(header => {
  header.style.transition = 'color 0.3s, letter-spacing 0.3s, transform 0.3s';
  header.addEventListener('mouseover', () => {
    header.style.color = '#4a90e2';
    header.style.letterSpacing = '0.15em';
    header.style.transform = 'scale(1.07)';
  });
  header.addEventListener('mouseout', () => {
    header.style.color = '';
    header.style.letterSpacing = '';
    header.style.transform = '';
  });
  header.addEventListener('click', () => {
    header.style.transform = 'scale(1.18)';
    setTimeout(() => {
      header.style.transform = '';
    }, 600);
  });
});

// Animate text (paragraphs, list items)
document.querySelectorAll('p, li, address').forEach(el => {
  el.style.transition = 'background 0.3s, color 0.3s, transform 0.3s';
  el.addEventListener('mouseover', () => {
    el.style.background = '#d0eaff';
    el.style.color = '#1a3a5e';
  });
  el.addEventListener('mouseout', () => {
    el.style.background = '';
    el.style.color = '';
  });
  el.addEventListener('click', () => {
    el.style.transform = 'scale(1.13)';
    setTimeout(() => {
      el.style.transform = '';
    }, 600);
  });
});