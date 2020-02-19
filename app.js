// todolist
var todos = [{
  task: addtext,
  done: false
}];
// 0番目削除
todos.shift();

// 追加
const addbtn = document.getElementById('addbtn');
addbtn.onclick = function() {
  const text = document.getElementById('addtext').value;
  const todo = {};
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
};

// 書き出し関数
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
