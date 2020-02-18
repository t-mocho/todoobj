# todolist 配列＋objectで状態管理てすと

## task追加  
# すぐ沼に浸かる

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
