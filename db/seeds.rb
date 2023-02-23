response = HTTParty.get('https://rickandmortyapi.com/api/character')

characters = response["results"]

# puts characters
User.delete_all
Character.delete_all
Team.delete_all
TeamMember.delete_all

puts 'seeding User'

User.create(name: 'Seunggyu Lee', email: 'example@example.com', password: 'password')


puts 'seeding chararcters'

characters.map {
    |c| Character.create(name: c["name"], species: c["species"], gender: c["gender"], image: c["image"], character_class: c["type"], origin: c["origin"])
}
c = Character.all.sample

puts 'seeding team'

t1 = Team.create(name: 'sudoku')

puts 'seeding team_member'
5.times do
    TeamMember.create(team: t1, character: c)
end
