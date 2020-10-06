# Complexity Analysis

## What we are going to talk about today ?

Imagine that we have different implementations for the same function, **How we can Know which one is the best ??**

>### What does Algorithm mean ?
 The plan or the system that you used to solve a problem and reach the solution.
* Food recipes
* Addition and subtraction and other arithmetic operations

</br>

> What we mean by the 'Best' ? 
* Is it the more clean and readable?
* Shorter one ??
* Less memory?
* Faster (shortest time to excute)??

> What affects the time?? ...

  **Bsiclly the number of the operations in the functions**

</br>

> Example:
```javascript
let getSum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};
```
> How much time does it take to run this function ?
>> How does the runtime of this function grow ?
>>> Big O Notaion and Time Complexity

</br>

## Big O Notaion 


>EXAMPLE 1

Create a function sumTo(n) that calculates the total of numbers 1 + 2 + ... + n.
  ```javascript
 sumTo(3) = 3 + 2 + 1 = 6
 sumTo(4) = 4 + 3 + 2 + 1 = 10
```
    Method 1 :
```javascript
let sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
``` 
![alt text](https://imgur.com/Y9Lkf2K.png)

> Time complexity: is how much the runtime of the function increasess when the input (or the size) increasess
* Lenier time 
* Constant time 
* quadratic time 
</br>
</br>
</br>
</br>

> Another way to represnt that : 
* Lenier time => O(n)
* Constant time => O(1)
* quadratic time => O(n^2)

</br>
</br>
</br>
</br>

> Find the: 
 1. Fasting growing term 
 2. Coefficient
 
</br>
</br>
</br>
</br>

    Method 2 

```javascript
let sumTo = (n) => {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
  return sum;
};
``` 

    Method 3 
```javascript
let sumTo = (n) => {
 return n * (n + 1) / 2;
};
``` 

![alt text](https://imgur.com/fZ0pMbH.png)

----
</br>

>EXAMPLE 2

Create a (getNestedSum) function that takes a nested array and and return the sum of all number insided the nested arrays.

```javascript
  getNestedSum([[1,2,3],[1,2,3,4]])) => 16
```

```javascript
let getNestedSum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length ; i++) {
    for (let j = 0; j < array[i].length; j++) {
     total += array[i][j]
  }
}
  return total;
};
``` 
</br>
</br>
</br>
</br>

![alt text](https://imgur.com/l7XllsV.png)

</br>

>EXAMPLE 3

Create an (inverter) function that takes an array and flipped it then returns this array.
  ```javascript
  let greets = ["Hi", "welcome", "Hey", "Hello"];
  inverter(greets) => ["Hello", "Hey", "welcome", "Hi"];
  inverter([33, 44, 11, 77, 99]) => [ 99, 77, 11, 44, 33 ];
```
    Method 1 :
```javascript
let inverter = (array) => {
  let pointer = array.length - 1;
  for (let i = 0; i < pointer; i++) {
    let tempt = array[i];
    array[i] = array[pointer];
    array[pointer] = tempt;
    pointer--;
  }
  return array;
};
``` 
    Method 2 

```javascript
let inverter2 = (array) => {
  if (array.length === 0){
    return []
    }
    return [array.pop()].concat(inverter2(array))
}
``` 
</br>

### Why I need to know all of this ??
*  Describing the aloghrithms and how the code preforms
* Knowing the parts of your code that are inefficiant when your code slow down or crachs
* Interview questions -_-
---
</br> 