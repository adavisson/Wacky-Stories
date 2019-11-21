# Wacky-Stories
This application mimics Mad Libs. A user picks a template, is presented with word hints, fills in the blanks, and is then presented with a story.

# Template Notes
- Templates are objects with keys of 'title', 'story', 'hints'
- 'story' and 'hints' are both arrays of strings
- If a story is going to start with a hint, make sure the story leads with blank string as the first element of the array
- You can add a template either through the Rails console or in the seeds file

# Instructions to run
- Change into '/backend'
- Run `foreman start -p 3000`
- The Rails server shouls start on localhost:3001 and the application should open in your web browser to localhost:3000