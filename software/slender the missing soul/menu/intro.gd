extends Spatial

export (PackedScene) var main_menu = null
onready var switch = $Area2

func _ready():
	switch.connect("area_entered", self, "change")

func change(area):
	if area.is_in_group("switch"):
		get_tree().change_scene_to(main_menu)
