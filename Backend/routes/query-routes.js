const express = require("express")

const queryControllers = require("../controllers/query-controllers")

const router = express.Router()

router.get("/", queryControllers.queryMedication)

module.exports = router
