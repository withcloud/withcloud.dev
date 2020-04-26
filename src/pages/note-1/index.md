---
title: '開發筆記 #1'
date: '2020-04-26'
spoiler: 少用 for loop.
---

## 為什麼叫 withcloud？

因為願景是做一些雲端相關的東西，所以建立 github organization 時我就取名為 withcloud (cloud 即雲端)。

## 1. 少用 for loop

```jsx
for (let userTwoIndex = 0; userTwoIndex < userTwoData.length; ++userTwoIndex) {
  const data = userTwoData[userTwoIndex]
  const email = `cdsj6student${(userTwoIndex + 1)}@gmail.com`
  const username = `cdsj6student${(userTwoIndex + 1)}`
  users.push(
    {
      ...data,
      name: data.name.toUpperCase(),
      email,
      username,
      id: uuid(),
      is_admin: false,
      groups: ['student'],
      created_at: new Date()
    }
  )
}
```

主要原因是人很難讀懂，當然要看一定是看得懂，但多人協作或自己看時，總會看一陣子才清楚吧。

那怎麼做才好? forEach 是你的好朋友。

```jsx
usersData.forEach((user, index) => {
  cdsj6Users.push(
    {
      ...user,
      email: `${user.username}@student.cdsj6.edu.mo`,
      id: uuid(),
      is_admin: false,
      groups: ['student'],
      created_at: new Date()
    }
  )
})
```

就是簡單，易懂，沒有什麼 `var++` 的運算。

## 2. Lodash 更厲害

對於複雜的處理，我們先不用考慮自己寫 for loop。我們會先試試看 Lodash library 提供的 function。

[Lodash 官網](https://lodash.com/docs/4.17.15)

舉些例子，我超常用的。

```jsx
const _ = require('lodash')

_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
```

你會發現，它好用到爆炸！

## 3. 什麼時候一定要用 for loop

就是 `array.forEach` 那些 array 原本提供的 function 和 Lodash 也不能幫你搞定的時候，你就要想想自己用 for 怎麼做。

還有，就是有時用到 `async` 和 `await` 的時候，就要用到 for loop。

例如：

```jsx
async function process () {
  for (let i = 0; i < 10; i++) {
    await anotherFunction(i)
  }
}
```

對 async 和 await 和 promise 不明白的可以自己上網查一下，在這邊不詳細說。

## 4. Node.js 12

我們現在都用 Node.js 12，因為目前它是 LTS (Long-term support)
