router.route('/users')

    // create a user (accessed at POST http://localhost:8080/api/users)
    .post((req, res)=> {
        var user = new User();      // create a new instance of the user model
        
        user.save(
             function(err) {
             if (err)
                 res.send(err);
             console.log('>>>>>>>>>>>', res)
             res.json({ message: 'user created!' });
         });

        

    })