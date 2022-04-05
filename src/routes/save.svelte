<script>
  import {goto} from '$app/navigation'
  import {score, scoreList} from '$lib/store.js'

  let name = '--'
  let bodyData
  let disabled = false
  let message = 'input name and click save button'
  
  $:bodyData = {score: $score, name: name}

  async function saveScore() {
    // $scoreList.push({score: $score, name: name})
    // $scoreList.sort((a, b) => b.score - a.score)
    // $scoreList.pop()

    disabled = true
    message = 'saving...'
    let rtn = await fetch('/api/score', {method: "PUT", body: JSON.stringify(bodyData)})
    if(rtn.status == 200) {
      alert('saved')
    }
    goto('/')
  }
</script>
<svelte:head>
  <title>점수 저장하기</title>
</svelte:head>

<h1 style="text-align:center">점수 저장하기</h1>

<h4>{message}</h4>
<p>획득점수 : {$score}</p>
<p>이름 : <input type=text biind:value={name} {disabled}></p>
<button on:click={saveScore} {disabled}>저장</button>