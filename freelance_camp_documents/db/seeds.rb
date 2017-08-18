# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |d|
  FreelanceDocument.create!(
  title: "Document #{d}",
  description: "Lorem ipsum dolor sit amet, quaeque graecis pri et. Has eu sale exerci, in pro vide ferri percipit. Mel ea diam nostrud reformidans, vis no animal repudiandae. Id sit suas mundi eligendi, ut tantas singulis mei.",
  file_url: "http://google.com",
  image_url: "http://google.com")
end

puts "10 document records are made"
