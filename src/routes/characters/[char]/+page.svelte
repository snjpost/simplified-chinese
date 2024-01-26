<script lang="ts">
  export let data
</script>

<h2>{data.char.mandarin}</h2>
<p>words:</p>

<ul>
  {#each data.titles as title}
    <li><a href="/characters/{title}">{title}</a></li>
  {/each}
</ul>
