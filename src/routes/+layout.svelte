<header><h1>Learn simplified Chinese characters</h1></header>
<div id="content">
  <aside
    ><nav>
      <a href="/">home</a>
      <a href="/characters">characters</a>
      <a href="/words">words</a>
    </nav></aside
  >

  <main>
    <slot />
  </main></div
>
<footer>made with Svelte</footer>

<style>
  header {
    min-height: 4rem;
  }
  #content {
    display: flex;
    flex-direction: row;

    min-height: calc(100dvh - 8rem);
  }
  main {
    padding-left: 2rem;
  }
  footer {
    height: 2rem;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
</style>
