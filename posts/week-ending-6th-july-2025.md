---
title: Week ending 6th July 2025
slug: week-ending-6th-july-2025
date: 2025-07-06
excerpt: My attention is being pulled in different directions
tags:
  - weeknotes
---
Weather remains good, went for a cold swim in the English channel. Only just passable swimming weather. Heatwave in the UK, an unimaginable 25 degrees!

- Folkestone Fringe website rescue
- Further edits to my capitalism article
- Build educational website explaining how to start a Bitcoin meetup.

I'm working on a website for Folkestone Fringe a local organisation for putting on art and cultural activities in the area.

They needed me to rescue their site from the clutches of an uncontactable developer. This plays out regularly. Some developer or agency build a website for an organisation, time passes and said developer or agency either goes bust or disappears into the abyss.

She luckily dug out the login to the hosting dashboard. Got into the server, copied out the site files, created a new repo and setup a new git deployment. ProcessWire CMS goodness, (no idea) met them for a briefing and will work on it next week. Very little money, but doing like the people behind it. Well one of them is my wife, so how could I refuse!

Brendan got back to me with some very useful feedback on my capitalism article. I wonder if it's normal for writers to do so many re-writes, and basically never be happy with a piece of writing. I feel like I've got so much to say and cover, it's like the opposite of writers block.

Also working on a website for Simon from [bitcoinevents.uk](bitcoinevents.uk) he's got an amazing [resource](https://github.com/Hodl-Solo/BitcoinEventsUK) for helping people start their own meetups. However it's just a github readme. Simon took up my offer to build this into a website.

I got v1 finished today. Took me longer than expected. I thought this would be a simple build, but oh nothing is simple in web development! I wanted Simon to be able to continue writing markdown to update and create new content. Ok, so we need to convert .md to html

Please not next.js again, how about eleventy. Good pretty straight forward setup, got it working locally in minutes.

Then I realised I needed a separate configuration, to transform paths for my github pages environment. This wasn't straightforward to configure. Ended up using the [Base plugin](https://www.11ty.dev/docs/plugins/html-base/plugin).

Then I realised I need the site to regenerate whenever any markdown files are updated and pushed up to the remote repo. So need to setup a github action to do this on every push.

I created my own repo, and setup the gh pages site, with the plan to eventually drop this code into Simon's repo, ask for admin priviliges to do the configuration on the github side, but then realised that personal repo's don't allow assigning admins. You need to setup an organisation.

Luckily my day job was quiet!
