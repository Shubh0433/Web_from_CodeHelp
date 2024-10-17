DOM - Document Objecxt Model
BOM - Browser Object Model

who create window object
-> browser create window object, and browser ke kh ke ise bnd bhi krva skte h

what is DOM
The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, where each element (like tags, attributes, and content) is treated as a node. This allows programs (such as JavaScript) to manipulate the content, structure, and style of a webpage dynamically.
In simple words, the **DOM** is like a map of a webpage that shows all its parts (like text, images, buttons) in a tree-like structure. It lets you use JavaScript to change things on the page, like updating text or adding new elements, without reloading the whole page.

HTML code Jise hm ek JS Object me convert krte h or vo document khlata h

**`$0`** refers to the most recently inspected element in the browser's Developer Tools console.

Here are different element access methods in JavaScript with examples:

1. **`document.getElementById(id)`**: Selects an element by its unique `id`.
   ```javascript
   let element = document.getElementById('header');
   console.log(element); // <div id="header">...</div>
   ```

2. **`document.getElementsByClassName(class)`**: Selects all elements with a specific class name.
   ```javascript
   let elements = document.getElementsByClassName('item');
   console.log(elements); // HTMLCollection of all elements with class "item"
   ```

3. **`document.getElementsByTagName(tag)`**: Selects all elements with a specific HTML tag name.
   ```javascript
   let paragraphs = document.getElementsByTagName('p');
   console.log(paragraphs); // HTMLCollection of all <p> elements
   ```

4. **`document.querySelector(selector)`**: Selects the first element that matches a CSS selector.
   ```javascript
   let firstDiv = document.querySelector('div');
   console.log(firstDiv); // First <div> element on the page
   ```

5. **`document.querySelectorAll(selector)`**: Selects all elements that match a CSS selector.
   ```javascript
   let allItems = document.querySelectorAll('.item');
   console.log(allItems); // NodeList of all elements with class "item"
   ```

6. **`document.forms[name or index]`**: Accesses a form element by its name or index.
   ```javascript
   let form = document.forms[0]; // or document.forms['myForm'];
   console.log(form); // The first <form> element or the form with name "myForm"
   ```

7. **`document.images`**: Returns all the image elements on the page.
   ```javascript
   let images = document.images;
   console.log(images); // HTMLCollection of all <img> elements
   ```

8. **`document.links`**: Returns all `<a>` elements that have an `href` attribute.
   ```javascript
   let links = document.links;
   console.log(links); // HTMLCollection of all <a> elements with href attributes
   ```


Here are different ways to **update elements** in JavaScript, along with examples:

1. **`element.innerHTML`**: Updates the HTML content inside an element.
   ```javascript
   let element = document.getElementById('header');
   element.innerHTML = '<h2>Updated Header</h2>';
   ```

2. **`element.innerText` / `element.textContent`**: Updates the text content inside an element.
   ```javascript
   let para = document.querySelector('p');
   para.innerText = 'Updated text content'; // or para.textContent = 'Updated text content';
   ```

3. **`element.setAttribute(attribute, value)`**: Updates or adds a specific attribute.
   ```javascript
   let img = document.querySelector('img');
   img.setAttribute('src', 'new-image.jpg'); // Changes the image source
   ```

4. **`element.style.property = value`**: Updates the inline CSS style of an element.
   ```javascript
   let div = document.getElementById('box');
   div.style.backgroundColor = 'blue'; // Changes background color to blue
   ```

5. **`element.classList.add(className)`**: Adds a new class to an element.
   ```javascript
   let button = document.querySelector('button');
   button.classList.add('active'); // Adds the "active" class to the button
   ```

6. **`element.classList.remove(className)`**: Removes a class from an element.
   ```javascript
   let button = document.querySelector('button');
   button.classList.remove('active'); // Removes the "active" class
   ```

7. **`element.classList.toggle(className)`**: Toggles a class on or off.
   ```javascript
   let div = document.getElementById('toggleDiv');
   div.classList.toggle('hidden'); // Adds or removes the "hidden" class
   ```

8. **`element.remove()`**: Removes an element from the DOM.
   ```javascript
   let div = document.getElementById('header');
   div.remove(); // Removes the header div from the DOM
   ```

9. **`element.appendChild(node)`**: Adds a new child element to the target element.
   ```javascript
   let list = document.getElementById('list');
   let newItem = document.createElement('li');
   newItem.innerText = 'New List Item';
   list.appendChild(newItem); // Adds the new <li> to the list
   ```

10. **`element.replaceChild(newNode, oldNode)`**: Replaces an existing child element with a new one.
   ```javascript
   let oldItem = document.getElementById('item1');
   let newItem = document.createElement('li');
   newItem.innerText = 'Replaced Item';
   list.replaceChild(newItem, oldItem); // Replaces item1 with the new item
   ```

   
   **`innerText`** aur **`textContent`** dono text ko access aur update karne ke liye use hote hain, lekin unme kuch important farq hain:

1. **`innerText`**:
   - Sirf wo text dikhata hai jo screen par visible hota hai (CSS ke hidden elements ko ignore karta hai).
   - Wo text ko live update karta hai, yaani agar element ka text badalta hai to wo real-time update hota hai.
   
   Example:
   ```javascript
   let para = document.querySelector('p');
   para.innerText = "Visible text only";
   ```

2. **`textContent`**:
   - Pure text ko return karta hai, chahe wo element visible ho ya nahi (hidden elements ka text bhi include karta hai).
   - Isme koi live update nahi hoti, ye direct raw text return karta hai bina formatting ya visibility check kare.

   Example:
   ```javascript
   let para = document.querySelector('p');
   para.textContent = "All text, even hidden";
   ```

**Simple difference**:  
- **`innerText`**: Sirf dikhne wala text handle karta hai.
- **`textContent`**: Pura text, chahe visible ho ya nahi.


In JavaScript, you can add elements to the DOM at different positions using various methods. Here’s how to do it with examples:

### 1. **`appendChild()`**: Adds a new element as the **last child** of the target element.
   ```javascript
   let list = document.getElementById('list');
   let newItem = document.createElement('li');
   newItem.innerText = 'Last List Item';
   list.appendChild(newItem); // Adds as the last child
   ```

### 2. **`prepend()`**: Adds a new element as the **first child** of the target element.
   ```javascript
   let list = document.getElementById('list');
   let newItem = document.createElement('li');
   newItem.innerText = 'First List Item';
   list.prepend(newItem); // Adds as the first child
   ```

### 3. **`insertBefore()`**: Adds a new element **before** a specified child element.
   ```javascript
   let list = document.getElementById('list');
   let newItem = document.createElement('li');
   newItem.innerText = 'Insert Before Item';
   let referenceItem = document.getElementById('item2');
   list.insertBefore(newItem, referenceItem); // Adds before item2
   ```

### 4. **`insertAdjacentHTML()`**: Adds HTML in relation to a specific position relative to the target element.
   ```javascript
   let div = document.getElementById('container');
   
   // Adds new element before the opening tag of the container
   div.insertAdjacentHTML('beforebegin', '<p>Before the container</p>');
   
   // Adds new element after the opening tag (as the first child)
   div.insertAdjacentHTML('afterbegin', '<p>At the beginning of the container</p>');
   
   // Adds new element before the closing tag (as the last child)
   div.insertAdjacentHTML('beforeend', '<p>At the end of the container</p>');
   
   // Adds new element after the closing tag of the container
   div.insertAdjacentHTML('afterend', '<p>After the container</p>');
   ```

### 5. **`replaceChild()`**: Replaces an existing child element with a new one.
   ```javascript
   let list = document.getElementById('list');
   let newItem = document.createElement('li');
   newItem.innerText = 'Replaced Item';
   let oldItem = document.getElementById('item3');
   list.replaceChild(newItem, oldItem); // Replaces item3 with newItem
   ```

### 6. **`after()` and `before()`**: Adds elements directly **after** or **before** a target element.
   ```javascript
   let para = document.getElementById('paragraph');
   
   // Adds new element after the paragraph
   para.after(document.createElement('hr')); // Adds a horizontal line after the paragraph
   
   // Adds new element before the paragraph
   para.before(document.createElement('hr')); // Adds a horizontal line before the paragraph
   ```

### Recap:
- **`appendChild()`**: Adds at the end.
- **`prepend()`**: Adds at the beginning.
- **`insertBefore()`**: Adds before a specified child.
- **`insertAdjacentHTML()`**: Adds in different positions relative to the element.
- **`replaceChild()`**: Replaces an existing child.
- **`after()` / `before()`**: Adds elements right after or before a target element.



Here are different ways to delete (remove) elements in JavaScript:

### 1. **`remove()`**: Removes the element from the DOM.
   ```javascript
   let element = document.getElementById('item1');
   element.remove(); // Removes the element with id 'item1'
   ```

### 2. **`removeChild()`**: Removes a specified child element from its parent.
   ```javascript
   let parent = document.getElementById('list');
   let child = document.getElementById('item2');
   parent.removeChild(child); // Removes 'item2' from the list
   ```

### 3. **`innerHTML = ''`**: Removes all child elements by clearing the inner HTML of the target element.
   ```javascript
   let list = document.getElementById('list');
   list.innerHTML = ''; // Removes all children inside the list element
   ```

### 4. **`replaceChild()`**: Removes an existing child element by replacing it with a new one.
   ```javascript
   let parent = document.getElementById('list');
   let oldItem = document.getElementById('item3');
   let newItem = document.createElement('li');
   newItem.innerText = 'New Item';
   parent.replaceChild(newItem, oldItem); // Replaces 'item3' with 'New Item', effectively deleting 'item3'
   ```

### 5. **`parentNode.removeChild()`**: Removes the target element using its parent node.
   ```javascript
   let element = document.getElementById('item1');
   element.parentNode.removeChild(element); // Removes 'item1' from its parent
   ```

### Recap:
- **`remove()`**: Directly removes the element.
- **`removeChild()`**: Removes a child from its parent.
- **`innerHTML = ''`**: Clears all inner elements.
- **`replaceChild()`**: Removes an element by replacing it.
- **`parentNode.removeChild()`**: Removes an element using its parent node reference.