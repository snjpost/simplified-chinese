<script lang="ts">
  export let data
</script>

<h2>{data.char.mandarin}</h2>
<p>{data.char.pinyin}</p>
<p>{data.char.english}</p>

<ul>
  {#each data.charComponents as component}
    {#if typeof component === "string"}
      <li>{component}</li>
    {:else}
      <li
        ><a href="/characters/{component.mandarin}">{component.mandarin}</a>: {component.english}</li
      >
    {/if}
  {/each}
</ul>
