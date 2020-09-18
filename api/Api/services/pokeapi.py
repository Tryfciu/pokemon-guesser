import requests
import random
from typing import List


class Pokemon:
    def __init__(self, id: int, name: str, order: int, image_url: str):
        self.id = id
        self.name = name
        self.order = order
        self.imageUrl = image_url


class Pokeapi():

    url = 'https://pokeapi.co/api/v2/pokemon/'
    api_limit = 100 ## prev 807 ## prev 700
    batch_size = 5

    @classmethod
    def random_pokemons(cls) -> List[Pokemon]:
        first_id: int = random.randrange(1, cls.api_limit-cls.batch_size)
        urls: List[str] = cls.prepare_urls(first_id)
        pokemons: List[Pokemon] = []

        for url in urls:
            response = requests.get(url).json()

            pokemons.append(Pokemon(
                response['id'],
                response['name'],
                response['order'],
                response['sprites']['other']['official-artwork']['front_default']
            ))

        return pokemons

    @classmethod
    def prepare_urls(cls, first_id: int) -> List[str]:
        urls = []

        for x in range(first_id, first_id+cls.batch_size):
            urls.append(cls.url+str(x))

        return urls
