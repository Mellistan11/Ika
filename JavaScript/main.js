// Returns true if windowWidth <= 780px

  function isPhone() {
    return window.innerWidth <= 780;
  }



// Menu open / close

  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownShadow = document.getElementById("dropdown-shadow")
  let menuOpen = false;

  function openMenu() {
    menuButton.classList.add("menu-button-open");
    dropdownMenu.classList.toggle("dropdown-menu-hidden");
    dropdownMenu.classList.toggle("dropdown-menu-shown");
    dropdownShadow.classList.toggle("dropdown-menu-hidden");
    dropdownShadow.classList.toggle("dropdown-menu-shown");

    menuOpen = true;
  }

  function closeMenu() {
    menuButton.classList.remove("menu-button-open");
    dropdownMenu.classList.toggle("dropdown-menu-shown");
    dropdownMenu.classList.toggle("dropdown-menu-hidden");
    dropdownShadow.classList.toggle("dropdown-menu-shown");
    dropdownShadow.classList.toggle("dropdown-menu-hidden");

    menuOpen = false;
  }
  

  menuButton.addEventListener("click", () => {
    if (!menuOpen) {
      openMenu();
    } else {
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