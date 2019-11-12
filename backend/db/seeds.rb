# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Template.create(title: 'Sibling Rivalry', story: [
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

Template.create(title: 'Double Life', story: [
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