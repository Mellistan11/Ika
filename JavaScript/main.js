// Returns true if windowWidth <= 780px

  function isPhone() {
    return window.innerWidth <= 780;
  }



// Menu open / close

  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  let menuOpen = false;

  function openMenu() {
    menuButton.classList.add("menu-button-open");
    dropdownMenu.classList.remove("dropdown-menu-hidden");
    dropdownMenu.classList.add("dropdown-menu-shown");

    menuOpen = true;
  }

  function closeMenu() {
    menuButton.classList.remove("menu-button-open");
    dropdownMenu.classList.remove("dropdown-menu-shown");
    dropdownMenu.classList.add("dropdown-menu-hidden");

    menuOpen = false;
  }
  

  menuButton.addEventListener("click", () => {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });



// Menu open / close when rezise
  let wasPhone = isPhone();
  let reopen = false;

  window.addEventListener("resize", () => {
    const nowPhone = isPhone();

    if (wasPhone && !nowPhone) {
      reopen = menuOpen;
      if (menuOpen) closeMenu();
    }

    if (!wasPhone && nowPhone) {
      if (reopen) openMenu(false);
    }

    wasPhone = nowPhone;
  });



// Searchbar expand when focused
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








// // Header shows and hides

//     const mainHeader = document.getElementById("main-header");
//     const gradient = document.getElementById("header-gradient");
//     const mainHeaderHeight = mainHeader.offsetHeight;

//     let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;      
//     let currentOffset = 0;
//     let targetOffset = 0;
//     let rafId = null;
    
//     function clamp(v, min, max)  {
//         return Math.max(min, Math.min(max, v));
//     }

//     function animate() {
//         currentOffset += (targetOffset - currentOffset) * 0.2;
//         if (Math.abs(targetOffset - currentOffset) < 0.5) currentOffset = targetOffset;

//         mainHeader.style.transform = `translateY(-${currentOffset}px)`;

//         if (currentOffset !== targetOffset) {
//             rafId = requestAnimationFrame(animate);
//         } else {
//             rafId = null;
//         }
//     }

//     window.addEventListener("scroll", () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         const delta = scrollTop - lastScrollTop;

//         targetOffset = clamp(targetOffset + delta, 0, mainHeaderHeight);
//         lastScrollTop = scrollTop;

//         if (!rafId) rafId = this.requestAnimationFrame(animate);
//     });



