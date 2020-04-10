(function () {
    // Custom file input
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call( inputs, function( input ){
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e ){
                var fileName = '';
                if( this.files && this.files.length > 1 ){
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                }else{
                   fileName = e.target.value.split("\\").pop();
                }

                if(fileName){
                    label.querySelector('span').innerHTML = fileName;
                }
                else{
                    label.innerHTML = labelVal;
                }
            });
        });

    // Masks
    $('.mask-phone').mask('00 000000000');
    $('.mask-cpf').mask('00000000000');

    // Custom CPF validate method
    $.validator.addMethod("cpf", function (value, element) {
        value = jQuery.trim(value);
        value = value.replace('.', '');
        value = value.replace('.', '');
        var cpf = value;
        cpf = value.replace('-', '');
        while (cpf.length < 11) cpf = "0" + cpf;
        var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
        var a = [];
        var b = new Number;
        var c = 11;
    
        var a, b, c, x, y, i;
        for (i = 0; i < 11; i++) {
            a[i] = cpf.charAt(i);
            if (i < 9) b += (a[i] * --c);
        }
        if ((x = b % 11) < 2) {
            a[9] = 0
        } else {
            a[9] = 11 - x
        }
        b = 0;
        c = 11;
        for (y = 0; y < 10; y++) b += (a[y] * c--);
        if ((x = b % 11) < 2) {
            a[10] = 0;
        } else {
            a[10] = 11 - x;
        }
    
        var retorno = true;
        if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;
    
        return this.optional(element) || retorno;
    
    }, "Informe um CPF válido");
    
    // Form validation
    var form = $('#form_inscription_vest');
    form.validate({
        ignore: "",
         errorPlacement: function(error, element) {
            if(element.parent().hasClass('mask')){
                error.insertAfter(element.parent())
            }else{
                error.insertBefore(element)
            }
        },
        rules: {
            tipo_de_ingresso: {
                required: true
            },
    
            email: {
                required: true,
                email: true
            },
    
            Modalidade__c: {
                required: true,
            },
    
            Curso_de_interesse__c: {
                required: true,
            },
    
            last_name: {
                required: true,
            },
    
            CPF__c: {
                required: true,
                cpf: true
            },
    
            mobile: {
                required: true,
                minlength: 12
            },

            formImage: {
                required: true
            },

            formTermo1: {
                required: true
            },

            formTermo2: {
                required: true
            }
        },
    
        messages: {
            tipo_de_ingresso: {
                required: "Por favor, Selecione seu ingresso de interesse."
            },
            
            email: {
                required: 'Por favor, insira um e-mail válido.',
                email: 'Por favor, insira um e-mail válido.'
            },
    
            Modalidade__c: {
                required: 'Por favor, selecione uma modalidade.',
            },
    
            Curso_de_interesse__c: {
                required: 'Por favor, selecione um curso.',
            },
    
            last_name: {
                required: 'Por favor, digite seu nome.',
            },
    
            CPF__c: {
                required: 'Por favor, digite seu CPF.',
                cpf: 'Por favor, digite um CPF válido.'
            },
    
            mobile: {
                required: 'Por favor, digite seu celular.',
                minlength: 'Seu celular deve ter no minímo 11 números.'
            },

            formImage: {
                required: "Por favor, insira sua foto."
            },

            formTermo1: {
                required: "Você precisa aceitar este termo para prosseguir."
            },

            formTermo2: {
                required: "Você precisa aceitar este termo para prosseguir."
            }
        }
    });

    // Dinamic campanha

    // Dinamic Selects
})();