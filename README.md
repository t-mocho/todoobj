# todolist 配列＋objectで状態管理てすと

## task追加  


### 2/20 ハマタパート２
```
var todos = [{
  num: 0,
  task: addtext,
  done: false
}];
// 削除
tasklist.addEventListener('click', (e) => {
  let target = e.target;
  // delclass
  const delicon = document.getElementsByClassName('material-icons del');
  // todosの長さからiの位置を指定
  for (var i = 0; i < todos.length; i++) {
    if (target === delicon[i]) {
      // 配列削除
      todos.splice(todos[i].num, 1);
      // num更新
      todos[i].num = i;
      //HTML削除
      target.parentElement.remove();
    }
  }
});
```

削除したかったんだよ（叫）  
配列の番号どうやってとるんだと模索しながら  
todosにnumを追加して番号をふってみた  
そしたらばぐった。挙動へん。spliceの使い方がチョトチガタ
spliceの引数は「ばんごう」だよ！ばんごう！  
最初は`todos[i]`とかでやってたけど配列だよそれは  
ってことで大幅に変更して以下に

```
tasklist.addEventListener('click', (a) => {
  target = a.target;
  for (var i = 0; i < todos.length; i++) {
    const delicon = document.getElementsByClassName('material-icons del');
    // deliconがクリックされたら処理
    if (target === delicon[i]) {
      // 番号取得
      var id = todos.indexOf(todos[i]);
      // 配列削除
      todos.splice(id, 1);
      // HTML削除
      target.parentElement.remove();
    }
  }
});
```

`indexOf`をつかってみた  
要素が何番目か教えてくれてspliceしました！ながかったーー！  
削除してももんだいなしだと、おもう

### 2/19 チョト・・トテモハマタヨ

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

`addEventListener`こいつに死にかけたマージー！！  
idじゃなくて<i>を指定したクリックイベントができなかった  

```
const tasklist = document.getElementById('tasklist');
tasklist.addEventListener('click', (e) => {
  let target = e.target;
  // iのみ処理を行う
  const icon = document.getElementsByClassName('material-icons');
  for (var i = 0; i < icon.length; i++) {
    if (target === icon[i]) {
      target.classList.toggle('end');
      // done変更
      todos[i].done = !todos[i].done;
    }
  }
});
```

ので、tasklist(ul)を指定でe.targetでdomはとりつつ  
`material-icons`のclassを持った<i>を指定して処理を行った  
ドハマリ！  
  
`todos[i].done = !todos[i].done;` を使ったら  
doneに対してfalse or true設定できたtodo完了まで

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

```
  const text = document.getElementById('addtext').value;
  const todo = {};
  if (text) {
    // 値更新
    todo.task = text;
    todo.done = false;
    // 配列追加
    todos.push(todo);
    // 書き出し'
    addtodo(todos);
    // 入力値リセット
    let re = document.getElementById('addtext');
    re.value = "";
  }
```

`[{}]` この配列＋objの場合{}を作って中身作成したほうがあとあと処理楽（らしい）  
配列追加、最後の`push`をしてなくてひたすら上書きするという地獄をみた
