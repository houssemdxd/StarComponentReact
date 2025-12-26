# ⭐ Reusable Star Rating Component (React)

This project demonstrates how to build a **reusable, customizable star rating component** in React by applying the concept of **lifting state up**.

The component can be reused across different projects and customized with props such as:
- number of stars
- color
- controlled rating value
- hover preview

---

## 🚀 Features

- ⭐ Dynamic number of stars
- 🎨 Customizable color
- 🧠 Controlled component (rating managed by parent)
- 🖱️ Hover preview before selection
- ♻️ Fully reusable component
- 📦 Clean separation of logic and UI

---

## 🧩 Project Structure

src/
│── App.js
│── Star.js // Star & StarRating components
│── Star.css
│── App.css

yaml
Copy code

---

## 🧠 Core Concept: Lifting State Up

The **rating state** is stored in the parent component (`App.js`) and passed down to the `StarRating` component.

This allows:
- global control of the rating
- reuse of the component in multiple places
- better state management

---

## 📌 Usage Example

### `App.js`

```jsx
import { useState } from "react";
import StarRating from "./Star";

function App() {
  const [rating, setRating] = useState(0);

  function onRating(value) {
    setRating(value);
  }

  return (
    <StarRating
      maxlength={10}
      rate={rating}
      onRating={onRating}
      color="red"
    />
  );
}

export default App;
⚙️ Props API
<StarRating />
Prop name	Type	Description
maxlength	number	Number of stars to display
rate	number	Current rating value
onRating	function	Callback when rating changes
color	string	Star color

🧩 Internal Components
StarRating
Manages hover state

Renders stars dynamically using Array.from

Calls parent callback on click

Star
Stateless UI component

Displays filled or empty SVG star

Handles click and hover events

✨ Example Behavior
Hover over stars → preview rating

Click a star → update rating

Rating value updates instantly

Component re-renders based on props

🎯 Why This Component Is Useful
Can be reused in:

product reviews

feedback forms

rating systems

Follows React best practices

Easy to extend (half-stars, animations, keyboard suppor