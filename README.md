# todolist 配列＋objectで状態管理てすと

## task追加  

### 2/19 チョトハマタヨ

```
function addtodo(todos) {
  // ul取得
  const tasklist = document.getElementById('tasklist');
  // li作成
  var newli = document.createElement("li");
  // todosの配列を1つずつとる
  for (let i in todos) {
    var str = todos[i].task;
  }
  // HTMLに書き出し
  newli.appendChild(document.createTextNode(str));
  tasklist.appendChild(newli);
  console.log(todos);
};
````

ひさしぶりに関数つかった処理書いた  
`createElement`でli作って  
`appendChild`でulの子としてコード作成  
さらにliの子として文字列を入れようとしたらNodeナントカエラー  
`appendChild(document.createTextNode(str));` って書き方にしたらいけた  

無事書き出しまでしゅうーりょーー

### 2/18 すぐ沼に浸かる

```
// todolist
var todos = [{
  task: addtext,
  done: false
}];
```

上で宣言したら0番目に入力値を入れられなかった  

```
// 0番目削除
todos.shift();
```

ので、削除したよ
