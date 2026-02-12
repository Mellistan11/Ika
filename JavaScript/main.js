// makes main content unscrollable when mouse isnt hovering over it

  let scrollPosition = 0;

  function lockScroll() {
    scrollPosition = window.scrollY;
    document.body.classList.add("no-scroll");
    document.body.style.top = `-${scrollPosition}px`;
  }

  function unlockScroll() {
    document.body.classList.remove("no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
  }



// Returns true if windowWidth <= 780px

  function isPhone() {
    return window.innerWidth <= 780;
  }



// Menu open / close

  const menuButton = document.getElementById("menu-button");
  const dropdownShadowButton = document.getElementById("dropdown-shadow");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownGradient = document.getElementById("dropdown-gradient");
  const dropdownShadow = document.getElementById("dropdown-shadow");
  let menuOpen = false;

  function openMenu() {
    menuButton.classList.add("menu-button-open");
    dropdownMenu.classList.toggle("dropdown-menu-hidden");
    dropdownMenu.classList.toggle("dropdown-menu-shown");

    dropdownGradient.classList.toggle("dropdown-gradient-open");

    dropdownShadow.classList.toggle("dropdown-menu-hidden");
    dropdownShadow.classList.toggle("dropdown-menu-shown");

    lockScroll();
    menuOpen = true;
  }

  function closeMenu() {
    menuButton.classList.remove("menu-button-open");
    dropdownMenu.classList.toggle("dropdown-menu-shown");
    dropdownMenu.classList.toggle("dropdown-menu-hidden");

    dropdownGradient.classList.toggle("dropdown-gradient-open");

    dropdownShadow.classList.toggle("dropdown-menu-shown");
    dropdownShadow.classList.toggle("dropdown-menu-hidden");

    unlockScroll();
    menuOpen = false;
  }
  

  menuButton.addEventListener("click", () => {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  dropdownShadowButton.addEventListener("click", () => {
    if (menuOpen) {
      closeMenu();
    }
  });



// Searchbar expand when focused and retract when blurred
  const searchbar = document.getElementById("searchbar");
  const seachbarInput = document.getElementById("searchbar-input");

  seachbarInput.addEventListener("focus", () => {
    searchbar.classList.remove("searchbar-retracted");
    searchbar.classList.add("searchbar-expanded");
  })

  seachbarInput.addEventListener("blur", () => {
    searchbar.classList.remove("searchbar-expanded");
    searchbar.classList.add("searchbar-retracted"); 
  })


// Basket open / close
  const container = document.getElementById("container"); 
  const basket = document.getElementById("basket");

  basket.addEventListener("click", () => {
    container.classList.toggle("basket-open");
    container.classList.toggle("basket-closed");
  })


// Zoom in / Zoom out
  const root = document.documentElement;
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");

  function changeSize(variableName, amount, min, max) {
  
    const currentValue = getComputedStyle(root)
      .getPropertyValue(variableName)
      .trim();

    let data = parseFloat(currentValue);

    data += amount;

    data = Math.max(min, Math.min(max, data));

    root.style.setProperty(variableName, data + "px");
  }

  zoomIn.addEventListener("click", () => {
    changeSize("--header-height", 10, 35, 95);
    changeSize("--dropdown-menu-width", 20, 460, 580);
  })

  zoomOut.addEventListener("click", () => {
    changeSize("--header-height", -10, 35, 95);
    changeSize("--dropdown-menu-width", -20, 460, 580);
  })



// Deafault / light / dark-mode
  const bodyMode = document.body;
  const defaultmode = document.getElementById("defaultmode"); 
  const lightmode = document.getElementById("lightmode"); 
  const darkmode = document.getElementById("darkmode");

  function setMode(mode) {
    bodyMode.classList.remove("defaultmode");
    bodyMode.classList.remove("lightmode");
    bodyMode.classList.remove("darkmode");

    bodyMode.classList.add(mode);
    currentMode = mode;
  }

  let currentMode = "defaultmode";
  setMode(currentMode);

  defaultmode.addEventListener("click", () => setMode("defaultmode"));
  lightmode.addEventListener("click", () => setMode("lightmode"));
  darkmode.addEventListener("click", () => setMode("darkmode"));



// Locate dropdown meny to left or right
  const moveDropdown = document.getElementById("move-dropdown");

  moveDropdown.addEventListener("click", () => {
    bodyMode.classList.toggle("left");
    bodyMode.classList.toggle("right");
  });