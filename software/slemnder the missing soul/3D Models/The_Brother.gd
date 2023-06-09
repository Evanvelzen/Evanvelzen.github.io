extends KinematicBody

onready var hitbox = $"the brother/Area"

func _ready():
	hitbox.connect("body_entered", self, "on_player_hit")

func on_player_hit(body):
	if body.name == "player":
		get_tree().change_scene("res://Jumpscares/brother_jumpscare.tscn")
