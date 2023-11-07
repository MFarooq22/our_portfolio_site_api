
const helloShuaib = (req, res) => {
    res.status(200).json({"Message":"Hello Shuaib"});
}

const helloFarooq = (req, res) => {
    res.status(200).json({"Message": "Hello Farooq"});
}

module.exports = {helloShuaib, helloFarooq};
