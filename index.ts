let hasValue = false;
let count = 10
let float = 3.14
let negative = -0.12
let single = 'hello'

// 型推論に任せた書き方(この書き方が一番良い)
const fruits = ['Apple', 'Banana', 'Grape']

// 配列の型注釈の書き方(string)
const fruits1: string[] = ['Apple', 'Banana', 'Grape']
// 配列の型注釈の書き方(stringとnumber)
const fruits2: (string | number)[] = ['Apple', 'Banana', 'Grape', 1]
const fruit1 = fruits1[0]


// 型推論に任せた書き方(この書き方が一番良い)
const person = {
  name: {
    first: 'Taro',
    last: 'Yamada'
  },
  age: 21
}
console.log(person.name.first);


// オブジェクトの型注釈の書き方
const person1: {
  // カンマではなく、セミコロンを使う
  name: string;
  // カンマではなく、セミコロンを使う
  age: number;
} = {
  name: 'Jack',
  age: 21
}

console.log(person1.name); // Jack

// objectという型を使って書いた場合(これは普通に使うと問題がある(基本的には使わない)=>プロパティにアクセスできない)
const person2: object = {
  name: 'Jack',
  age: 21
}

// エラーになってしまう
// console.log(person2.name); // プロパティnameは型objectに存在しない


// 型objectの使用例=>Objectのcreateメソッドを使う場合(あんまりこういうケースはない)
// Objectにはobject型を引数として渡す
// Object.create()
