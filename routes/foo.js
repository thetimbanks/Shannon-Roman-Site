/*
 * GET foo page.
 */

exports.foo = function(req, res){
  res.render('foo', { title: 'Foo' })
};