var express = require('express');
var router = express.Router();

const memos = require('../memo.json')
let count =2;

router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

router.post('/writeform', function(req,res,next) {
    const memo = req.body;
    count ++;
    const m = {
        id : count,
        title : memo.title,
        memo : memo.memo,
        writer : '익명'
    }
    memos.push(m);
    res.redirect('/');
})

router.get('/:id', function(req,res,next) {
    console.log(req.params.id)
    const id = req.params.id
    const filtermemo = memos.filter((memo) => { if (memo.id ==id ) {return true} }) 
    res.send(filtermemo[0])
})



module.exports = router;
