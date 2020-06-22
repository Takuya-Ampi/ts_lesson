let hasValue = false;
let count = 10
let float = 3.14
let negative = -0.12
let single = 'hello'

// 関数の戻り値にvoid型を使う
// voidとは戻り値がないこと

function sayHello(): void{
  console.log('hello')
}
sayHello()


// 関数に型をつける(引数と戻り値に型をつける。特に戻り値の型の付け方注意)
// 戻り値は、パラメーターのかっこの後ろに型をつける
// 引数については必ず方をつける
// 戻り値については型推論効くが、つけたほうが無難

function add(num1: number, num2: number): number {
  return num1 + num2
}

add(1, 2)

// typeエイリアス(型を変数のように扱う)
// union型をうまく使うことで、enumに近いことができる

type ClothSize = 'small' | 'medium' | 'large'
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'medium'
}

// リテラル型
const apple: 'apple' = 'apple'
const apples = 'apples' //const使った時点でリテラル型にbなる
// const apples: 'apples' = 'hello' // エラーが出る

// union型
// 数値と文字列を許容するみたいに、アンド演算子のように使える
let unionType: number | string = 10
unionType = 'hello'
// unionType = [0, 1, 'hello'] // エラーが出る
let unionTypes: (number | string)[] = [21, 'hello', 31] // 解決



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
