var express = require("express");
var router = express.Router();
const memos = require("../memo.json");
// memos의 길이 :2
let count = memos.length;

/* 메모리스트를 보내주는 주소 */
router.get("/", function (req, res, next) {
  console.log(memos);
  res.send(memos);
});

/* id 값을 통해 메모를 구분, 노출상관없음, 
   한개의 메모만 보냄 */
router.get("/:id", function (req, res, next) {
  // 파람 id값에는 memo의 id가 담겨있다
  // id값을 통해서 하나의 메모를 찾거나(find) 걸러낸다(filter)
  const id = req.params.id;

  const m = memos.filter((memo) => memo.id == id);

  console.log(m[0]);
  res.send(m[0]);
});

// post로 받아온 값을 memos에 추가(push)
router.post("/writeform", function (req, res, next) {
  // axios로 받아왔다는 조건하에 body.data
  const memo = req.body.data;
  count++;
  const m = {
    id: count,
    title: memo.title,
    memo: memo.memo,
    writer: "익명",
  };
  memos.push(m);
  res.send("ok");
});

router.post("/writeform/form", function (req, res, next) {
  // form 태그를 통해 받아옴 (data 사용 X, 바로 body)
  const memo = req.body;
  count++;
  const m = {
    id: count,
    title: memo.title,
    memo: memo.memo,
    writer: "익명",
  };
  memos.push(m);
  res.redirect("/");
});

// put을 이용한 데이터값 수정
router.put ("/:updateform", function(req,res,next) {
  const memo = req.body.data.memo;
  console.log(memo)

  //memo의 id값을 통해 memos의 인덱스 찾기
  const i = memos.findIndex( (m) => memo.id == m.id );

  memos[i] = memo; //memos 배열안에 동일한 id를가진 memo에 값을 덮어씌움=수정
  res.send(ok); // 덮어씌우기ok~

})

// delete를 이용해 삭제
router.delete ("/:id", function(res,req,next) {
  // id값을 받아와서 삭제하기로 했으니 id를 먼저 const한다 
  const id = req.params.id
  // id값을 통해서 동일한 index를 찾는다
  const i = memos.findIndex( (m) => id == m.id );
  //index를 사용해 1개만 삭제한다
  memos.splice(i,1);
  // 삭제 후 전체 배열값을 보낸다
  res.send(memos);
})

module.exports = router;
