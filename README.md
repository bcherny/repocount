repocount
=========

Fetch a user's contribution statistics from various platforms (currently supports Github).

## features

- supports github
- supports paginated responses
- async, so it won't block anything else going on on the page
- umd

## usage

```coffee
	new repocount
		github: 'myGithubUsername'
	, (repos) ->
		
		# returns object where each key is the platform and each value is an array of contributions, like so:
		#
		# {
		# 	github: [ ... ] 
		# }
```

## building it yourself

```bash
npm install
grunt
```

## running the tests

```bash
npm install
buster-server
# open the given URL in a browser and press "Capture browser", then:
buster-test
```