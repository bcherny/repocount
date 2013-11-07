
buster.spec.expose()

describe 'github', ->

	it 'fetches the correct count', (done) ->

		count = new repocount
			github: 'demo'
		, (res) ->

			done buster.assert.equals res.github.length, 1