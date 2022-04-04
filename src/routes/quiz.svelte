<script>
  import {goto} from '$app/navigation'
  import {score, quizList} from '$lib/store.js'

  let isRunning = false

  let list = $quizList
  let idx = -1
  let current = null
  let bonus = 100
  $score = 0
  let timer;
  let kolor = {
    red: '빨강',
    orandge: '주황',
    yellow: '노랑',
    purple: '보라',
    green: '초록',
    black: '검정',
    blue: '파랑',
    brown: '갈색',
    gray: '회색',
    pink: '분홍'
  }

  function start() {
    list.sort(() => Math.random()-0.5)
    alert('Ready?')
    $score = 0
    next()
    isRunning = true
  }

  function next() {
    idx = idx + 1
    if(idx == list.length) {
      stop()
      return1
    }
    current = list[idx]
    current.choice.sort(() => Math.random()-0.5)
    current = current
    resetProgress()
  }

  function resetProgress() {
    clearInterval(timer)
    bonus = 100
    timer = setInterval(() => {
      bonus = bonus - 1
      if(bonus == 0) {
        clearInterval(timer)
      }
    }, 40)
  }

  function stop() {
    idx = -1
    clearInterval(timer)
    current = null
    isRunning = false
    alert(`수고하셨어요. 총 점수는 {$score}입니다`)
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
    <p>총 점수: {$score}</p>
    <div style="width: 100%">
      <progress style="width: 100%" value={bonus} max=100 />
    </div>
    <p></p>
    <p>{idx + 1} 번 문제! </p>

    {#if idx%2 == 0}
      <div style="color: {current.question.color}; background-color: white;" class="question">
        {kolor[current.question.text]}
      </div>

      {#each current.choice as item}
        <button style="color: {item.color}; background-color: white;" class="choice" on:click={() => {
          $score = score + (current.question.text == item.color ? 10 + bonus : 0)
          next()
        }}>{kolor[item.text]}
        </button>
      {/each}
    {:else}
      <div style="color: white; background-clolor: {current.question.color}" class='question'>{kolor[current.question.text]}</div>
      <p></p>
      
      {#each current.choice as item}
        <button style="color: white; background-color: {item.color};" class="choice" on:click={() => {
          $score = score + (current.question.color == item.text ? 10 + bonus : 0)
          next()
        }}>{kolor[item.text]}
        </button>
      {/each}
    {/if}
    <button style="width: 45%; height: 60px; font-weight: bold; font-size: 30px;" on:click={start}>시작</button>
  {/if}
  
  <button style="width: 45%; height: 60px; font-weight: bold; font-size: 30px;" on:click={goHome}>홈으로</button>
</p>

<style>
  .question {
    margin: 0 auto;
    text-align: center;
    text-shadow: 1px 1px 1px #000;
    font-weight: bold;
    font-size: 60px;
    width: 150px;
  }
  .choice {
    text-shadow: 1px 1px 1px #000;
    width: 50%;
    height: 150px;
    font-weight: bold;
    font-size: 50px;
  }
</style>