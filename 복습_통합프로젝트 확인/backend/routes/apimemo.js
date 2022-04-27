var express = require('express');
var router = express.Router();
const memos = require('../memo.json')
let count = 2; // id....전체 추가된 매모개수

/* GET 을 통해 메모를 보내줌 */
router.get('/', function(req, res, next) { // '/' 이 아닌  api/memo 주소로 들어가야하는데 app.js에서 그걸 연결시켜보자! 
    console.log(memos);
    res.send(memos); // MemoList.vue로 [] 배열형태로 보냄, 
});

/* 1. post 를 통해서 메모값을 받아옴 (writeform.vue) */
// post를 통해서 메모값을 받아오는 -axios
router.post('/', function(req, res, next) { // '/' 이 아닌  api/memo 주소로 들어가야하는데 app.js에서 그걸 연결시켜보자! 
    const memo = req.body.data
    count ++; //3부터 id 시작
    const m = {
        id:count,
        title:memo.title,
        memo:memo.memo,
        write:'익명'
    }
    memos.push(m) // memos(=memo.json) 배열에 m을 push함
    res.send('ok'); // send를 통해 값전달
});

// 2. WriteForm의 post를 통해 메모값을 받아옴 - form으로 받아옴
router.post('/writeform', function(req, res, next) { // '/' 이 아닌  api/memo 주소로 들어가야하는데 app.js에서 그걸 연결시켜보자! 
    const memo = req.body
    count ++; //3부터 id 시작
    const m = {
        id:count,
        title:memo.title,
        memo:memo.memo,
        write:'익명'
    }
    memos.push(m) // memos(=memo.json) 배열에 m을 push함
    res.redirect('/');
});


// get을 통해 id값이 동일한 메모를 보내줌
router.get("/:id", function(req,res,next) {
    //윗줄 받아온 ':id값을 들고와서 res.send(8줄) 를 통해 전달해주려고한다
    const id = req.params.id // /:id 값을 가져오기 위해 선언한다
    const m = memos.filter((memo) => { if (memo.id ==id ) {return true} }) 
    // (memo: memos배열안의 객체)
    // 메모id와 받아온id값이 같으면(조건) m에 그값을 저장한다
    // m 은 memos의 필터의 결과가 참인 객체들을 배열로 가져온다
    // 그래서 객체형식으로 보내기 위해서 배열안에 있는 값의 위치를 [0] 지정해서 보낸다
    res.send(m[0]) // 이렇게 객체로 보낸다 {id:1, memo:첫번째} 객체형식임!
})

module.exports = router;
