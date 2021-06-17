function att_attack() {
    var name = $('input[name="att-name"]').val();
    var stat = $('select[name="stat"]').val();
    var base = parseInt($('input[name="' + stat + '-mod"]').val()) || 0;
    var dice = $('input[name="dice"]').val();
    var bonus = parseInt($('input[name="bonus"]').val()) || 0;
    var damage_type = $('input[name="dmg-type"]').val();

    if ($('#attack-form select[name="type"]').val() == 'toHit') {
        if ($('input[name="proficiency"]').prop("checked") == true) {
            var prof = parseInt($('input[name="proficiency"]').val()) || 0;
        } else {
            var prof = 0;
        }
        var to_hit = ((base + prof + bonus) < 0 ? "" : "+") + (base + prof + bonus);
    } else {
        var dc = $('input[name="dc"]').val();
    }
    var damage_bonus = base + bonus;
    var damage = dice + ((damage_bonus) < 0 ? "" : "+") + damage_bonus;

    $('#attacks tbody').append(
        `
		<tr>
			<td><input type="text" name="name" value="` + name + `"/></td>
			<td><input type="text" name="stat" value="` + stat + `"/></td>
			<td><input type="text" name="toHit" value="` + (to_hit ? to_hit : dc) + `"/></td>
			<td><input type="text" name="damage" value="` + damage + `"/></td>
			<td><input type="text" name="damage_type" value="` + damage_type + `"/></td>
			<td><button type="button" class="close">X</button></td>
		</tr>
		`
    );

}

$('document').ready(function(argument) {

    $('select[name="type"]').change(function(argument) {
        if ($(this).val() == 'toHit') {
            $('#attack-prof').show()
            $('#attack-dc').hide();
        } else {
            $('#attack-dc').show()
            $('#attack-prof').hide();
        }
    });

    $('input[name="spell-dc"]').change(function(argument) {
        var dc = parseInt($('input[name="spell-dc"]').val()) || 0;
        $('input[name="dc"]').val(dc);
    });

    $('#attacks tbody').on('click', 'button', function(argument) {
        $(this).parent().parent().remove();
    });

});