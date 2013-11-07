
Repocount = require '../repocount'

exports.github = (test) ->

	count = new Repocount
		github: 'demo'
	, (res) ->
		
		test.expect(res.length).to.equal(1)

		test.done()