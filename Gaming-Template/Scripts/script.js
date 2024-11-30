// Get elements
const prevButton = document.querySelector('.slider-button.prev')
const nextButton = document.querySelector('.slider-button.next')
const gamesList = document.querySelector('.games-list')
const gamesSlider = document.querySelector('.games-slider')

// Set the initial scroll position
let currentIndex = 0
let itemsToShow = 3 // Default value for smaller screens
const itemWidth = 250 + 15 // Width of each item plus the gap

// Calculate the number of items that can be displayed based on the slider width
const calculateItemsToShow = () => {
  const sliderWidth = gamesSlider.offsetWidth
  itemsToShow = Math.floor(sliderWidth / itemWidth) // Calculate based on width
}

// Handle next button click
nextButton.addEventListener('click', () => {
  if (currentIndex < gamesList.children.length - itemsToShow) {
    currentIndex++
    gamesList.style.transform = `translateX(-${currentIndex * itemWidth}px)`
  }
})

// Handle previous button click
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    gamesList.style.transform = `translateX(-${currentIndex * itemWidth}px)`
  }
})

// Update the number of items when the window is resized
window.addEventListener('resize', () => {
  calculateItemsToShow()
  gamesList.style.transform = `translateX(-${currentIndex * itemWidth}px)` // Reset position after resize
})

// Initialize the item count based on the initial slider size
calculateItemsToShow()
