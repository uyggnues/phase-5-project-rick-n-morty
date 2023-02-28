nums = (1...42)
character_array = []

nums.map do |n|
    response = HTTParty.get("https://rickandmortyapi.com/api/character?page=#{n}")
    characters = response["results"]
    character_array += characters
end

# response = HTTParty.get('https://rickandmortyapi.com/api/character')


# puts characters
User.delete_all
Character.delete_all
Team.delete_all
TeamMember.delete_all

puts 'seeding User'

User.create(name: 'Seunggyu Lee', email: 'example@example.com', password: 'password', pfp: '')
u = User.all.sample

puts 'seeding chararcters'

character_array.map {
    |c| Character.create(name: c["name"], species: c["species"], gender: c["gender"], image: c["image"], character_class: c["type"], origin: c["origin"])
}
c = Character.all.sample

puts 'seeding team'

t1 = Team.create(name: 'sudoku', user: u)

puts 'seeding team_member'
5.times do
    TeamMember.create(team: t1, character: c)
end
