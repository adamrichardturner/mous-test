// Import the data we are working with from the exported module
import data from "./_incs/data.js";

// Specify the selectors to use
const selectors = {
  viewStaffBtn: '[el="staff-btn"]',
  staffList: '[el="staffList"]'
}

// DOM nodes
const nodes = {
  viewStaffBtn: null,
}

// Click event listeners
const setClickEvents = () => {
  // Select the  btn from the selectors to add a click event.
  // We will remove the click evvent below
  let btn = document.querySelector(selectors.viewStaffBtn);
  btn.addEventListener('click', showStaffMembers);
}

// Show the staff members to the user
const showStaffMembers = () => {
  // Get the btn element from selectors
  let btn = document.querySelector(selectors.viewStaffBtn);
  // Select the staff list to populate with the staff details
  let staffElement = document.querySelector(selectors.staffList);
  // Load staff 
  let staff = loadStaffMembers();
  // Staff returns an array of objects. For each object inset the HTML
  // template into the staff list ul on the page
  staff.forEach(member => {
    staffElement.insertAdjacentHTML('afterbegin', getMemberTemplate(member));
  });
  // Clean up and remove the event listener to prevent repeated clicks and infinite 
  // staff data.
  btn.removeEventListener('click', showStaffMembers);
}

// Load the staff members from the data and store in an array, return this array for use
// when we show staff members.
const loadStaffMembers = () => {
  let staffArray = [];
  for(let i in data) {
    staffArray.push(data[i]);
  }
  return staffArray;
}

// Return the HTML markup for a staff member
const getMemberTemplate = member => {
  return `
    <li class="staff-member">
    <strong>Name: </strong><p>${member.name}</p><br>
    <strong>Name: </strong><p>${member.occupation}</p><br>
    <img src="${member.img}">
    </li>
  `
}

// Initialise the script
const init = () => {
  setClickEvents()
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  init()
})