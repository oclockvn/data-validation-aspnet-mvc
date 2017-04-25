
var app = (function() {
    /**
     * build a validator for input
     * @param {name} is input name
     * @param {required} is determine that input is required or not
     * @param {max} check the maximum length for input
     * @param {lenmsg} 
     * @param {min} required the minimum length for input
     * @param {group} for custom group selector (default is `.form-group`)
     */
    function validatorBuilder(name, required, max, min, group, regex) {
        var validators = {};

        if (required) {
            if (typeof required === 'object' && required.msg) {
                validators.notEmpty = {
                    message: required.msg
                };
            } else {
                validators.notEmpty = {
                    message: name + " không được để trống"
                };
            }
        }

        if (max) {
            if (typeof max === 'object' && max.msg) {
                validators.stringLength = {
                    max: Number(max.val),
                    message: max.msg
                };
            } else {
                validators.stringLength.max = Number(max);
            }

            if (min) {
                validators.stringLength.min = Number(min);
            }
        }

        if (regex) {
            validators.regexp = regex;
        }

        group = group || '.form-group';
        return {
            group: group,
            validators: validators
        };
    }

    /**
     * create validator for form
     * @param {formId} is id of form
     */
    function formValidationBuilder(formSelector) {
        formSelector = formSelector || 'form';
        var fields = $(formSelector).find('[data-val="true"]').not('[type=hidden]');

        if (fields.length === 0) {
            return null;
        }

        var validators = {};
        $(fields)
            .each(function (idx, field) {
                var $field = $(field);
                var require = $field.attr('data-val-required');
                var max = $field.attr('data-val-length-max');
                var min = $field.attr('data-val-length-min');
                var lenmsg = $field.attr('data-val-length');
                var regex = $field.attr('data-val-regex');
                var regex_pattern = $field.attr('data-val-regex-pattern');
                var groupClass = $field.closest('div').attr('class') || '';
                var group = groupClass.indexOf('form-group') === -1 ? '.form-group' : null;
                var name = field.name;

                validators[name] = new validatorBuilder(
                    name,
                    require ? { msg: require } : null,
                    max ? { val: max, msg: lenmsg } : null,
                    min,
                    group,
                    regex_pattern ? { regexp: regex_pattern, message: regex } : null);
            });

        var option = {
            icons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: validators
        };

        return $(formSelector).bootstrapValidator(option);
    }

    return {
        formValidationBuilder: formValidationBuilder
    };
})();