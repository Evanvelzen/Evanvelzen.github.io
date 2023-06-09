extends Spatial


onready var player_area = $player/collider
onready var anim = $AnimationPlayer

# Called when the node enters the scene tree for the first time.
func _ready():
	player_area.connect("area_entered", self, "open_door")
	player_area.connect("area_entered", self, "open_door_2")
	player_area.connect("area_entered", self, "open_door_3")
	player_area.connect("area_entered", self, "open_door_5")
	player_area.connect("area_entered", self, "open_Main_Door")
	player_area.connect("area_entered", self, "shotgun_animation")

func open_door(area):
	if area.is_in_group("door"):
		anim.play("door")

func open_door_2(area):
	if area.is_in_group("door 2"):
		anim.play("door 2")

func open_door_3(area):
	if area.is_in_group("door 3"):
		anim.play("door 3")

func open_door_5(area):
	if area.is_in_group("door 5"):
		anim.play("door 5")

func open_Main_Door(area):
	if area.is_in_group("Main Door"):
		anim.play("Main Door")
		
func shotgun_animation(area):
	if area.is_in_group("Shotgun Animation"):
		anim.play("Shotgun Animation")
