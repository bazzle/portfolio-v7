---
title: Week ending 6th April 2025
slug: week-ending-6th-april-2025
date: 2025-04-06T13:00:00.000Z
excerpt: Working on my "Thoughts" blog site
tags:
  - weeknotes
---
I've been making some good progress on this website. I've gone down some rabbit holes.

* **Netlify & Decap** A new one for me. I've always just used GitHub pages to host my static sites. When I was researching which CMS to use I chose Decap, which led me to choose Netlify to host the site. Decap was previously Netlify CMS. I like how it works. The CMS is loaded via CDN right into my website. Decap outputs Markdown files to my repo, which triggers a git push, which in turn prompts Netlify to run my build command remotely. Kind of a challenge to my idea that a CMS should write to a database, instead of add files to a repo, but hey, this is how static sites work! Setting up authentication was a bit of a challenge but got there in the end.

* **SASS imports** Realised I didn't fully understand the difference between `use` and `forward`. Wasn't everything so much simpler when we just used `import`? I had a stimulating conversation with ChatGPT. I didn't get it at first, so I asked it to explain with metaphors, which made me even more confused. Never ask ChatGPT to use metaphors. Eventually I got it when I realised that `forward` doesn't add the referenced partial to the stylesheet, just makes the contents (variables, mixins etc) available to use, and that's the distinction. I imagine there's more to it than that. Will look into it more at some point.

* **Git Submodules** Another new one for me. Whenever I've needed to "nest" a repo into another one, I've just cloned the child repo into the parent, and gitignored the folder the new repo occupies. There is a much cleaner way of doing this by cloning the child repo as a submodule. I used this approach to include the shared style library on this website and my portfolio site.
