<script lang="ts">
  import type {PageData} from "./$types"

  export let data: PageData
</script>

<h2>Words</h2>
<ul>
  {#each data.titles as title}
    <li><a href="/words/{title}">{title}</a></li>
  {/each}
</ul>
