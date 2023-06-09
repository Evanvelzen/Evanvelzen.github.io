extends Spatial

export (PackedScene) var l1_l2 = null
var closed_backdoor = 1
var closed = 1
onready var door_area = $door/Area
onready var door_anim = $door/AnimationPlayer
onready var player_area = $player/collider
onready var backdoor_area = $backdoor/Area
onready var backdoor_anim = $backdoor/AnimationPlayer
onready var backdoor_area2 = $Area2

func _ready():
	player_area.connect("area_entered", self, "level_entered");
	player_area.connect("area_entered", self, "door_animation");
	player_area.connect("area_entered", self, "backdoor_play");
	player_area.connect("area_entered", self, "backdoor_close");

func level_entered(area):
	if area.is_in_group("cut"):
		get_tree().change_scene_to(l1_l2)

func door_animation(area):
	if area.is_in_group("door"):
		if closed == 1:
			door_anim.play("opening")
			closed = closed - 1


func backdoor_play(area):
	if area.is_in_group("backdoor"):
		if closed_backdoor == 1:
			backdoor_anim.play("opening")
			closed_backdoor = closed_backdoor - 1


func backdoor_close(area):
	if area.is_in_group("backdoor_close"):
		if closed_backdoor == 0:
			backdoor_anim.play("closing");
			closed_backdoor = closed_backdoor + 2

