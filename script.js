const placeholderTexts = [
    "Company Registration",
    "GST Registration",
    "NBFC Registration"
];

const searchInput = document.querySelector('.search-bar');

let currentTextIndex = 0;
let currentCharIndex = 0;

function typePlaceholder() {
    const currentPlaceholderText = placeholderTexts[currentTextIndex];
    searchInput.setAttribute('placeholder', currentPlaceholderText.slice(0, currentCharIndex + 1));
    currentCharIndex = (currentCharIndex + 1) % (currentPlaceholderText.length + 1);

    if (currentCharIndex === 0) {
        currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
    }

    setTimeout(typePlaceholder, 150);
}

typePlaceholder();
