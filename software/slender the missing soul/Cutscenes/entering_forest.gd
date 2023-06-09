extends Spatial

export (PackedScene) var level_two = null
onready var ending_area = $Area
onready var camera_area = $camera/Area

func _ready():
	camera_area.connect("area_entered", self, "on_area_entered")
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)

func on_area_entered(area):
	if area.is_in_group("end"):
		get_tree().change_scene_to(level_two)
