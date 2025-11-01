<script lang="ts">
  import Sun from "svelte-radix/Sun.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import { onMount } from "svelte";
  import { Button } from "$lib/components/ui/button/index.js";

  let currentTheme = "dark";

  // عند فتح الصفحة نقرأ الثيم المحفوظ
  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      currentTheme = saved;
      document.documentElement.classList.toggle("dark", currentTheme === "dark");
    }
  });

  // عند الضغط على الزر نبدّل ونحفظ
  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme);
  }
</script>

<Button on:click={toggleTheme}>
  <Sun
    class="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
