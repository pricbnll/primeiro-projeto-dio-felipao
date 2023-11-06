# primeiro-projeto-dio-felipao
Meu primeiro projeto com prof. Felipão da DIO - Bootcamp Potência Tech iFood - Programação do Zero

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro  
Se XP for entre 1.001 e 2.000 = Bronze  
Se XP for entre 2.001 e 5.000 = Prata  
Se XP for entre 6.001 e 7.000 = Ouro  
Se XP for entre 7.001 e 8.000 = Platina  
Se XP for entre 8.001 e 9.000 = Ascendente  
Se XP for entre 9.001 e 10.000= Imortal  
Se XP for maior ou igual a 10.001 = Radiante  

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"


### Como fiz:

1. Alterei os valores doo nível prata para abranger de 50001 até 6000!
2. Fiz 2 códigos iguais em arquivos diferentes PARA:

-- HTML *"index.html"*: código que pedirá para colocar os datos nas caixas de **pop up** que aparecerá na tela rodando no Live Server pelo Chrome. Com o botão direito do                   mouse click em **"Abrir com Live Server"** se estiver instalado no VS Code

-- JavaScript *"index.js"*: código ira ser exibido pelo **terminal** colocando **"node index.js"**, que é o caminho da pasta que ele ta.

### O que aprendi:

- Ou usamos todas as varíaveis em portugues ou todas em inglês

- Swicth/case no JavaScript não suporta expressão condicional!!!!
- Não esquecer de colocar ":" no final do "case"

            Um exemplo de usar Switch seria:

            let nome = prompt("Digite seu nome, por favor!");
            let quantidadeExperiencia = prompt("Qual o seu nível de experiência?"); 
            let xp = "";

            switch (parseInt(quantidadeExperiencia)) {
                case 1000:
                    xp = "Ferro";
                    break;
                case 2000:
                    xp = "Bronze";
                    break;
                case 5000:
                    xp = "Prata";
                    break;
                case 9000:
                    xp  = "Ascendente";
                    break;
                default:
                    xp = "Nível não reconhecido";
                    break;
            }

            alert(`O herói de nome ${nome} está no nível de ${xp}`);

