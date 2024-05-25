document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('photoUpload');
    const files = fileInput.files;
    
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const photoGallery = document.getElementById('photoGallery');
            const img = document.createElement('img');
            img.src = e.target.result;
            photoGallery.appendChild(img);
        };
        
        reader.readAsDataURL(file);
    }
    
    fileInput.value = ''; // Reset the file input
});
