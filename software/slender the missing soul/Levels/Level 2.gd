extends Spatial

onready var player = $GridMap/player
onready var page_container = $GridMap/"page container"
onready var animation_player = $AnimationPlayer
var pages_collected = 0
var total_pages = 0
var leave_level = false
onready var activating_area = $gate/Area



export (PackedScene) var cutscene = null


func _ready():
	player.connect("page_collected", self, "on_page_collected")
	total_pages = page_container.get_child_count()
	activating_area.connect("area_entered", self, "change_to_cutscene")


func on_page_collected():
	pages_collected += 1
	if pages_collected == 2:
		animation_player.stop()
		animation_player.play("change_to_page_3")
	if pages_collected == 4:
		animation_player.stop()
		animation_player.play("change_to_page_5")
	if pages_collected == 6:
		animation_player.stop()
		animation_player.play("change_to_page_7")
	if pages_collected >= total_pages:
		print("won")
		animation_player.stop()
		leave_level = true
		animation_player.play("open gate")

func change_to_cutscene(area):
	if area.is_in_group("player"):
		if leave_level == false:
			animation_player.play("cant_open_gate")
		if leave_level == true:
			get_tree().change_scene_to(cutscene)
