router.get('/dev/rundata', loginCheck, function (req, res) {
    let powerData = {}
    powerData.isA = req.query.isA || ''
})

//req.query.isA   Usually a default value is given, otherwise it may be underfine
