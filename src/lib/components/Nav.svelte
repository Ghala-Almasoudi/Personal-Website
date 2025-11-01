<script lang="ts">
  import ThemeSwitch from "./ThemeSwitch.svelte";
  import Button from "./ui/button/button.svelte";

  const links = [
    { text: "Home", href: "./" },
    // { text: "Resume", href: "./resume" },
    { text: "Contact", href: "./contact" },
  ];
</script>

<div class= "w-full ">
  <nav
class="sticky px-6 py-6 top-0 z-[10] text-3xl font-bold hover:font-black flex justify-between items-center bg-[#080b1a] border-b border-[#3c4884] duration-200"  >
    <a
      href="./"
      class="logo text-3xl font-bold text-shadow hover:scale-105 p-2"
    >
      GA
    </a>

    <div class="nav-bar flex items-center uppercase">
      <span class="hidden md:flex ml-1">
        {#each links as link}
        <Button 
          href={link.href} 
          variant="link" 
          class={`text-xl ${link.text === 'Home' ? 'mr-5' : 'mr-9'} ml-8`}
        >
          {link.text}
        </Button>
      {/each}
      

        <ThemeSwitch />
      </span>

      <div class="flex md:hidden ml-1">
        <label>
          <input type="checkbox" />
          <div class="toggle bg-[#080b1a]">
            <span class="top_line common"></span>
            <span class="middle_line common"></span>
            <span class="bottom_line common"></span>
          </div>
          <div class="slide hidden">
            <h1>menu</h1>
            <ul>
              <li><a href="./"><i class="fas fa-home"></i>Home</a></li>
              <li>
                <!-- <a href="./resume"><i class="fas fa-file-alt"></i>Resume</a> -->
              </li>
              <li>
                <a href="./contact"><i class="fas fa-envelope"></i>Contact</a>
              </li>
            </ul>
          </div>
        </label>
      </div>
    </div>
  </nav>
</div>