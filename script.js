// Image data with different placements and captions
const images = [
    { id: 1, src: "images/CK1.jpeg", alt: "CK1", placement: "center", size: "large", caption: "Extended Whānau – Capital Kiwi, 2022", type: "image" },
    { id: 2, src: "images/CK3.jpg", alt: "CK3", placement: "left", size: "fullscreen", caption: "Extended Whānau – Capital Kiwi, 2022. Photo: Le Tans", type: "image" },
    { id: 3, src: "images/CK2.jpeg", alt: "CK2", placement: "right", size: "large", caption: "Extended Whānau – Capital Kiwi, 2022", type: "image" },
    { id: 4, src: "images/temanawa1.mp4", alt: "temanawa 1", placement: "center", size: "large", caption: "Extended Whānau – Te Manawa, 2024", type: "video" },
    { id: 5, src: "images/temanawa2.mp4", alt: "temanawa 2", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau – Te Manawa, 2024", type: "video" },
    { id: 6, src: "images/matariki1.jpeg", alt: "Matariki 1", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau – Matariki Report, 2023", type: "image" },
    { id: 7, src: "images/matariki2.jpeg", alt: "Matariki 2", placement: "center", size: "large", caption: "Extended Whānau – Matariki Report, 2023", type: "image" },
    { id: 8, src: "images/matariki3.jpeg", alt: "Matariki 3", placement: "right", size: "large", caption: "Extended Whānau – Matariki Report, 2023", type: "image" },
    { id: 9, src: "images/rangatira1.jpeg", alt: "Rangatira 1", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau – Rangatira Zine, 2023", type: "image" },
    { id: 10, src: "images/rangatira2.jpeg", alt: "Rangatira 2", placement: "right", size: "large", caption: "Extended Whānau – Rangatira Zine, 2023", type: "image" },
    { id: 11, src: "images/rangatira3.jpeg", alt: "Rangatira 3", placement: "left", size: "large", caption: "Extended Whānau – Rangatira Zine, 2023", type: "image" },
    { id: 12, src: "images/rangatira4.jpeg", alt: "Rangatira 4", placement: "center", size: "large", caption: "Extended Whānau – Rangatira Zine, 2023", type: "image" },
    { id: 13, src: "images/tehau1.jpg", alt: "Tehau 1", placement: "center", size: "large", caption: "Extended Whānau - Te Hau Whakatonu, 2024", type: "image" },
    { id: 14, src: "images/tehau2.jpg", alt: "Tehau 2", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau - Te Hau Whakatonu, 2024", type: "image" },
    { id: 15, src: "images/tematahi.jpg", alt: "Tematahi", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau - Te Tōangaroa, 2024. Photo: Luke Foley-Martin, type: "image" },
    { id: 16, src: "images/tepuna1.jpeg", alt: "Tepuna 1", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau - Te Puna, Tātaki, 2024.", type: "image" },
    { id: 17, src: "images/tepuna2.jpeg", alt: "Tepuna 2", placement: "fullscreen", size: "fullscreen-landscape", caption: "Extended Whānau - Te Puna, Tātaki", type: "image" },
    { id: 18, src: "images/wahine1.jpeg", alt: "Wahine 1", placement: "fullscreen", size: "fullscreen-landscape", caption: "Wahine Toa, 2023, Photo: Jeremy Hooper", type: "image" },
    { id: 19, src: "images/wahine2.jpeg", alt: "Wahine 2", placement: "right", size: "fullscreen", caption: "Wahine Toa, 2023, Photo: Jeremy Hooper", type: "image" },
    { id: 20, src: "images/whetu1.jpg", alt: "Whetu 1", placement: "fullscreen-landscape", size: "fullscreen-landscape", caption: "Extended Whānau – Whetūrangitia, 2022. Photo: Toaki Okano", type: "image" },
    { id: 21, src: "images/whetu2.jpg", alt: "Whetu 2", placement: "left", size: "large", caption: "Extended Whānau – Whetūrangitia, 2022", type: "image" },
    { id: 22, src: "images/whetu3.jpg", alt: "Whetu 3", placement: "right", size: "large", caption: "Extended Whānau – Whetūrangitia, 2022. Photo: Toaki Okano", type: "image" },
    { id: 23, src: "images/whetu4.jpg", alt: "Whetu 4", placement: "fullscreen-landscape", size: "fullscreen-landscape", caption: "Extended Whānau – Whetūrangitia, 2022. Photo: Toaki Okano", type: "image" },
    { id: 24, src: "images/tepatu1.png", alt: "Tepatu 1", placement: "center", size: "large", caption: "Haumi – Te Pā Tū, 2022", type: "image" },
    { id: 25, src: "images/tepatu2.png", alt: "Tepatu 2", placement: "fullscreen-landscape", size: "fullscreen-landscape", caption: "Haumi – Te Pā Tū, 2022. Photo: Damien Nikora", type: "image" },
    { id: 26, src: "images/tepatu5.png", alt: "Tepatu 5", placement: "center", size: "large", caption: "Haumi – Te Pā Tū, 2022 Photo: Damien Nikora", type: "image" }
];

// Color palette for random hover effects
const hoverColors = [
    "#fb7185", // rose
    "#60a5fa", // blue
    "#34d399", // emerald
    "#fbbf24", // amber
    "#a78bfa", // purple
    "#2dd4bf"  // teal
];

// State
let currentIndex = 0;
let isIndexViewVisible = false;
let isAboutVisible = false;

// DOM elements
const carousel = document.getElementById('carousel');
const indexView = document.getElementById('indexView');
const aboutOverlay = document.getElementById('aboutOverlay');
const mainImage = document.getElementById('mainImage');
const mainVideo = document.getElementById('mainVideo');
const imageContainer = document.getElementById('imageContainer');
const imageGrid = document.getElementById('imageGrid');

// Counter elements
const currentNum = document.getElementById('currentNum');
const totalNum = document.getElementById('totalNum');
const currentNum2 = document.getElementById('currentNum2');
const totalNum2 = document.getElementById('totalNum2');

// Caption elements
const imageCaption = document.getElementById('imageCaption');

// Button elements
const homeBtn = document.getElementById('homeBtn');
const homeBtn2 = document.getElementById('homeBtn2');
const indexBtn = document.getElementById('indexBtn');
const closeBtn = document.getElementById('closeBtn');

// Koru animation functions (assuming these are defined elsewhere)
function startKoruAnimation() {
    // Implementation for starting the Koru animation
}

function stopKoruAnimation() {
    // Implementation for stopping the Koru animation
}

// Initialize
function init() {
    updateTotalCount();
    updateCurrentImage();
    createImageGrid();
    setupEventListeners();
    
    // Start the koru animation
    startKoruAnimation();
    
    // Disable context menu
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Disable drag
    document.addEventListener('dragstart', e => e.preventDefault());
}

// Update total count
function updateTotalCount() {
    const total = images.length.toString().padStart(2, '0');
    totalNum.textContent = total;
    totalNum2.textContent = total;
}

// Update current image and counter
function updateCurrentImage() {
    const current = (currentIndex + 1).toString().padStart(2, '0');
    currentNum.textContent = current;
    currentNum2.textContent = current;
    
    const image = images[currentIndex];
    
    // Hide both elements first
    mainImage.classList.add('hidden');
    mainVideo.classList.add('hidden');
    
    // Show the appropriate element
    if (image.type === 'video') {
        mainVideo.src = image.src;
        mainVideo.classList.remove('hidden');
    } else {
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        mainImage.classList.remove('hidden');
    }
    
    // Update caption
    imageCaption.textContent = image.caption;
    
    // Update image positioning and size
    updateImageLayout(image);
    
    // Update background color (every 5th image)
    updateBackgroundColor();
}

// Update image layout based on placement and size
function updateImageLayout(image) {
    // Reset classes
    imageContainer.className = 'image-container';
    mainImage.className = 'main-image';
    mainVideo.className = 'main-image';
    
    // Add placement class to container
    imageContainer.classList.add(image.placement);
    
    // Add size class to both elements
    mainImage.classList.add(image.size);
    mainVideo.classList.add(image.size);
    
    // Keep hidden class if needed
    if (image.type === 'video') {
        mainImage.classList.add('hidden');
    } else {
        mainVideo.classList.add('hidden');
    }
}

// Update background color every 5th image
function updateBackgroundColor() {
    // Remove all color classes
    carousel.className = 'carousel';
    
    // Add color every 5th image
    if ((currentIndex + 1) % 5 === 0) {
        const colorIndex = Math.floor(currentIndex / 5) % 6 + 1;
        carousel.classList.add(`color-bg-${colorIndex}`);
    }
}

// Create image grid for index view
function createImageGrid() {
    imageGrid.innerHTML = '';
    
    images.forEach((image, index) => {
        if (image.type === 'video') {
            const video = document.createElement('video');
            video.src = image.src;
            video.className = 'grid-image';
            video.muted = true;
            video.addEventListener('click', () => selectImage(index));
            imageGrid.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.className = 'grid-image';
            img.draggable = false;
            
            // Load image to get natural dimensions
            img.onload = function() {
                const aspectRatio = this.naturalWidth / this.naturalHeight;
                const width = 200 * aspectRatio;
                this.style.width = width + 'px';
            };
            
            img.addEventListener('click', () => selectImage(index));
            imageGrid.appendChild(img);
        }
    });
}

// Navigation functions
function nextImage() {
    if (!isAboutVisible) {
        currentIndex = (currentIndex + 1) % images.length;
        updateCurrentImage();
    }
}

function prevImage() {
    if (!isAboutVisible) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCurrentImage();
    }
}

function selectImage(index) {
    currentIndex = index;
    updateCurrentImage();
    showCarousel();
}

function showAbout() {
    isAboutVisible = true;
    aboutOverlay.classList.remove('hidden');
    // Hide the name button and index button
    homeBtn.classList.add('hidden');
    indexBtn.classList.add('hidden');
}

function hideAbout() {
    isAboutVisible = false;
    aboutOverlay.classList.add('hidden');
    // Show the name button and index button
    homeBtn.classList.remove('hidden');
    indexBtn.classList.remove('hidden');
}

function showIndex() {
    if (isAboutVisible) {
        hideAbout();
    }
    isIndexViewVisible = true;
    carousel.style.display = 'none';
    indexView.classList.remove('hidden');
    document.body.style.overflow = 'auto';
    
    // Stop the koru animation when in index view
    stopKoruAnimation();
}

function showCarousel() {
    isIndexViewVisible = false;
    carousel.style.display = 'block';
    indexView.classList.add('hidden');
    document.body.style.overflow = 'hidden';
    hideAbout();
    
    // Start the koru animation when returning to carousel
    startKoruAnimation();
}

// Event listeners
function setupEventListeners() {
    // Image click to advance (only if about is not visible)
    imageContainer.addEventListener('click', nextImage);
    
    // About overlay click to hide
    aboutOverlay.addEventListener('click', hideAbout);
    
    // Navigation buttons
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showAbout();
    });
    
    homeBtn2.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showCarousel();
    });
    
    indexBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showIndex();
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showCarousel();
    });
    
    // About links
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('about-link')) {
            e.preventDefault();
            e.stopPropagation();
            
            if (e.target.id === 'aboutIndexLink') {
                showIndex();
            }
        }
    });
    
    // Setup hover effects for about links
    document.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('about-link')) {
            const randomColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
            e.target.style.color = randomColor;
        }
    }, true);
    
    document.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains('about-link')) {
            e.target.style.color = '#000';
        }
    }, true);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                nextImage();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                prevImage();
                break;
            case 'Escape':
                if (isAboutVisible) {
                    hideAbout();
                } else if (isIndexViewVisible) {
                    showCarousel();
                }
                break;
        }
    });
}

// Start the application
init();