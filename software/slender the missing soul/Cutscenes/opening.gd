extends Spatial

export (PackedScene) var level_one = null

onready var aRea = $Area

func _ready():
	aRea.connect("area_entered", self, "on_area_entered");
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)


func on_area_entered(area):
	if area.is_in_group("end_1"):
		get_tree().change_scene_to(level_one)
