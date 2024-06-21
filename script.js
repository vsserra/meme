document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const content = document.getElementById('content');

    noButton.addEventListener('mouseover', function() {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', function() {
        // Remove the existing content
        content.innerHTML = '';

        // Create a container for the video
        const videoContainer = document.createElement('div');
        videoContainer.id = 'videoContainer';

        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.id = 'videoElement';
        videoElement.src = '7642050947611902164.mp4';  // Substitua pelo caminho do seu vídeo
        videoElement.controls = true;
        videoElement.autoplay = true;

        // Append the video element to the container
        videoContainer.appendChild(videoElement);

        // Append the container to the body
        document.body.appendChild(videoContainer);

        // Change background animation
        document.body.style.animation = 'fastBackgroundColorChange 1s infinite';

        // Add floating images
        const images = [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'img8.jpg',
            'img9.jpg',
            'img10.jpg',
            'img11.jpg',
            'img12.gif',
            // Adicione mais caminhos de imagens conforme necessário
        ];

        const videoRect = videoContainer.getBoundingClientRect();
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'floating-image';

            // Define a posição inicial dentro da área visível e fora do vídeo
            let attempts = 0;
            let x, y;
            do {
                x = Math.random() * (window.innerWidth - img.width);
                y = Math.random() * (window.innerHeight - img.height);
                attempts++;
            } while (
                attempts < 100 && (
                    (x > videoRect.left - img.width && x < videoRect.right) ||
                    (y > videoRect.top - img.height && y < videoRect.bottom)
                )
            );

            img.style.top = `${y}px`;
            img.style.left = `${x}px`;
            document.body.appendChild(img);
        });
    });
});
