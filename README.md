# Bubble Animation Website

This is a React-based interactive website featuring a floating bubble animation that reacts to the user's scroll and mouse movements. The bubble grows in size as the user scrolls down the page and bursts when reaching the footer. This project demonstrates a smooth animation using `react-spring` and customized CSS for animations.

## Features

- **Floating Bubble**: The bubble floats around the screen as the user scrolls down.
- **Scroll Interaction**: The bubble's size increases as the user scrolls down the page.
- **Burst Effect**: When the user scrolls to the footer, the bubble bursts with a smooth animation.
- **Mouse Interaction**: The bubble follows the mouse cursor when hovered over.
- **Responsive**: The website is fully responsive and works on all screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Spring**: A spring-physics-based animation library for React.
- **CSS**: For styling and animations.
- **JavaScript**: For logic and event handling.

## Project Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bubble-animation-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bubble-animation-website
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Your project should now be running at `http://localhost:3000`.

## Project Structure

The project is structured as follows:

```
bubble-animation-website/
│
├── src/
│   ├── App.js          # Main React component for the app
│   ├── App.css         # Styling for the app (including bubble animation)
|   ├── bubble.PNG      # Image of the bubble
│   └── index.js        # Entry point for the React app
│
├── public/
│   └── index.html      # HTML template for the app
│
└── package.json        # Project dependencies and scripts
```

## How It Works

- **Bubble Animation**: The bubble is created as an `animated.div` component using `react-spring`. Its position is animated based on the user's scroll and mouse movements.
- **Scroll Interaction**: The `handleScroll` function tracks the scroll position and moves the bubble accordingly. The bubble’s size increases as the user scrolls.
- **Burst Effect**: When the user reaches the footer, the `setBurst(true)` triggers the burst animation, making the bubble shrink and disappear.
- **Mouse Interaction**: The bubble follows the mouse pointer when hovered and moves responsively.

## Customization

- **Bubble Image**: Replace the `bubble.PNG` file in the `public` folder with your own bubble image.
- **Animation Speed**: You can adjust the `scrollY` multiplier in the `handleScroll` function to make the bubble move faster or slower.
- **Bubble Size**: Modify the `newSize` calculation in `handleScroll` to control how large the bubble gets when the user scrolls.
