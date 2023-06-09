extends Spatial

func _ready():
	$AnimationPlayer.connect("animation_finished", self, "on_animation_finished")

func on_animation_finished(_anim):
	get_tree().change_scene("res://levels/Level 3.tscn")
