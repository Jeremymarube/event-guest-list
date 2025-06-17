# Event Guest List Manager

This is a simple web app for managing an event guest list. It was built using JavaScript to manipulate the DOM without  dynamically reloading the page.
## Author
**Jeremy Marube**

---

## Introduction
This project is a code challenge to build an Event Guest List Manager where users can add and manage guests in real-time. The app demonstrates working with forms, capturing user input, and updating the page dynamically with JavaScript.

---

## Deliverables
* Add guest names via an input form

* Display the guest list dynamically on the page

* Remove guests from the list using the delete button

* Limit guest list to a maximum of 10 people (with alert notification)

* Toggle guest RSVP status between “Attending” and “Not Attending”

  ---
  
## Stretch Deliverables
* Categorize guests as Friend, Family, or Colleague with color-coded tags

* Display the time when each guest was added

* Edit guest names with an Edit button

* Additional custom features to enhance the app

  ---
  
## File Structure
```
├── README.md        # This file
├── index.html       # HTML layout
├── style.css        # CSS styling
└── src
    └── index.js     # JavaScript logic
```

---

##  Installation & Usage

1. Clone the repository:
```git clone <your-repo-url>```

2. Open index.html in your web browser.

3. Use the input field to type a guest's name and click "Submit" to add them to the list.

4. Use the “Remove” button to delete guests.

5. Toggle RSVP status by clicking the RSVP toggle button next to each guest.
 
## How It Works
  
* The app listens for form submissions and adds guests to the list dynamically.

* Guests are displayed as list items with controls for removal and RSVP toggling.

* The app enforces a guest limit of 10 and alerts the user if exceeded.

* JavaScript manipulates the DOM elements without refreshing the page.

## Testing

* Manually test all functionality in the browser.

* Use console.log() to debug as needed.

* Reload the page frequently to see changes during development.

  ---

## Submission
  Once you’ve completed your project:
  
  1. Push your code to GitHub:
    ```
   git add .
   git commit -m "Final commit for Event Guest List Manager"
   git push origin main
    ```
    
