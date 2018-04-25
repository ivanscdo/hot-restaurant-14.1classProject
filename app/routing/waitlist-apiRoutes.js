exports.apiWaitlist = function(req, res) {
    var waitlist = [
        {
            this: "test", 
            is: "test", 
            the: "test", 
            waitlist: "test",
        }
    ]
    return res.json(waitlist);
    // res.send("this is the waitlist!");
}