repocount
=========

Fetch a user's contribution statistics from various platforms (currently supports Github).

## features

- supports github
- supports paginated responses
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