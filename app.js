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
};

// 書き出し関数
function addtodo(todos) {
  // ul取得
  const tasklist = document.getElementById('tasklist');
  // li作成
  var newli = document.createElement('li');
  // todosの配列を1つずつとる
  for (let i in todos) {
    var addlist = todos[i].task;
  }
  // HTMLに書き出し
  newli.insertAdjacentHTML('afterbegin', '<i class="material-icons">favorite</i>');
  newli.appendChild(document.createTextNode(addlist));
  tasklist.appendChild(newli);
};

// 完了タスク
const tasklist = document.getElementById('tasklist');
tasklist.addEventListener('click', (e) => {
  let target = e.target;
  // iのみ処理を行う
  const icon = document.getElementsByClassName('material-icons');
  for (var i = 0; i < icon.length; i++) {
    if (target === icon[i]) {
      target.classList.toggle('end');
      // done変更
      todos[i].done = !todos[i].done
    }
  }
  console.log(todos);
});
