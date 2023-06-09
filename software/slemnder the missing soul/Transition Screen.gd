extends CanvasLayer

func _ready():
	transition()

func transition():
	$AnimationPlayer.play("Fade Animation")
