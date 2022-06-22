const gitalk = new Gitalk({
  clientID: '21d1a5313bdc1d36e848',
  clientSecret: 'a35244a4cf1000c7e8a86ee8b32e7ccce3d87a12',
  repo: 'website,      // The repository of store comments,
  owner: 'cycleguy22',
  admin: ['cycleguy22'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
