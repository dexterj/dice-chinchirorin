
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Chinchiror.in', subtitle: 'A Dice Game' });
};