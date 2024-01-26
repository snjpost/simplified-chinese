<script lang="ts">
  import type {PageData} from "./$types"

  export let data: PageData
</script>

<h2>Characters</h2>
<ul>
  {#each data.titles as title}
    <li><a href="/characters/{title}">{title}</a></li>
  {/each}
</ul>
