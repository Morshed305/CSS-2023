
   const menuToggle = document.querySelector('.Three_Toggle');
    // This line selects the first element in the document with the class 'menu-toggle' and assigns it to the variable 'menuToggle'.
  
    const navBar = document.querySelector('.Navigation');
    // This line selects the first element in the document with the class 'navbar' and assigns it to the variable 'navBar'.
  
    menuToggle.addEventListener('click', () => {
      // This line adds an event listener to the 'menuToggle' element, which listens for 'click' events.
      // When the 'menuToggle' element is clicked, the function inside this block is executed.
  
      navBar.classList.toggle('activet');
      // This line toggles the 'active' class on the 'navBar' element.
      // If the 'navBar' element does not have the 'active' class, it is added.
      // If the 'navBar' element already has the 'active' class, it is removed.
    });
 
  