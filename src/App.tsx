import './App.css';
import Q12DiscoverLetter from './components/Q12DiscoverLetter';
import Q1String from './components/Q1String';
import Q2Uppercase from './components/Q2Uppercase';
import Q3Lowercase from './components/Q3Lowercase';
import Q4StringLength from './components/Q4StringLength';
import Q5FirstChar from './components/Q5FirstChar';
import Q6LastChar from './components/Q6LastChar';

const App: React.FC = () => {
    return (
        <div className="container p-5">
            <h1 className="fw-bold mb-3">React Components</h1>

            <h2 className="fs-6">
                1. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a mesma prop sem alteração.
            </h2>
            <div className="card p-3 mb-4">
                <Q1String value="Teste" />
            </div>

            <h2 className="fs-6">
                2. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna em letras maiúsculas.
            </h2>
            <div className="card p-3 mb-4">
                <Q2Uppercase value="Teste" />
            </div>

            <h2 className="fs-6">
                3. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna em letras minúsculas.
            </h2>
            <div className="card p-3 mb-4">
                <Q3Lowercase value="TESTE" />
            </div>

            <h2 className="fs-6">
                4. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna um número dizendo a quantidade de
                caracteres contidas nessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q4StringLength value="TESTE" />
            </div>

            <h2 className="fs-6">
                5. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a primeira letra dessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q5FirstChar value="TESTE" />
            </div>

            <h2 className="fs-6">
                6. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a última letra dessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q6LastChar value="TESTE" />
            </div>

            <h2 className="fs-6">
                7. Crie um componente que recebe duas props do tipo string e
                retorna uma frase contendo ambas.
                <br />
                Exemplo:
                <br />
                Prop 1: Oi
                <br />
                Prop 2: tudo bem?
                <br />
                Retorno: Oi tudo bem?
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                8. Crie um componente que recebe duas props, uma string e um
                número, e repita essa string pela quantidade do número.
                <br />
                Exemplo:
                <br /> Prop 1: Oi
                <br /> Prop 2: 5.
                <br /> Retorno: OiOiOiOiOi
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                9. Crie um componente que recebe duas props, uma string e um
                número, e repita essa string pela quantidade do número,
                separadas por vírgula e espaço.
                <br />
                Exemplo:
                <br /> Prop 1: Oi
                <br /> Prop 2: 5.
                <br /> Retorno: Oi, Oi, Oi, Oi, Oi
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                10. Crie um componente que recebe duas strings e retorna a que
                tiver mais caracteres.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                11. Crie um componente que recebe duas strings e retorna
                &quot;Sim&quot; se a segunda estiver contida na primeira. Caso
                contrário, retorna &quot;Não&quot;.
                <br />
                Exemplo:
                <br /> Prop 1: Simplesmente
                <br /> Prop 2: mente
                <br /> Retorno: Sim
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                12. Crie um componente que recebe uma string e um número.
                Retorna a letra que estiver na posição do número. Se o número
                informado for maior do que a quantidade de caracteres da string,
                retorna &quot;Inválido&quot;
                <br />
                Exemplo:
                <br /> Prop 1: Abacaxi
                <br /> Prop 2: 3
                <br /> Retorno: c
            </h2>
            <div className="card p-3 mb-4">
                <Q12DiscoverLetter
                    value="Inconstitucionalissimamente"
                    position={-1}
                />
                <Q12DiscoverLetter
                    value="Inconstitucionalissimamente"
                    position={2}
                />
                <Q12DiscoverLetter
                    value="Inconstitucionalissimamente"
                    position={27}
                />
                <Q12DiscoverLetter
                    value="Inconstitucionalissimamente"
                    position={0}
                />
            </div>

            <h2 className="fs-6">
                13. Crie um componente que recebe 3 strings. Retorna a primeira
                string, substituindo todas as ocorrências da segunda, pela
                terceira.
                <br />
                Exemplo:
                <br /> Prop 1: Banana
                <br /> Prop 2: a
                <br /> Prop 3: X
                <br /> Retorno: BXnXnX
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                14. Crie um componente que recebe uma string e retorna apenas a
                primeira letra maiúscula, todas as outras minúsculas.
                <br />
                Exemplo:
                <br /> Prop 1: MaS QuE LoUcUrA.
                <br /> Retorno: Mas que loucura.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                15. Crie um componente que recebe uma string e retorna a
                primeira letra de cada palavra maiúscula, todas as outras
                minúsculas.
                <br />
                Exemplo:
                <br /> Prop 1: MaS QuE LoUcUrA.
                <br /> Retorno: Mas Que Loucura.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                16. Crie um componente que recebe dois números e retorna o valor
                da soma entre eles.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                17. Crie um componente que recebe dois números e retorna o valor
                da subtração entre eles.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                18. Crie um componente que recebe dois números e retorna o valor
                da multiplicação entre eles.
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                19. Crie um componente que recebe dois números e retorna o valor
                da divisão entre eles. Se o divisor for zero, retorna
                &quot;Inválido&quot;
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                20. Crie um componente que recebe um número e retorna o mesmo
                elevado a 2
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                21. Crie um componente que recebe dois números e retorna o
                primeiro elevado pelo segundo
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                22. Crie um componente que recebe dois números e retorna o maior
                entre eles
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                23. Crie um componente que retorna um número inteiro aleatório
                entre 0 e 10
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                24. Crie um componente que recebe dois números, X e Y, e retorna
                um número inteiro aleatório entre X e Y. Caso X seja maior ou
                igual a Y, retorna &quot;Inválido&quot;
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                25. Crie um componente que recebe um número e retorna
                &quot;Sim&quot; se ele for primo. Caso contrário, retorna
                &quot;Não&quot;
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                26. Crie um componente que recebe um número X e retorna os
                primeiros X números primos
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                27. Crie um componente que recebe um número X e retorna o seu
                fatorial
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                28. Crie um componente que recebe um número X e retorna se ele é
                &quot;Par&quot; ou &quot;Ímpar&quot;
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                29. Crie um componente que recebe dois números, X e Y, retorna
                qual é a porcentagem de X em relação a Y
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                30. Crie um componente que recebe um número de 0 a 9 e retorna o
                número de quantas vezes esse número aparece em uma contagem de
                de 0 a 100
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                31. Crie um componente que recebe uma pontuação de 0 a 5 e
                retorna de 0 a 5 estrelas amarelas e o restante cinzas (utilize
                um pacote de ícones)
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                32. Crie um componente que recebe (x, width, height, color) e
                retorna X retângulos de largura e altura definidos por{' '}
                <b>width</b> e <b>height</b> respectivamente, e com cor de fundo
                definido por <b>color</b>, alinhados lado a lado
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                33. Crie um componente que recebe (x, size, color) e retorna X
                círculos de diâmetro definido por <b>size</b> e com cor de fundo
                definido por <b>color</b>, alinhados lado a lado
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                34. Crie um componente que recebe um array de objetos (label,
                url) e retorna uma lista de links externos que apontem para{' '}
                <b>url</b> e que sejam descritos por <b>label</b>
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                35. Crie um componente que recebe um array de urls de imagens,
                uma segunda prop <b>size</b> e retorna essas imagens em formato
                quadrado do tamanho de <b>size</b>, lado a lado
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                36. Crie um componente que recebe (label, color) e retorne um
                botão com o texto de <b>label</b> e a cor de fundo de{' '}
                <b>color</b>
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                37. Crie um componente que tem um input de texto, um botão e uma
                div vazia. Ao clicar no botão, a div deve receber o texto que
                estiver escrito no input
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                38. Crie um componente que tem 2 inputs de número, um terceiro
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o terceiro input deve receber o resultado da soma dos
                dois primeiros
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                39. Crie um componente que tem um input de texto, um segundo
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o segundo input deve receber o valor do primeiro,
                convertido para letras maiúsculas
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                40. Crie um componente que tem um input de texto, um segundo
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o segundo input deve receber o valor do primeiro,
                convertido para letras maiúsculas
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                41. Crie um componente que tem um mapa do Google Maps, 2 inputs
                de texto e um botão. O usuário deve ser capaz de inserir
                coordenadas LAT e LNG nos inputs e, ao clicar no botão, o mapa
                deve exibir um &quot;Pin&quot; e ser recentralizado nessas
                coordenadas
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                42. Crie um componente que tem um input de texto e um botão
                &quot;Enviar&quot;. A cada vez que o usuário clica no botão, o
                texto do input deve ser adicionado uma linha abaixo do texto
                adicionado anteriormente
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                43. Crie um componente que tem um <b>span</b> com o número zero
                e um botão. A cada vez que o botão for apertado, o número
                contido no <b>span</b> deve receber +1
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                44. Crie um componente que tem um <b>span</b> vazio, um input de
                texto e 5 botões. Tudo o que for escrito no input deve ser
                imediatamente também escrito no span. Cada botão representa uma
                cor: Vermelho, Verde, Azul, Amarelo e Preto. Ao clicar em
                qualquer botão, deve-se alterar a cor do texto que está dentro
                do span
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                45. Crie um componente que tem um <b>span</b> vazio, um input de
                texto e 5 botões. Tudo o que for escrito no input deve ser
                imediatamente também escrito no span. Cada botão representa uma
                cor: Vermelho, Verde, Azul, Amarelo e Preto. Ao clicar em
                qualquer botão, deve-se alterar a cor do texto que está dentro
                do span
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                46. Crie um componente que tem um input de CEP, um span vazio e
                um botão, ao clicar no botão o componente deve fazer uma
                pesquisa na API de CEP (https://viacep.com.br/ws/XXXXXXXX/json/,
                substituir os X pelo CEP, sem hífen) e escrever o endereço
                encontrado dentro do span (logradouro, bairro, cidade, estado).
                Obs: Deve ser exibido um ícone de loading enquanto a API estiver
                buscando o CEP
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                47. Crie um componente que tem um input de número (dólares), um
                span vazio e um botão, ao clicar no botão o componente deve
                fazer uma pesquisa na API de Cotação de moedas
                (https://economia.awesomeapi.com.br/json/last/USD-BRL) e
                retornar dentro do <b>span</b> o valor que o usuário inseriu no
                input convertido para reais. Deve exibir um loading enquanto
                busca
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                48. Crie um componente que tem um span vazio e um botão, ao
                clicar no botão o componente deve fazer uma pesquisa na API de
                Conselhos (https://api.adviceslip.com/advice) e retornar dentro
                do <b>span</b> um conselho. Exibir um loading enquanto procura
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                49. Crie um componente que tem um campo do tipo select com 5
                opções de Pokemons e um botão, ao clicar no botão o componente
                deve fazer uma pesquisa na API de Pokemons
                (https://pokeapi.co/api/v2/pokemon/XXXXXX, substituir os X pelo
                nome do pokemon) e retornar a foto do pokemon escolhido no{' '}
                <b>select</b>. Exibir um loading enquanto procura
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                50. Crie um componente que tem um um botão, ao clicar no botão o
                componente deve fazer uma pesquisa na API de fotos de cafés
                (https://coffee.alexflipnote.dev/random.json) e retornar a foto
                do café
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>
        </div>
    );
};

export default App;
