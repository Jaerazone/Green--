var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile HTML파일을 연결시키기 위해사용, 경로 조인, public의 index.html 연결!
  //    '/' 경로로 들어와도 public의 index.html 파일로 접근하게된다!
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
