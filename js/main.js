var app = new Vue({
    el: '#app',
    data: {
        title: 'ジャンケン記録アプリ（Vue.jsのテスト）',
        newItem: '',
        todos: [],
        user: {
            lastName: '塩見',
            firstName: '和真',
            age: 30
        },
        memo: ['こんな感じで', 'リストにデータが', '入れられる']
    },
    methods: {
        addItem: function (event) {
            // newItemが空っぽならreturnで強制終了
            if (this.newItem == '') return;

            // newItemの結果を元にジャンケンをする
            myNumber = document.getElementById("mySelect").selectedIndex;
            hisNumber = Math.floor(Math.random() * 3);

            if (hisNumber == 0) {
                hisHand = "ぐー";
            }
            if (hisNumber == 1) {
                hisHand = "ちょき";
            }
            if (hisNumber == 2) {
                hisHand = "ぱー";
            }
            if (myNumber - hisNumber == -2) {
                judge = "あなたの 負け";
            }
            if (myNumber - hisNumber == -1) {
                judge = "あなたの 勝ち";
            }
            if (myNumber - hisNumber == 0) {
                judge = "両者の 引き分け";
            }
            if (myNumber - hisNumber == 1) {
                judge = "あなたの 負け";
            }
            if (myNumber - hisNumber == 2) {
                judge = "あなたの 勝ち";
            }

            // ジャンケンの結果を保存しておく
            var todo = {
                you: this.newItem,
                aite: hisHand,
                result: judge,
                isDone: false
            };

            this.todos.push(todo);
            this.newItem = '';
        },
        deleteItem: function (index) {
            this.todos.splice(index, 1)
        }
    }
})


