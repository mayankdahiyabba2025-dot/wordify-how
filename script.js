const uploadCard = document.getElementById('upload-card');
const uploadSection = document.getElementById('upload-section');
const backButton = document.getElementById('backButton');
const cancelButton = document.getElementById('cancelButton');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('fileInput');
const statusText = document.getElementById('statusText');
const fileGallery = document.getElementById('fileGallery');
const loadingSection = document.getElementById('loading-section');
const loadingText = document.getElementById('loading-text');

uploadCard.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  document.querySelector('.main-options').classList.add('hidden');
  uploadSection.classList.remove('hidden');
  simulateUpload();
});

backButton.addEventListener('click', () => {
  uploadSection.classList.add('hidden');
  document.querySelector('.main-options').classList.remove('hidden');
});

cancelButton.addEventListener('click', () => {
  progress.style.width = "0%";
  statusText.textContent = "❌ Upload cancelled.";
  setTimeout(() => {
    uploadSection.classList.add('hidden');
    document.querySelector('.main-options').classList.remove('hidden');
  }, 1000);
});

function simulateUpload() {
  uploadSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      loadingText.textContent = "✅ Conversion complete!";
      setTimeout(() => {
        loadingSection.classList.add('hidden');
        document.querySelector('.main-options').classList.remove('hidden');

        // Add the new file to gallery
        const newFile = document.createElement('div');
        newFile.classList.add('file-item');
        newFile.innerHTML = `
          <img src="https://cdn-icons-png.flaticon.com/512/888/888883.png" alt="Word icon">
          <span>Converted_File_${Date.now()}.docx</span>
        `;
        fileGallery.prepend(newFile);
      }, 1200);
    } else {
      width += 5;
      document.querySelector('.loading-progress').style.width = width + "%";
    }
  }, 200);
}
