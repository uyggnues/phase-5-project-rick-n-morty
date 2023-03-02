nums = (1...42)
character_array = []

nums.map do |n|
    response = HTTParty.get("https://rickandmortyapi.com/api/character?page=#{n}")
    characters = response["results"]
    character_array += characters
end

e_nums = (1...3)
episode_array = []

e_nums.map do |e|
    response = HTTParty.get("https://rickandmortyapi.com/api/episode?page=#{e}")
    episodes = response["results"]
    episode_array += episodes
end

# puts episode_array

# response = HTTParty.get('https://rickandmortyapi.com/api/character')


# puts characters
User.delete_all
Character.delete_all
Team.delete_all
TeamMember.delete_all

puts 'seeding User'

User.create(name: 'Seunggyu Lee', email: 'example@example.com', password: 'password', pfp: '', key_words: 'lol, legend')
u = User.all.sample

puts 'seeding chararcters'

character_array.map {
    |c| Character.create(name: c["name"], species: c["species"], gender: c["gender"], image: c["image"], character_class: c["type"], origin: c["origin"])
}
c = Character.all.sample

puts 'seeding episodes'

episode_array.map {
    |e| Episode.create(name: e["name"], air_date: e["air_date"], episode: e["episode"])
}

puts 'seeding char_eps'

character_array.map {
    |c| c['episode'].map {
        |e| CharacterEpisode.create(character_id: c['id'], episode_id: e.split('/').last)
    }
}