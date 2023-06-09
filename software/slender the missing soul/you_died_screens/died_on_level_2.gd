extends CanvasLayer

onready var retry_button = $Control/VBoxContainer/Button
onready var menu_button = $Control/VBoxContainer/Button2

func _ready():
	menu_button.connect("pressed", self, "go_to_menu")
	retry_button.connect("pressed", self, "retry_level")
	Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)

func go_to_menu():
	get_tree().change_scene("res://menu/menu.tscn")

func retry_level():
	get_tree().change_scene("res://levels/Level 2.tscn")
