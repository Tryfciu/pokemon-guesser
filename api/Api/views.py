from rest_framework import views
from rest_framework.response import Response
from .serializers import PokemonSerializer
from .services.pokeapi import Pokeapi;


class RandomPokemons(views.APIView):
    def get(self, request):
        data = Pokeapi.random_pokemons()

        response = PokemonSerializer(data, many=True).data

        return Response(response)
