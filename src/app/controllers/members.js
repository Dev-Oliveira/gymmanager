
const { age, date } = require('../../lib/utils')
const Member = require('../models/Member')

module.exports = {
    index(req, res){
        
        Member.all(function(members) {
            return res.render("members/index", {members})
    
        })

    },
    create(req, res){
        return res.render('members/create')
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == ""){
                return res.send('Please, fill all fields!')
            }
        }
        
        Member.create(req.body, function(member) {
            return res.redirect(`/members/${member.id}`)
        })

        
    },
    show(req, res){
        Member.find(req.params.id, function (member){
            if (!member) return res.send("Member no found!")

            member.birth = date(member.birth).birthDay

            return res.render("members/show", { instrutor })
        })
    },                
    edit(req, res){
        Member.find(req.params.id, function (member){
            if (!member) return res.send("Member no found!")

            member.birth = date(instrutor.birth).iso

            return res.render("members/edit", { instrutor })
        })
    },   
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        Member.update(req.body, function() {
            return res.redirect(`/members/${req.body.id}`)
        })        
    },   
    delete(req, res){
        Member.delete(req.body, function(){
            return res.redirect(`/members`)
        })
    }   
}