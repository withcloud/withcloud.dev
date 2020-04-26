---
title: '开发笔记 #1'
date: '2020-04-26'
spoiler: 少用 for loop.
---

## 为什么叫 withcloud？

因为愿景是做一些云端相关的东西，所以建立 github organization 时我就取名为 withcloud (cloud 即云端)。

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

主要原因是人很难读懂，当然要看一定是看得懂，但多人协作或自己看时，总会看一阵子才清楚吧。

那怎么做才好? forEach 是你的好朋友。

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

就是简单，易懂，没有什么 `var++` 的运算。

## 2. Lodash 更厉害

对于复杂的处理，我们先不用考虑自己写 for loop。我们会先试试看 Lodash library 提供的 function。

[Lodash 官网](https://lodash.com/docs/4.17.15)

举些例子，我超常用的。

```jsx
const _ = require('lodash')

_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
```

你会发现，它好用到爆炸！

## 3. 什么时候一定要用 for loop

就是 `array.forEach` 那些 array 原本提供的 function 和 Lodash 也不能帮你搞定的时候，你就要想想自己用 for 怎么做。

还有，就是有时用到 `async` 和 `await` 的时候，就要用到 for loop。

例如：

```jsx
async function process () {
  for (let i = 0; i < 10; i++) {
    await anotherFunction(i)
  }
}
```

对 async 和 await 和 promise 不明白的可以自己上网查一下，在这边不详细说。

## 4. Node.js 12

我们现在都用 Node.js 12，因为目前它是 LTS (Long-term support)
