<script>
  import {goto} from '$app/navigation'
  import {score, scoreList} from '$lib/store.js'

  let name = '--'

  function saveScore() {
    $scoreList.push({score: $score, name: name})
    $scoreList.sort((a, b) => b.score - a.score)
    $scoreList.pop()
    goto('/')
  }
</script>
<svelte:head>
  <title>점수 저장하기</title>
</svelte:head>

<h1 style="text-align:center">점수 저장하기</h1>

<h4>이름을 입력하고 저장 버튼을 누르세요.</h4>
<p>획득점수 : {$score}</p>
<p>이름 : <input type=text biind:value={name}></p>
<button on:click={saveScore}>저장</button>