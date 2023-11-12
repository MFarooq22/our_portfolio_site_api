    const mongoose = require('mongoose');



    const homeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },

        socialLinks: [
            {
                facebook: String,
            },
            {
                instagram : String
            }
        ],
        skills: [String],
        aboutMe: String,
        resumeLink: String,
        address: [
            {
                age: String,
            }
        ]

    })
module.exports = mongoose.model('home', homeSchema);
