var extLinks = document.querySelectorAll('a[href^="https"]');

for (let i = 0; i < extLinks.length; i++) {
  if (!extLinks[i].hasAttribute('target')) {
    extLinks[i].setAttribute('target', '_blank');
  }
}
