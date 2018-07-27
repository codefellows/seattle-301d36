$.ajax({
  url: 'https://api.github.com/user/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: 'token 7e196764f36b9b2b490460c3dea0292f189a5668'
  }
})
.then(
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  },
  err => {
    console.error(err)
  }
)
