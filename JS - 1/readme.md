# 🥁 Drum Kit

This project is part of the **JavaScript30 challenge**—30 projects in 30 days using vanilla JavaScript.


```
Live link : https://kitdrum3.netlify.app/
```

## 🎯 Overview
This is a **virtual drum kit** that lets you play drum sounds by pressing keys on your keyboard. It’s a great demonstration of:
- **Event handling**
- **Audio playback**
- **Dynamic CSS transitions**

## ✨ Features
✅ Press keys (A–L) to play drum sounds  
✅ Each key triggers a unique sound (e.g., kick, snare, tom)  
✅ Visual animation when keys are pressed  
✅ Clean, responsive layout  
✅ Background image for an engaging look  

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## ⚙️ How It Works
1. **HTML** defines the keys and audio elements.
2. **JavaScript**:
   - Listens for `keydown` events.
   - Matches the pressed key to the corresponding audio.
   - Plays the sound and adds a `.playing` class for animation.
   - Removes the animation class when the CSS transition ends.
3. **CSS**:
   - Styles keys with borders, shadows, and scaling on press.
   - Adds a background image for better visuals.

## 🧩 How to Use
- Clone the repository:

- 
  ```bash
  
  git clone https://github.com/yourusername/drum-kit.git
