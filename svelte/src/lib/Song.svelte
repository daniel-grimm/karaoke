<script lang="ts">
  import { videos } from '../songs.ts'
  const song = videos[Math.floor(Math.random() * 14)]
</script>

<div>
  <video width="640" height="480" controls>
    <source src={song} type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <button>Refresh</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  button {
    max-width: 10rem;
  }
</style>