class CharactersController < ApplicationController

    private
    def request_api(url)
      response = Excon.get(
        url,
        headers: {
          'X-RapidAPI-Host' => URI.parse(url).host,
          'X-RapidAPI-Key' => ENV.fetch('RAPIDAPI_API_KEY')
        }
      )
      return nil if response.status != 200
      JSON.parse(response.body)
    end
    def find_country(name)
      request_api(
        "https://rickandmortyapi.com/api/character"
      )
    end
end
