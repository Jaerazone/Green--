// 새로운 라우터 생성
var express = require('express');
var router = express.Router();
// json 데이터 들고옴
const memos = require('../memo.json');

router.get('/', function(req, res, next) {
  console.log(memos); // 값을 들고왔는데 어떻게 출력되는지 몰라서 콘솔로 적어봄
  res.send(memos);
});

// 복습 하신 분들 하실 것
// 보통 /:id 값을 받아오는 경우는 해당 id와 title과 메모 보여줌
//  /api/memo/:id 로 접근한다고 생각하면됨 앞이 생략되어있음
router.get('/:id', function(req, res, next) {
  // 1.memo를 통째로 보내서 해당 id 값만 출력해줘도 되고
  // 2.동일한 id값을 받아왔다면 그 id값과 같은 memo만  res통해서 보내주기
  // 배열의 filter를 통해서 찾아주는 방법, index값을 이용해서 찾아주는 방법
  // 그 내용만 보여주는 메모 뷰도 하나 만들어야 한다
  // 우리가 Vuex에서 VUEMEMO폴더
  const m = memos.filter( (memo) => memo.id == req.params.id )
  // 필터를 통해 memos의 배열의 값을 memo에 넣어서
  //  memo의 id값과 req.params.id 값이 같을때(true) m배열에 넣어줌
  console.log(m); // 값을 들고왔는데 어떻게 출력되는지 몰라서 콘솔로 적어봄
  res.send(m[0]);
});

module.exports = router;
