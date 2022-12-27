describe("Criar uma categoria de comunidade", function(){
    describe("Verificar campo nome em branco", function(){
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
    
});