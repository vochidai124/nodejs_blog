class SiteController {
    // Get /home
    index(req, res) {
        res.render('home');
    }
    show(req, res) {
        res.send('HOME DETAIL!!');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();