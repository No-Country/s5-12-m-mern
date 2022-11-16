const demousr = [
    {
        id: "1234",
        type: "Owner",
        name: "Felipe Calderon",
        adress: "Temuco, Chile",
        mail: "felipe.calderon321@gmail.com",
        pets: ["12312421", "12123242", "31231233"],
        history: "12412312"
    },
    {
        id: "1235",
        type: "Owner",
        name: "Luca",
        adress: "Temuco, Argentina",
        mail: "luca@gmail.com",
        pets: ["123124221", "132123242", "312231233"],
        history: "312412312"
    }
]

exports.userAll = (req, res) => {
    res.json(demousr)
}

exports.userSingle = (req, res) => {
    const {id} = req.params
    console.log(id)
    res.json(demousr[0])
}