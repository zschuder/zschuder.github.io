// main.js - Basic JavaScript for Solid State-like menu functionality

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Function to open the menu
    function openMenu() {
        menu.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('is-menu-visible'); // Add class to body to prevent scroll
    }

    // Function to close the menu
    function closeMenuFn() {
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('is-menu-visible'); // Remove class to allow scroll
    }

    // Event listener to open menu when "Menu" button is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            openMenu();
        });
    }

    // Event listener to close menu when "Close" button is clicked
    if (closeMenu) {
        closeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenuFn();
        });
    }

    // Event listener to close menu when overlay is clicked
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            closeMenuFn();
        });
    }

    // Event listener to close menu when a menu link is clicked (for smooth scroll)
    const menuLinks = document.querySelectorAll('.menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is an anchor to a section on the same page
            if (link.hash && link.pathname === window.location.pathname) {
                e.preventDefault(); // Prevent default jump
                closeMenuFn(); // Close the menu
                // Smooth scroll to the section
                document.querySelector(link.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
