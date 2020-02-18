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
  // 各種値を更新
  todo.task = text;
  todo.done = false;
  // 配列追加
  todos.push(todo);
  console.log(todos);
};
