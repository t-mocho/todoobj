// 初期値
var todos = [{
  task: addtext,
  done: false
}];

// 追加
const addbtn = document.getElementById('addbtn');
addbtn.onclick = function() {
  const text = document.getElementById('addtext').value;
  for () {
    // 各種値を更新
    todos.task = text;
    todos.done = false;
  }
  // 配列に追加
  todos.push();
  console.log(todos);
};
