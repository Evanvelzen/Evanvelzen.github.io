extends Spatial



func _ready():
	$"the brother/AnimationPlayer".connect("animation_finished", self, "on_animation_finished")

func on_animation_finished(_anim):
	get_tree().change_scene("res://you_died_screens/died_on_level_2.tscn")
