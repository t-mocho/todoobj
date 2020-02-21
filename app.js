// todolist
var todos = [{
  num: 0,
  task: addtext,
  done: false
}];
// 0番目削除
todos.shift();

// id
const tasklist = document.getElementById('tasklist');

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
  // li作成
  var newli = document.createElement('li');
  // todosの配列を1つずつとる
  for (let i in todos) {
    var addlist = todos[i].task;
    var adddone = todos[i].done;
  }
  // true判定
  if (adddone === true) {
    newli.insertAdjacentHTML('afterbegin', '<i class="material-icons add end">favorite</i>');
    // false
  } else {
    newli.insertAdjacentHTML('afterbegin', '<i class="material-icons add">favorite</i>');
  }
  // HTMLに書き出し
  newli.appendChild(document.createTextNode(addlist));
  newli.insertAdjacentHTML('beforeend', '<i class="material-icons del">delete</i>');
  tasklist.appendChild(newli);
  // ローカル保存
  save();
};

// 完了
tasklist.addEventListener('click', (e) => {
  //console.log(todos);
  let target = e.target;
  // addclass
  const icon = document.getElementsByClassName('material-icons add');
  if (target.classList.contains('add')) {
    for (var i = 0; i < todos.length; i++) {
      // ハートクリックでtoggle
      if (target === icon[i]) {
        target.classList.toggle('end');
        // done変更
        todos[i].done = !todos[i].done;
      }
    }
  }
  // ローカル保存
  save();
});

// 一列削除
tasklist.addEventListener('click', (a) => {
  target = a.target;
  const delli = target.parentNode;
  for (var i = 0; i < todos.length; i++) {
    const delicon = document.getElementsByClassName('material-icons del'); // deliconがクリックされたら処理
    if (target === delicon[i]) {
      // アニメーション
      const delli = target.parentNode;
      delli.style.transform = "translateX(150px)";
      delli.style.opacity = "0";
      delli.style.transition = ".9s";
      setTimeout(function() {
        // HTML削除
        target.parentElement.remove();
      }, 800);
      // 番号取得
      var id = todos.indexOf(todos[i]);
      // 配列削除
      todos.splice(id, 1);
    }
    // ローカル保存
    save();
  }
});

// オール削除
const allclear = document.getElementById('clearbtn');
allclear.onclick = function() {
  if (todos !== 0) {
    // 配列書き換え
    todos = [];
    // アニメーション
    tasklist.classList.toggle('slideout');
    /*
    tasklist.style.transform = "translateX(150px)";
    tasklist.style.opacity = "0";
    tasklist.style.transition = ".9s";
    */
    setTimeout(function() {
      //HTML書き換え
      tasklist.innerHTML = "";
      tasklist.classList.toggle('slideout');
    }, 900);
  }
  // ローカル保存すべて削除
  localStorage.clear();
};


// ローカルに保存
function save() {
  // JSON文字列に変換して保存
  var deta = localStorage.setItem('todos', JSON.stringify(todos));
};

// ローカルから取り出し
(function() {
  // 取り出し
  var loadtodo = localStorage.getItem('todos');
  if (loadtodo) {
    // 文字列に変換
    tododeta = JSON.parse(loadtodo);
    // HTMLに書き出し
    for (var i = 0; i < tododeta.length; i++) {
      todos.push(tododeta[i]);
      addtodo(todos);
    }
  }
  console.log(todos);
})();
