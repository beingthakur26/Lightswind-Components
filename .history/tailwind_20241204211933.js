/* ------------------Relational Toggle Tab------------------ */

let relationalactiveTab = 'relationalHome';

function relationalhandleTabClick(relationaltab) {
    relationalactiveTab = relationaltab;
    const relationalactiveTabBackground = document.getElementById('relationalactiveTabBackground');
    const relationalbuttons = ['relationalHome', 'relationalAbout', 'relationalContact', 'relationalHelp'];

    relationalbuttons.forEach(function(button) {
        const relationalbuttonElement = document.getElementById(button.toLowerCase() + 'Btn');
        if (button === relationaltab) {
            relationalbuttonElement.classList.add('text-white');
            relationalbuttonElement.classList.remove('text-gray-700');
        } else {
            relationalbuttonElement.classList.remove('text-white');
            relationalbuttonElement.classList.add('text-gray-700');
        }
    });

    const relationaltabIndex = relationalbuttons.indexOf(relationaltab);
    relationalactiveTabBackground.style.left = (relationaltabIndex * 25) + '%';
}


/* ------------------Modern Toggle Tab with Icon's------------------ */

document.addEventListener("DOMContentLoaded", function () {
    const moderntoggleicons = ['moderntogglehome', 'moderntogglebookmark', 'moderntoggleplus', 'moderntoggleuser', 'moderntogglesettings'];
    const moderntogglenavbar = document.getElementById('moderntogglenavbar');
    const moderntoggleindicator = document.getElementById('moderntoggleindicator');
    let moderntoggleactiveIndex = 0;

    function handleClick(moderntoggleindex) {
        moderntoggleactiveIndex = moderntoggleindex;
        updateIndicatorPosition();
        updateIconStyles();
    }

    function updateIndicatorPosition() {
        const leftPosition = (moderntoggleactiveIndex * 20 + 10) + '%';
        moderntoggleindicator.style.left = leftPosition;
    }

    function updateIconStyles() {
        const iconLinks = moderntogglenavbar.getElementsByTagName('a');
        for (let i = 0; i < iconLinks.length; i++) {
            const iconLink = iconLinks[i];
            iconLink.classList.remove('opacity-100', 'scale-125');
            iconLink.classList.add('opacity-50', 'scale-100');
            if (i === moderntoggleactiveIndex) {
                iconLink.classList.add('opacity-100', 'scale-125');
            }
        }
    }

    moderntoggleicons.forEach((icon, moderntoggleindex) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = '<svg class="w-8 h-8 fill-current text-white"><use xlink:href="#' + icon + 'Icon"></use></svg>';
        a.classList.add('transition-transform', 'duration-200', 'ease-in-out');
        a.addEventListener('click', () => handleClick(moderntoggleindex));
        li.appendChild(a);
        moderntogglenavbar.appendChild(li);
    });

    updateIndicatorPosition();
});



/* ------------------Dynamic Toggle Tab with Icon's------------------ */

const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const highlight = document.getElementById("highlight");

function handleHover(event) {
    const link = event.currentTarget.parentNode;
    const { left, width } = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    // Move highlight
    highlight.style.transform = `translateX(${left - navRect.left}px)`;
    highlight.style.width = `${width}px`;

    // Reset all links' color
    links.forEach(link => link.classList.remove("dynamicNav-highlighted"));

    // Change the hovered link text to black
    event.currentTarget.classList.add("dynamicNav-highlighted");
}

function handleClick(event) {
    event.preventDefault();
    links.forEach(link => link.parentNode.classList.remove("dynamicNav-active-link"));
    event.currentTarget.parentNode.classList.add("dynamicNav-active-link");
}

links.forEach(link => {
    link.addEventListener("mousemove", handleHover);
    link.addEventListener("click", handleClick);
});

// Set initial position
window.addEventListener("DOMContentLoaded", () => {
    const { left, width } = links[0].parentNode.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.transform = `translateX(${left - navRect.left}px)`;
    highlight.style.width = `${width}px`;

    // Highlight the first link initially
    links[0].classList.add("dynamicNav-highlighted");
});







/* ------------------Glassmorphism Sidebar------------------ */
const GlassmorphismSidenav = document.getElementById("GlassmorphismSidenav");
const GlassmorphismPname = document.getElementById("GlassmorphismPname");
const GlassmorphismTogglericon = document.getElementById("GlassmorphismTogglericon");
const GlassmorphismMenuText = document.querySelectorAll(".GlassmorphismMenuText");
const GlassmorphismCreateTask = document.getElementById("GlassmorphismCreateTask");
const GlassmorphismTaskText = document.getElementById("GlassmorphismTaskText");

let GlassmorphismisCollapsed = false;

function GlassmorphismToggle() {
    GlassmorphismisCollapsed = !GlassmorphismisCollapsed;
    GlassmorphismSidenav.style.width = GlassmorphismisCollapsed ? "70px" : "208px";
    GlassmorphismPname.style.display = GlassmorphismisCollapsed ? "none" : "block";

    GlassmorphismMenuText.forEach(text => {
        text.style.display = GlassmorphismisCollapsed ? "none" : "block";
    });

    GlassmorphismTaskText.style.display = GlassmorphismisCollapsed ? "none" : "flex";
}





/* ------------------Shopping Dropdown Menu's------------------ */
const shoppingDropdownButton = document.getElementById('shoppingDropdownButton');
const shoppingDropdownMenu = document.getElementById('shoppingDropdownMenu');

shoppingDropdownButton.addEventListener('click', () => {
    shoppingDropdownMenu.classList.toggle('hidden');
    shoppingDropdownMenu.classList.toggle('opacity-0');
    shoppingDropdownMenu.classList.toggle('scale-95');
});




