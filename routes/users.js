let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload:true
})

module.exports = (app)=>{

    app.get('/users', (req,res)=> {

        db.find({}).sort({name:1}).exec((err, users)=>{//parameter on find -> object that tells what you are looking for. Since we need all the users on the db, we use an empty object as a parameter

            if(err){
                console.log(`error: ${err}`);
                res.status(400).json({
                    error:err
                });
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users// before ECMA 6 -> users: users. Now, if the key has the same name as the variable, you only need to write once.
                });

            }

        });

    });

    app.post('/users', (req, res)=>{

        db.insert(req.body, (err, user)=>{
            if(err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {

                res.status(200).json(user);

            }
        });

    });

};