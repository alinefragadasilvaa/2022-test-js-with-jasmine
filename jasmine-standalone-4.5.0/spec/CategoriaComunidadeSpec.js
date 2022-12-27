describe("Criar uma categoria de comunidade", function(){
    describe("Verificar campos em branco", function(){
        it("deve avisar que há campo em branco", function(){
            let resultado = new CategoriaComunidade ("", "", "");
             expect(resultado.criar()).toEqual("Campos obrigatórios em branco!")
        })
        it("deve avisar que há campo em branco", function(){
            let resultado = new CategoriaComunidade ("", "", "brunoneves");
             expect(resultado.criar()).toEqual("Campos obrigatórios em branco!")
        })
        it("deve avisar que há campo em branco", function(){
            let resultado = new CategoriaComunidade ("Papo", "", "");
             expect(resultado.criar()).toEqual("Campos obrigatórios em branco!")
        })
    })
    describe("Verificar apelido", function(){
        it("deve avisar que o apelido é inválido", function(){
            let resultado = new CategoriaComunidade ("Papo", "Faça o seu marketing", "mariazinha");
             expect(resultado.criar()).toEqual(", , Apelido inválido")
        })
    })
    describe("Criar categoria", function(){
        it("deve avisar que a categoria foi criada", function(){
            let resultado = new CategoriaComunidade ("Papo", "Aprenda a controlar as finanças da sua empresa e reservar fundos para investimentos", "brunoneves");
             expect(resultado.criar()).toEqual("Categoria criada com sucesso!")
        })
        it("deve avisar que a categoria foi criada", function(){
            let resultado = new CategoriaComunidade ("Papo", "Faça o seu marketing", "brunoneves");
             expect(resultado.criar()).toEqual("Categoria criada com sucesso!")
        })
        it("deve avisar que a categoria foi criada", function(){
            let resultado = new CategoriaComunidade ("Alug@", "", "brunoneves");
             expect(resultado.criar()).toEqual("Categoria criada com sucesso!")
        })
        it("deve avisar que a categoria foi criada", function(){
            let resultado = new CategoriaComunidade ("Controle Financeiro e Investimentos", "", "brunoneves");
             expect(resultado.criar()).toEqual("Categoria criada com sucesso!")
        })
        it("deve avisar que a categoria foi criada", function(){
            let resultado = new CategoriaComunidade ("Papo", "", "brunoneves");
             expect(resultado.criar()).toEqual("Categoria criada com sucesso!")
        })
    })
    describe("Verificar nome inválido", function(){
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("P", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("Oi", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("Tri", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("Aprenda a abrir uma empresa barata e lucrativa em 6 meses", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("Marketing 1", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("12", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
        it("deve avisar que o nome é inválido", function(){
            let resultado = new CategoriaComunidade ("@", "", "brunoneves");
            expect(resultado.criar()).toEqual("Nome inválido, , ")
        })
    });
    describe("Verificar descrição inválida", function(){
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "p", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "Gestão dos negócios", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "Aprenda a controlar as finanças da sua empresa e reservar fundos para investimentos, assim como eu fiz, e veja sua vida melhorar de forma significativa! Aqui você encontra relatos, dicas, tutoriais, que irão mudar o dia a dia da sua empresa. Aumente sua produtividade!", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "12", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "@", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
        it("deve avisar que a descrição é inválida", function(){
            let resultado = new CategoriaComunidade ("Papo", "1@", "brunoneves");
            expect(resultado.criar()).toEqual(", Descrição inválida, ")
        })
    })
});
