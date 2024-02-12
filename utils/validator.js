module.exports = {

    user:(app, req, res) => {
        req.assert('name', 'Name is required').notEmpty();
        req.assert('email', 'Email is not valid').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }

};