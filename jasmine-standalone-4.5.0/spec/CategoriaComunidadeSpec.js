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
});
