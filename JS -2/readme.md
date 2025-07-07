# Analog Clock - HTML, CSS, JavaScript

This project is a **functional analog watch** built using HTML, CSS, and vanilla JavaScript. It dynamically displays the current time with smoothly rotating hour, minute, and second hands.

---

## ✨ Features

- **Real-time timekeeping** using `Date` object
- **Animated clock hands** that rotate smoothly
- **Stylish design** with a circular border and background
- **Responsive scaling** for different screen sizes

---

## 📂 Project Structure

```
project-folder/
├── index.html # HTML markup
├── style.css # Styling for clock and layout
└── script.js # JavaScript logic to set time

yaml
Copy
Edit
```


---

## 🛠️ How It Works

### HTML

The markup contains:
- A `.clock` container holding:
  - `.clock-face`
    - `.hand.hour-hand`
    - `.hand.min-hand`
    - `.hand.second-hand`

These `.hand` divs are rotated using CSS transforms to indicate the current time.

---

### CSS

- **Clock Styling**
  - Circular border with shadows for a 3D look
  - Positioned center-aligned hands
  - Smooth transitions between rotations

- **Background**
  - A blurred background image fetched from Unsplash for aesthetic appeal

---

### JavaScript

- **Selecting Elements**
  ```javascript
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  ```

