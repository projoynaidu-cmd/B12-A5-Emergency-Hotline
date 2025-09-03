# Emergency Hotline

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [FAQ](#faq)
- [Questions & Answers](#questions--answers)

## About The Project

This project is a web application that provides a directory of emergency hotline numbers in Bangladesh. Users can view, call, and copy hotline numbers for various services like police, ambulance, fire service, etc. The application also keeps a history of the calls made.

## Features

-   **Emergency Hotline Directory:** Browse a list of emergency services with their hotline numbers.
-   **One-click Calling:** Click a button to simulate a call to the selected service.
-   **Copy Number:** Easily copy a hotline number to the clipboard.
-   **Call History:** Keep track of the calls you've made.
-   **Coin System:** A simple gamified system where calls cost "coins".
-   **Favorites:** Mark your most used hotlines.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You don't need any special software, just a modern web browser.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/B12-A5-Emergency-Hotline.git
    ```
2.  Open `index.html` in your browser.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  You will see a list of emergency hotline cards.
3.  Click the "Call" button on a card to simulate a call.
4.  Click the "Copy" button to copy the hotline number to your clipboard.
5.  The calls you make will be added to the "Call History" section.

## FAQ

1.  **What is the purpose of the "coin" system?**
    The coin system is a simple gamified feature to make the application more interactive. Each call costs a certain number of coins.

2.  **Is this a real application that can make calls?**
    No, this is a front-end project for demonstration purposes. Clicking the "Call" button will simulate a call by showing an alert, but it will not make a real phone call.

3.  **How can I add more hotline numbers?**
    The hotline numbers are currently hardcoded in the application. To add more, you would need to modify the source code.

## 📖 Questions & Answers

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **getElementById** → Selects a single element by its unique `id`. Always returns one element or `null`.
- **getElementsByClassName** → Selects all elements with a specific class. Returns an *HTMLCollection* (live list).
- **querySelector** → Selects the *first* element that matches a CSS selector (id, class, tag, attribute etc.).
- **querySelectorAll** → Selects *all* elements that match a CSS selector. Returns a *NodeList* (not live).

---

### 2. How do you create and insert a new element into the DOM?
1. Use `document.createElement("tagName")` → creates a new element.
2. Add content using `.textContent` or `.innerHTML`.
3. Append it to an existing element using:
   - `appendChild(newElement)`
   - or `parent.append(newElement)`  
Example:
```js
const div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);
```

---

### 3. What is Event Bubbling and how does it work?

* Event Bubbling is when an event starts from the *deepest/target element* and moves upward to its parent, grandparent, and so on until it reaches `document`.
* Example: If you click on a button inside a div, the event first fires on the button, then the div, then the body, then document.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

* Event Delegation is a technique where you attach an event listener to a **parent element** instead of each child.
* It works because of **event bubbling**.
* Useful because:

  * You don’t need to attach listeners to every small element.
  * Saves memory and improves performance.
  * Dynamically added child elements also work automatically.

---

### 5. Difference between preventDefault() and stopPropagation()?

* **preventDefault()** → Stops the default browser action (e.g., stopping a form from submitting, stopping a link from opening).
* **stopPropagation()** → Stops the event from bubbling up (so parent elements won’t receive the event).
* Example: In a form, `preventDefault()` stops reload, while `stopPropagation()` prevents parent listeners from triggering.