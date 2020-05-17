---
title: '開發筆記 #4: 努力的方向'
date: '2020-05-17'
spoiler: 
---

我們想往一個方向加油，進發，往往有時候會做了「沒用功」，即費了力，但沒什麼收獲。在這篇文章，我想分享做一個編程員，尤其是 node.js 和 js 方面的，可以努力的方向。

## 1. 跟什麼語言無關，跟你的邏輯有關

天下武功出少林，你熟用一種程式語言，再用其他不同的程式語言，不會差很遠。

所以有時候你面對「真正的問題」時，腦袋卡在那邊原地踏步。可能是因為你腦子裡沒有太多用程式碼解決問題的邏輯經驗。

我的經驗從哪裡來？我的經驗從大學前就有，就是自己不斷的玩網站的事，不斷的試弄自己的網站和論壇，不斷讓自己去接觸程式碼。其次，在大學時，教授丟的功課，例如學完什麼排序的原理，然後功課就是你回家自己用 c++ 做出排序的結果，那就是把你學的實作出來然後效能又要跟理論一樣，所以我經過這樣的學習（或叫自學）的過程。以後我面對任何編程上的問題，在網路上找不解答，我都能像大學那樣自己明白一些原理然後實作出來。

那講了這麼多，可以怎樣練習加強自己的邏輯思考能力？ 很簡單，就是多寫程式碼。

我會推薦 [codewars](https://codewars.com)，裡面就是選你學的語言，然後不斷有挑戰的問題，要你寫程式碼回答。你寫什麼是不太重要，反正通過測試就好。關鍵在於提交你的解答後，會給你看看世界上其他人是怎麼解決這個題目的。然後你就會發現天外有天，人外有人，把他們的解答思考一下，他們是如何做到的，思考完自己試試他們的解答所用的邏輯，不要光看，光看沒用，這些是跟數學一樣，看數學不會讓你懂得做數學的題目，程式碼也是，你要多做，你的思考模式才會發生改變。

## 2. Promise

在 js 的世界裡，Promise 太重要了，Promise 就是用來做異步(async)的事的。

異步 (async) 是什麼，例如第一個例子:

```jsx
setTimeout(() => {
  console.log('world')
}, 5000)
console.log('hello')
```

結果會印出 "hello", "world"，為什麼會印 "hello" 先, 因為 `setTimeout` 裡的 function 會五秒後才執行。

然後第二個例子:

```jsx
setTimeout(() => {
  console.log('hello')
}, 5000)
setTimeout(() => {
  console.log('world')
}, 5000)
```

五秒後會同時出現 "hello", "world"，而不是五秒後出現 "hello" 再五秒後出現 "world"，他們是同時起跑，然後同時五秒後輸出。這就是 async。

然後第三個 Promise 的例子:

```jsx
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello')
  }, 5000)
})
```

`p` 就是一個 Promise 的物件，等待完五秒後，這個 Promise 物件的「體內」就會儲存了一個「答案」"hello"。我可以通過以下這樣做印出他「體內的答案」。

```jsx
p.then(result => {
  console.log(result)
})
```

`.then` 是 promise 物件的其中一個 function，只要是 promise 他都有 `.then` 的 function。在 `.then` 裡我就能把 promise 的解答拿出來並印出來。

因為 Promise 的出現，所以 JS 的世界就有了 `async` 和 `await` 的新東西出現。

```jsx
const aaa = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 5000)
  })
}

const bbb = async () => {
  const result = await aaa()

  // 等了五秒
  // aaa 是一個 async function
  // aaa() 會返回 promise, 任何 async function 都會返回 promise
  // await aaa() 會返回 resolve 裡的東西，所以 result 是 "hello"

  return result
}

bbb().then(res => console.log(res))
```

在我這篇文章不會該你看完就了解 promise，因為這不是教學文，而是讓你們可以往這個方向多了解，所以如果以上有任何東西你是不懂的，請你試試就在網路上找教學文章吧，我相信每篇都比我講的還清楚。

> 「我告訴你們的是方向，而不是捷徑，編程員沒有捷徑，沒有運氣，只有多做，就會了，不做就什麼都不會。」