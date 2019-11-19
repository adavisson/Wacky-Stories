# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

temp_1 = Template.create(title: 'Sibling Rivalry', story: [
    'There once was a young ',
    ' from ',
    '. They had ',
    ' siblings that all share the same ',
    '. One day, ',
    ', the oldest sibling decided they had had enough and bought a new ',
    ' to use for transportation. This new mode of transportation was so ',
    ' that all of the other siblings felt ',
    '. They had enough and now they all ',
    ' to get around.'
  ], hints: [
    'animal',
    'place',
    'number',
    'mode of transportation',
    'name',
    'animal',
    'adjective',
    'feeling',
    'movement'
  ]);

temp_2 = Template.create(title: 'Double Life', story: [
    '',
    ' was a ',
    ' by day, but a ',
    ' by night. Nobody knew of the double life they were leading until they went to ',
    ' and ran into ',
    '. After being offered the part of a ',
    ' in the next major motion picture titled ',
    ', they declined so that their secret identity would not be revealed. Hollywood was ',
    ', but heading home to their ',
    ', ',
    ', felt great.'
  ], hints: [
    'name',
    'occupation',
    'occupation',
    'place',
    'actor or actress',
    'occupation',
    'made up movie name',
    'feeling',
    'pet',
    'name'
  ])

temp_3 = Template.create(title: 'Overcoming Fear', story: [
    'There was an old man that lived in ',
    '. He did not like to go outside because he was afraid of the ',
    '. One day he really needed a(n) ',
    ', so he braved the walk to the ',
    '. On his way he encountered a ',
    ', and was very ',
    '. He decided the best way to handle the situation was to name it ',
    '. They quickly became best buds and spend every day ',
    '. The End.'
  ], hints: [
    'place',
    'animals',
    'grocery item',
    'place',
    'animal from above',
    'feeling',
    'name',
    'activity'
  ])

Solution.create(title: 'Scary Foxes', template_id: temp_3.id, words: [
    'Mount Everest',
    'foxes',
    'tortilla chips',
    "Kara's House",
    'fox',
    'flabbergasted',
    'Buddy',
    'triathlons'
  ])