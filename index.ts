let hasValue = false;
let count = 10
let float = 3.14
let negative = -0.12
let single = 'hello'

const coffeeSize = {
  short: 'short',
  tall: 'tall',
  grande: 'grande',
  venti: 'venti'
}

// enumの型。型注釈が必ず必要。書き方が独特なので注意
// enumは基本大文字から始まる。プロパティは全て大文字にする。
// enumは特定のまとまったものを受け入れる
// const CoffeeSize = {
//   SHORT: 'SHORT',
//   TALL: 'TALL',
//   GRANDE: 'GRANDE',
//   VENTI: 'VENTI'
// }
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
// coffeeのsizeが上の四種類になるよううにしたい
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

// Tupleの型。型注釈が必ず必要
// Tupleを簡単に説明すると、配列に厳しく制限がかかったもの
// Tuple型の使い所=>例)0番目の要素にstring,1番目の要素にnumber,2番目の要素にbooleanが必ずこの順番で配列として欲しい
const book: [string, number, boolean] = ['buisiness', 1500, false]
console.log(book[1])



// 配列の型。型推論に任せた書き方(この書き方が一番良い)
const fruits = ['Apple', 'Banana', 'Grape']

// 配列の型注釈の書き方(string)
const fruits1: string[] = ['Apple', 'Banana', 'Grape']
// 配列の型注釈の書き方(stringとnumber)
const fruits2: (string | number)[] = ['Apple', 'Banana', 'Grape', 1]
const fruit1 = fruits1[0]


// オブジェクトの型。型推論に任せた書き方(この書き方が一番良い)
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
