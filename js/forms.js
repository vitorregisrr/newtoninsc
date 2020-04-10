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

    // Lista de cursos
    var cursos = [
        // Gerais
        {
            nome: 'Administração',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Análise e Desenvolvimento de Sistemas',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Arquitetura e Urbanismo',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Ciências Contábeis',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Direito',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Enfermagem',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia Civil',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia da Computação',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia de Controle e Automação',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia de Produção',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia Elétrica',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia Mecânica',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Engenharia Química',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Estética e Cosmética',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Farmácia',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Fisioterapia',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Medicina Veterinária',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Odontologia',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Psicologia',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Sistemas de Informação',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Presencial']
        },
        // Semi presenciais
        {
            nome: 'Administração (Semipresencial)',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Semi-Presencial']
        },
        {
            nome: 'Ciências Contábeis (Semipresencial)',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['Semi-Presencial']
        },
        // Presenciais apenas ENEM
        {
            nome: 'Ciências da Computação',
            ingressos: ['ENEM'],
            modalidades: ['Presencial']
        },
        {
            nome: 'Jogos Digitais',
            ingressos: ['ENEM'],
            modalidades: ['Presencial']
        },
        // Disciplinas isoladas EAD
        {
            nome: 'Administração - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Ciências Contábeis - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Pedagogia - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Gestão Financeira - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Logística - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Processos Gerenciais - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Gestão de Recursos Humanos - Disciplinas Isoladas',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },
        {
            nome: 'Pedagogia - Formação Pedagógica',
            ingressos: ['Disciplina Isolada'],
            modalidades: ['EAD']
        },

        // Cursos EAD
        {
            nome: 'Administração (EAD)',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Ciências Contábeis (EAD)',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Pedagogia',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Gestao Financeira',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Logística',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Processos Gerenciais',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Análise e Desenvolvimento de Sistemas',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },
        {
            nome: 'Gestão de Recursos Humanos',
            ingressos: ['ENEM', 'Obtenção de novo título', 'Retorno/destrancamento', 'Vestibular Agendado', 'Transferência'],
            modalidades: ['EAD']
        },

        // Cursos EAD apenas ENEM e Vestibular Agendado
        {
            nome: 'Tecnologia em Marketing',
            ingressos: ['ENEM',  'Vestibular Agendado'],
            modalidades: ['EAD']
        },
        {
            nome: 'Gestão Comercial',
            ingressos: ['ENEM',  'Vestibular Agendado'],
            modalidades: ['EAD']
        },
        {
            nome: 'Letras',
            ingressos: ['ENEM',  'Vestibular Agendado'],
            modalidades: ['EAD']
        },

        // Cursos secundários
        {
            nome: 'Pedagogia - Formação Pedagógica',
            ingressos: ['Obtenção de novo título',  'Retorno/destrancamento'],
            modalidades: ['EAD']
        },
        {
            nome: 'Pedogia - 2ª Licenciatura',
            ingressos: ['Disciplina Isolada', 'Obtenção de novo título', 'Retorno/destrancamento', 'Transferência'],
            modalidades: ['EAD']
        },
    ]

    // Dinamic Selects
    $('#tipo_de_ingresso').change((e) => {
        $('#Modalidade__c').removeAttr('disabled');
        updateCursos();

        // Seta as modalidades disponíveis para o tipo de ingresso
        const onlyEad = ['Disciplina Isolada', 'Vestibular Agendado'];
        const allModalidades = ['Transferência', 'Enem', 'Obtenção de novo título', 'Retorno/destrancamento'];

        if(allModalidades.includes(e.target.value)){
            $('#Modalidade__c').html(`<option value="" selected disabled>Selecione a modalidade:</option><option value="Presencial">Presencial</option><option value="Semi-Presencial">Semi-Presencial</option><option value="EAD">EAD</option>`)
        
        }else if(onlyEad.includes(e.target.value)){
            $('#Modalidade__c').html(`<option value="" selected disabled>Selecione a modalidade:</option><option value="EAD">EAD</option>`)
        }
    });

    $('#Modalidade__c').change( (e) => {
        updateCursos();
        $('#Curso_de_interesse__c').removeAttr('disabled');
    });

    function updateCursos (){
        // Pega os valores atuais do FORM
        var currentIngresso = $('#tipo_de_ingresso').val();
        var currentModalidade =  $('#Modalidade__c').val();

        if(currentModalidade){
            // Filtra os que dão MATCH
            var cursosElegiveis = cursos.filter(item => {
                return item.modalidades.includes(currentModalidade) && item.ingressos.includes(currentIngresso)
            });

            // Adiciona no HTML
            var html = '<option value="" selected disabled>Selecione a modalidade:</option>';
            if(cursosElegiveis.length > 0){
                cursosElegiveis.forEach( item => {
                    html += `<option value="${item.nome}"> ${item.nome} </option>`
                });
            }else{
                html += '<option value="" selected disabled>Sem opções para esta combinação</option>';
            }
        }
        $('#Curso_de_interesse__c').html(html);
    }
})();