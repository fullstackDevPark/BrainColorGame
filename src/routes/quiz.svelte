<script>
  import {goto} from ['$app/navigation']

  let isRunning = false

  function start() {
    alert('Ready?')
    isRunning = true
  }

  function stop() {
    isRunning = false
    goto('/save')
  }

  function goHome() {
    goto('/')
  }
</script>

<svelte:head>
  <title>게임 하기</title>
</svelte:head>

<h1 style="text-align:center">게임 하기</h1>

{#if !isRunning}
  <h1 style="text-align: center">게임하는 방법</h1>
  <p></p>
{:else}
  문제 풀기 모드 구현
{/if}

<p style="text-align: center">
  {#if isRunning}
    <button style="width: 45%; height: 60px; font-weight: bold; font-size: 30px;" on:click={stop}>그만하기</button>
  {:else}
    <button style="width: 45%; height: 60px; font-weight: bold; font-size: 30px;" on:click={start}>시작</button>
  {/if}
  
  <button style="width: 45%; height: 60px; font-weight: bold; font-size: 30px;" on:click={goHome}>홈으로</button>
</p>