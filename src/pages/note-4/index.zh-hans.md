---
title: '开发笔记 #4: 努力的方向'
date: '2020-05-17'
spoiler:
---

我们想往一个方向加油，进发，往往有时候会做了「没用功」，即费了力，但没什么收获。在这篇文章，我想分享做一个编程员，尤其是 node.js 和 js 方面的，可以努力的方向。

## 1. 跟什么语言无关，跟你的逻辑有关

天下武功出少林，你熟用一种程式语言，再用其他不同的程式语言，不会差很远。

所以有时候你面对「真正的问题」时，脑袋卡在那边原地踏步。可能是因为你脑子里没有太多用程式码解决问题的逻辑经验。

我的经验从哪里来？我的经验从大学前就有，就是自己不断的玩网站的事，不断的试弄自己的网站和论坛，不断让自己去接触程式码。其次，在大学时，教授丢的功课，例如学完什么排序的原理，然后功课就是你回家自己用c++ 做出排序的结果，那就是把你学的实作出来然后效能又要跟理论一样，所以我经过这样的学习（或叫自学）的过程。以后我面对任何编程上的问题，在网路上找不解答，我都能像大学那样自己明白一些原理然后实作出来。

那讲了这么多，可以怎样练习加强自己的逻辑思考能力？很简单，就是多写程式码。

我会推荐 [codewars](https://codewars.com)，里面就是选你学的语言，然后不断有挑战的问题，要你写程式码回答。你写什么是不太重要，反正通过测试就好。关键在于提交你的解答后，会给你看看世界上其他人是怎么解决这个题目的。然后你就会发现天外有天，人外有人，把他们的解答思考一下，他们是如何做到的，思考完自己试试他们的解答所用的逻辑，不要光看，光看没用，这些是跟数学一样，看数学不会让你懂得做数学的题目，程式码也是，你要多做，你的思考模式才会发生改变。

## 2. Promise

在 js 的世界里，Promise 太重要了，Promise 就是用来做异步(async)的事的。

异步 (async) 是什么，例如第一个例子:

```jsx
setTimeout(() => {
  console.log('world')
}, 5000)
console.log('hello')
```

结果会印出 "hello", "world"，为什么会印 "hello" 先, 因为 `setTimeout` 里的 function 会五秒后才执行。

然后第二个例子:

```jsx
setTimeout(() => {
  console.log('hello')
}, 5000)
setTimeout(() => {
  console.log('world')
}, 5000)
```

五秒后会同时出现 "hello", "world"，而不是五秒后出现 "hello" 再五秒后出现 "world"，他们是同时起跑，然后同时五秒后输出。这就是 async。

然后第三个 Promise 的例子:

```jsx
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello')
  }, 5000)
})
```

`p` 就是一个 Promise 的物件，等待完五秒后，这个 Promise 物件的「体内」就会储存了一个「答案」"hello"。我可以通过以下这样做印出他「体内的答案」。

```jsx
p.then(result => {
  console.log(result)
})
```

`.then` 是 promise 物件的其中一个 function，只要是 promise 他都有 `.then` 的 function。在 `.then` 里我就能把 promise 的解答拿出来并印出来。

因为 Promise 的出现，所以 JS 的世界就有了 `async` 和 `await` 的新东西出现。

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
  // aaa 是一个 async function
  // aaa() 会返回 promise, 任何 async function 都会返回 promise
  // await aaa() 会返回 resolve 里的东西，所以 result 是 "hello"

  return result
}

bbb().then(res => console.log(res))
```

在我这篇文章不会该你看完就了解promise，因为这不是教学文，而是让你们可以往这个方向多了解，所以如果以上有任何东西你是不懂的，请你试试就在网路上找教学文章吧，我相信每篇都比我讲的还清楚。

> 「我告诉你们的是方向，而不是捷径，编程员没有捷径，没有运气，只有多做，就会了，不做就什么都不会。」
