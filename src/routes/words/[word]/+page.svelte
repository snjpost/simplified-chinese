<script lang="ts">
  export let data
</script>

<h2>{data.word.mandarin}</h2>
<p>{data.word.pinyin}</p>
<p>{data.word.english}</p>

<ul>
  {#each data.chars as char}
    {#if typeof char === "string"}
      <li>{char}</li>
    {:else}
      <li><a href="/characters/{char.mandarin}">{char.mandarin}</a>: {char.english}</li>
    {/if}
  {/each}
</ul>
