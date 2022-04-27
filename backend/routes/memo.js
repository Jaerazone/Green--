// 4. 새로운 라우터 생성
// memo와 관련된 모든 주소를 작성하기 위함
var express = require('express');
var router = express.Router();
// 5. DB대신 사용하기위한 json 데이터를 들고 옴
const memos = require('../memo.json');

// '/'주소로 되어있지만 실제 주소는 '/api/memo'이다
// 그 이유는 ?  app.js에서 라우터를 가져올 때 앞에 붙은 주소를 정해줌
router.get('/', function(req,res, next) {
    // 6. 가져온 memos를  콘솔에 출력하고 res.send를 통해 보냄
    console.log(memos); // memo.json을 제대로 들고오는지 콘솔로 찍어봄!
    res.send(memos); // 경로'/'에 접근하면 memo.json의값을 출력
})


// 복습 하신 분들 하실 것
// 해당 id의 title과 메모 보여줌
// /api/memo/:id (:id와 같은 :콜론 기호를 붙이는 곳은 라우터에서만)
router.get('/:id', function(req,res, next) {
    // 1. memos를 통채로 보내서 해당 id값만 출력
    // 2. 동일한 id 값을 받아와서 그 id 값과 같은 memo만 res통해서 보내주기
    // 배열의 filter를 통해서 찾아주는 방법1개와, 인덱스값을 이용해서 찾아주는 방법 1개 있음!
    // 메모한 내용만 뷰로 보여주는것도 해야함?..
    const m = memos.filter( (memo) => memo.id == req.params.id);
    // 필터를 통해 memos의 배열의 값을 memo에 넣어서
    // memo의 id값과 req.params.id 값이 같을때 (trun) m 배열에 넣어줌

    console.log(memos); 
    res.send(m[0]); // 경로'/'에 접근하면 memo.json의값을 출력
    /*
        (4 실행순서) AboutView에서 axios로 보낸 request를 받고
        (5) memos의 값을 reponse를 통해 보내줌
    */
})

module.exports = router;
