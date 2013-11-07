
	
	_ =

		length: (object) ->

			length = 0

			++length for own key of object
			
			length


	class repocount

		options:

URLs for API `GET`s

			apis:

				github: 'https://api.github.com/users/:id/repos'

eg.
```coffee
new Repocount
	github: 'myGithubUsername'
	npm: 'myNpmUsername'
```

		results: {}

		constructor: (@identities, callback) ->

			_push = (api, result) =>
				@results[api] = result
				if _.length(@results) is _.length(@identities)
					callback @results

			for api, identity of @identities
				@fetch api, identity, _push

## parse
templates API URLs

		parse: (api) ->

			if @options.apis? and @options.apis[api]?

				@options.apis[api].replace ':id', @identities[api]

## fetch
use vendor APIs to fetch repository counts

		fetch: (api, username, callback) ->

			page = 1
			result = []
			url = @parse api

			setTimeout =>

				if url
								
					_check = (res) =>

						res = JSON.parse res

the response could be paginated, try requesting the next page by incrementing the `page` GET parameter

						if res.length

							result = result.concat res
							@request url, ++page, _check

						else
							callback api, result

					@request url, page, _check

			, 0

		request: (url, page, success) ->

			uxhr url, page: page,
				success: success