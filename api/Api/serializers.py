from rest_framework import serializers


class PokemonSerializer(serializers.Serializer):
    id: int = serializers.IntegerField()
    name: str = serializers.CharField()
    order: int = serializers.IntegerField()
    imageUrl: str = serializers.CharField()

