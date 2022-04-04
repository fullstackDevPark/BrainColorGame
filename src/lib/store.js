import {writable} from 'svelte/store'

// 현재 점수
export const score = writable(a)

// 점수 리스트
export const scoreList = writable([
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
  {score: 0, name: '--'},
])

// 퀴즈 리스트
export const quizList = writable([
  {
    question: {color: 'red', text: 'green'},
    choice: [
      {color: 'green', text: 'yellow'},
      {color: 'pink', text: 'red'},
      {color: 'blue', text: 'purple'},
      {color: 'yellow', text: 'gray'},
    ]
  },
  {
    question: {color: 'pink', text: 'purple'},
    choice: [
      {color: 'purple', text: 'yellow'},
      {color: 'gray', text: 'pink'},
      {color: 'blue', text: 'green'},
      {color: 'yellow', text: 'red'},
    ]
  },
])
