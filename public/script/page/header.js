document.querySelector(
  '.header'
).innerHTML = `<header class="text-white bg-sec2 body-font sticky top-0 z-30 shadow-xl">
<div
  class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
>
  <a
    class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-10 h-10 text-white p-2 bg-sec1 rounded-full"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      ></path>
    </svg>
    <span class="font-nav ml-3 text-xl text-white">رائحة الصبر</span>
  </a>
  <nav
    class="md:ml-auto flex flex-wrap items-center text-base justify-center"
  >
    <a href="#home" class="mr-5 font-nav hover:text-pm2 cursor-pointer">
      Home
    </a>
    <a href="#shop" class="mr-5 font-nav hover:text-pm2 cursor-pointer">
      Shop
    </a>
    <a href="#about" class="mr-5 font-nav hover:text-pm2 cursor-pointer">
      About Us
    </a>
    <a
      href="#contact"
      class="mr-5 font-nav hover:text-pm2 cursor-pointer"
    >
      Contact
    </a>
  </nav>
  <button
    class="inline-flex font-nav items-center bg-sec2 border-0 py-1 px-3 focus:outline-none hover:bg-sec1 text-pm2 rounded text-base mt-4 md:mt-0"
  >
    Button
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 ml-1"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
</div>
</header>`;
