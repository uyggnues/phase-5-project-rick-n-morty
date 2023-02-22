response = HTTParty.get('https://rickandmortyapi.com/api/character')

characters = response["results"]

# puts characters

Character.delete_all

puts 'seeding chararcters'

characters.map {
    |c| Character.create(name: c["name"], species: c["species"], gender: c["gender"], image: c["image"], character_class: c["type"], origin: c["origin"])
}

