document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.detalhesproj').forEach((proj) => {
        proj.addEventListener('click', () => {
          const imageContainer = proj.querySelector('.project-image-container');
          
          imageContainer.classList.toggle('expanded');
        });
      });
});