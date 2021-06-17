var LOCKED = false;

function lock(argument) {
    LOCKED = !LOCKED;
    if (LOCKED)
        $('#menu-options #lock').text('Locked');
    else
        $('#menu-options #lock').text('Unlocked');

    $('#menu-options #lock').toggleClass('locked');
    $('#menu-options #lock').toggleClass('unlocked');
}



function updateMod(att, score) {
    var value = '';
    switch (parseInt(score)) {
        case 1:
            value = '-5';
            break;
        case 2:
        case 3:
            value = '-4';
            break;
        case 4:
        case 5:
            value = '-3';
            break;
        case 6:
        case 7:
            value = '-2';
            break;
        case 8:
        case 9:
            value = '-1';
            break;
        case 10:
        case 11:
            value = '+0';
            break;
        case 12:
        case 13:
            value = '+1';
            break;
        case 14:
        case 15:
            value = '+2';
            break;
        case 16:
        case 17:
            value = '+3';
            break;
        case 18:
        case 19:
            value = '+4';
            break;
        case 20:
        case 21:
            value = '+5';
            break;
        case 22:
        case 23:
            value = '+6';
            break;
        case 24:
        case 25:
            value = '+7';
            break;
        case 26:
        case 27:
            value = '+8';
            break;
        case 28:
        case 29:
            value = '+9';
            break;
        case 30:
            value = '+10';
            break;
    }

    $('input[name="' + att + '-mod"]').val(value);
}

function updateSaves() {

    var prof = parseInt($('input[name="proficiency"]').val()) || 0;

    // strength
    if ($('#str-save-prof').prop("checked") == true) {
        var strProf = prof;
    } else {
        var strProf = 0;
    }
    var base = parseInt($('input[name="str-mod"]').val()) || 0;
    var save = ((base + strProf) < 0 ? "" : "+") + (base + strProf);
    $('#str-save').text(save);

    // dexterity
    if ($('#dex-save-prof').prop("checked") == true) {
        var dexProf = prof;
    } else {
        var dexProf = 0;
    }
    var base = parseInt($('input[name="dex-mod"]').val()) || 0;
    var save = ((base + dexProf) < 0 ? "" : "+") + (base + dexProf);
    $('#dex-save').text(save);

    // constitution
    if ($('#con-save-prof').prop("checked") == true) {
        var conProf = prof;
    } else {
        var conProf = 0;
    }
    var base = parseInt($('input[name="con-mod"]').val()) || 0;
    var save = ((base + conProf) < 0 ? "" : "+") + (base + conProf);
    $('#con-save').text(save);

    // inteligence
    if ($('#int-save-prof').prop("checked") == true) {
        var intProf = prof;
    } else {
        var intProf = 0;
    }
    var base = parseInt($('input[name="int-mod"]').val()) || 0;
    var save = ((base + intProf) < 0 ? "" : "+") + (base + intProf);
    $('#int-save').text(save);

    // wisdom
    if ($('#wis-save-prof').prop("checked") == true) {
        var wisProf = prof;
    } else {
        var wisProf = 0;
    }
    var base = parseInt($('input[name="wis-mod"]').val()) || 0;
    var save = ((base + wisProf) < 0 ? "" : "+") + (base + wisProf);
    $('#wis-save').text(save);

    // charisma
    if ($('#cha-save-prof').prop("checked") == true) {
        var chaProf = prof;
    } else {
        var chaProf = 0;
    }
    var base = parseInt($('input[name="cha-mod"]').val()) || 0;
    var save = ((base + chaProf) < 0 ? "" : "+") + (base + chaProf);
    $('#cha-save').text(save);
}

function updateSpells() {
    var att = $('#saves-skills select[name="spell-att"]').val();

    if (att == 'none') {
        $('#top-bar input[name="spell-dc"]').val('Na');
        $('#spell-info input[name="dc"]').val('Na');
        return;
    }

    var base = parseInt($('#attributes input[name="' + att + '-mod"]').val()) || 0;
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;

    //Update DC
    var dc = 8 + base + prof;
    $('#top-bar input[name="spell-dc"]').val(dc);
    $('#spell-info input[name="dc"]').val(dc);

    //Update Spell Bonus
    var bonus = base + prof;
    $('#spell-info input[name="bonus"]').val("+" + bonus);

    //Update Spell Attribute
    $('#spell-info input[name="att"]').val(att);
}

function updateStrSkills() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="str-mod"]').val()) || 0;

    var ath_prof = $('#athletics-skill-prof').prop("checked");
    var ath_expr = $('#athletics-skill-expr').prop("checked");
    if (ath_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (ath_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#athletics-skill').text(skill);
}

function updateDexSkills() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="dex-mod"]').val()) || 0;
    // acrobatics
    var acro_prof = $('#acrobatics-skill-prof').prop("checked");
    var acro_expr = $('#acrobatics-skill-expr').prop("checked");
    if (acro_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (acro_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#acrobatics-skill').text(skill);

    // sleight of hand
    var soh_prof = $('#sleight-hand-skill-prof').prop("checked");
    var soh_expr = $('#sleight-hand-skill-expr').prop("checked");
    if (soh_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (soh_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#sleight-hand-skill').text(skill);

    // stealth
    var stealth_prof = $('#stealth-skill-prof').prop("checked")
    var stealth_expr = $('#stealth-skill-expr').prop("checked");
    if (stealth_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (stealth_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#stealth-skill').text(skill);

}

function updateIntSkills() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="int-mod"]').val()) || 0;

    // arcana
    var arc_prof = $('#arcana-skill-prof').prop("checked")
    var arc_expr = $('#arcana-skill-expr').prop("checked")
    if (arc_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (arc_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#arcana-skill').text(skill);

    // history
    var hist_prof = $('#history-skill-prof').prop("checked");
    var hist_expr = $('#history-skill-expr').prop("checked");
    if (hist_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (hist_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#history-skill').text(skill);

    // investigation 
    var inv_prof = $('#investigation-skill-prof').prop("checked");
    var inv_expr = $('#investigation-skill-expr').prop("checked");
    if (inv_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (inv_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#investigation-skill').text(skill);

    // religion
    var rel_prof = $('#religion-skill-prof').prop("checked");
    var rel_expr = $('#religion-skill-expr').prop("checked");
    if (rel_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (rel_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#religion-skill').text(skill);

    // nature
    var nat_prof = $('#nature-skill-prof').prop("checked");
    var nat_expr = $('#nature-skill-expr').prop("checked");
    if (nat_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (nat_expr == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#nature-skill').text(skill);

}

function updateWisSkills() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="wis-mod"]').val()) || 0;

    // animal handling
    var ani_prof = $('#animal-handling-skill-prof').prop("checked");
    var ani_expr = $('#animal-handling-skill-expr').prop("checked");
    if (ani_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (ani_expr == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#animal-handling-skill').text(skill);

    // insight
    var ins_prof = $('#insight-skill-prof').prop("checked");
    var ins_expr = $('#insight-skill-expr').prop("checked");
    if (ins_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if (ins_expr == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#insight-skill').text(skill);

    // medicine
    var med_prof = $('#medicine-skill-prof').prop("checked");
    var med_expr = $('#medicine-skill-expr').prop("checked");
    if (med_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (med_expr == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#medicine-skill').text(skill);

    // perception 
    var per_prof = $('#perception-skill-prof').prop("checked");
    var per_expr = $('#perception-skill-expr').prop("checked");
    if (per_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if (per_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#perception-skill').text(skill);

    // survival
    var sur_prof = $('#survival-skill-prof').prop("checked");
    var sur_expr = $('#survival-skill-expr').prop("checked");
    if (sur_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (sur_expr == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#survival-skill').text(skill);

}

function updateChaSkills() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="cha-mod"]').val()) || 0;

    // deception
    var dec_prof = $('#deception-skill-prof').prop("checked");
    var dec_expr = $('#deception-skill-expr').prop("checked");
    if (dec_prof == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if (dec_expr == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#deception-skill').text(skill);

    // intimidation
    if ($('#intimidation-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#intimidation-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#intimidation-skill').text(skill);

    // performance
    if ($('#performance-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#performance-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#performance-skill').text(skill);

    // persuasion
    if ($('#persuasion-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#persuasion-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#persuasion-skill').text(skill);

}


function updateStrMisc() {
    var base = parseInt($('#attributes input[name="str-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="str"]').val()) || 0;

    $('input[name="base-encumberance"]').val(score * 5);
    $('input[name="encumbered-encumberance"]').val(score * 10);
    $('input[name="h-encumbered-encumberance"]').val(score * 15);
    $('input[name="push-encumberance"]').val(score * 30);

}

function updateDexMisc() {
    var base = parseInt($('input[name="dex-mod"]').val()) || 0;
    var score = parseInt($('input[name="dex"]').val()) || 0;

}

function updateWisMisc() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="wis-mod"]').val()) || 0;
    var score = parseInt($('input[name="wis"]').val()) || 0;

    if ($('#perception-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#perception-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('input[name="passive-perception"]').val(10 + parseInt(skill));

    if ($('#insight-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#insight-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('input[name="passive-insight"]').val(10 + parseInt(skill));

}
function updateIntMisc() {
    var prof = parseInt($('input[name="proficiency"]').val()) || 0;
    var base = parseInt($('input[name="int-mod"]').val()) || 0;
    var score = parseInt($('input[name="int"]').val()) || 0;

    if ($('#investigation-skill-prof').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }
    if ($('#investigation-skill-expr').prop("checked") == true) {
        var skillProf = prof * 2;
    }
    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('input[name="passive-investigation"]').val(10 + parseInt(skill));
}

function calculateTotalWeight(argument) {
    var total = 0;
    $('#equipment input[name="weight"]').each(function(argument) {
        total += parseFloat($(this).val()) || 0;
    });

    $('#equipment input[name="total-weight"]').val(total.toFixed(2));
}

function calculateTotalCurrency(argument) {
    var total = 0;
    var base = $('#equipment #currancy select[name="base"]').val();

    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        switch ($(this).attr("name")) {
            case 'copper':
                var copper = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('copper', base);
                total += copper * modifier;
                break;
            case 'silver':
                var silver = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('silver', base);
                total += silver * modifier;
                break;
            case 'gold':
                var gold = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('gold', base);
                total += gold * modifier;
                break;
            case 'electrum':
                var electrum = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('electrum', base);
                total += electrum * modifier;
                break;
            case 'platinum':
                var platinum = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('platinum', base);
                total += platinum * modifier;
                break;
        }
    });

    total = total.toFixed(2);

    $('#equipment #currancy input[name="total"]').val(total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
}

function cacluateCurrencyMod(coin, base) {
    switch (coin) {
        case 'copper':
            switch (base) {
                case 'c':
                    return 1;
                    break;
                case 's':
                    return 1 / 10;
                    break;
                case 'g':
                    return 1 / 100;
                    break;
                case 'e':
                    return 1 / 50;
                    break;
                case 'p':
                    return 1 / 1000;
                    break;
            }
            break;
        case 'silver':
            switch (base) {
                case 'c':
                    return 10;
                    break;
                case 's':
                    return 1;
                    break;
                case 'g':
                    return 1 / 10;
                    break;
                case 'e':
                    return 1 / 5;
                    break;
                case 'p':
                    return 1 / 100;
                    break;
            }
            break;
        case 'gold':
            switch (base) {
                case 'c':
                    return 100
                    break;
                case 's':
                    return 10;
                    break;
                case 'g':
                    return 1;
                    break;
                case 'e':
                    return 2;
                    break;
                case 'p':
                    return 1 / 10;
                    break;
            }
            break;
        case 'electrum':
            switch (base) {
                case 'c':
                    return 50;
                    break;
                case 's':
                    return 5;
                    break;
                case 'g':
                    return 1 / 2;
                    break;
                case 'e':
                    return 1;
                    break;
                case 'p':
                    return 1 / 20;
                    break;
            }
            break;
        case 'platinum':
            switch (base) {
                case 'c':
                    return 1000;
                    break;
                case 's':
                    return 100;
                    break;
                case 'g':
                    return 10;
                    break;
                case 'e':
                    return 20;
                    break;
                case 'p':
                    return 1;
                    break;
            }
            break;
    }
}

function updateSpellSlots(total) {
    var totalSlots = parseInt(total.val()) || 0;
    var number = total.attr('name').substring(-1);
    var slots = total.parent().parent().find('div#slots');
    slots.empty();

    for (var i = totalSlots - 1; i >= 0; i--) {
        slots.append('<input type="checkbox" name="slot-' + number + '">')
    }
}

$('document').ready(function(argument) {
    //Run when strength changes
    $('input[name="str"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('str', $('input[name="str"]').val());
        updateStrSkills();
        updateStrMisc();
    });

    //Run when dexterity changes
    $('input[name="dex"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('dex', $('input[name="dex"]').val());
        updateDexSkills();
        updateDexMisc();
    });

    //Run when constitution changes
    $('input[name="con"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('con', $('input[name="con"]').val());
    });

    //Run when intelligence changes
    $('input[name="int"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('int', $('input[name="int"]').val());
        updateIntSkills();
        updateIntMisc();
    });

    //Run when wisdom changes
    $('input[name="wis"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('wis', $('input[name="wis"]').val());
        updateWisSkills();
        updateWisMisc();
    });

    //Run when charisma changes
    $('input[name="cha"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('cha', $('input[name="cha"]').val());
        updateChaSkills();
    });

    //Run misc att changes
    $('#attributes input').on('input', function(argument) {
        if (LOCKED)
            return;

        updateSaves();
        updateSpells();
    });

    //Run when proficiency changes
    $('input[name="proficiency"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateStrSkills();
        updateStrMisc();
        updateDexSkills();
        updateDexMisc();
        updateIntSkills();
        updateIntMisc();
        updateWisSkills();
        updateWisMisc();
        updateChaSkills();
        updateSaves();
        updateSpells();
    });

    //Run save prof changes
    $('#saves input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateSaves();
        });
    });

    //Run skill prof/exp changes
    $('input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateIntSkills();
            updateIntMisc();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
        });
    });

    $('input[name="expr"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateIntSkills();
            updateIntMisc();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
        });
    });

    //Run misc changes
    $('select[name="spell-att"]').change(function(argument) {
        if (LOCKED)
            return;

        updateSpells();
    });

    //Run weight changes
    $('#equipment input[name="weight"]').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalWeight();
        });
    });

    //Run currency changes
    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalCurrency();
        });
    });

    $('#equipment #currancy select[name="base"]').change(function(argument) {
        if (LOCKED)
            return;

        calculateTotalCurrency();
    });

    //Update Spell Slots
    $('#spells #total-slots input').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            updateSpellSlots($(this));
        });
    });

})