# Projeto Nova-Web - Especificacoes de UI UX

## 1. Conceitos de Usabilidade em Formularios

### Labels vs Placeholders

Os campos de formulario devem possuir labels visiveis para identificar claramente a informacao que deve ser preenchida.

O placeholder nao deve substituir a label, pois desaparece quando o usuario comeca a digitar e pode dificultar a identificacao do campo. Ele pode ser utilizado como uma orientacao ou exemplo complementar.

Exemplo:

```text
E-mail
[ exemplo@email.com             ]
```

Nesse caso, "E-mail" e a label e "[exemplo@email.com](mailto:exemplo@email.com)" e o placeholder.

### Hierarquia Visual

Os elementos da interface devem possuir diferentes niveis de destaque de acordo com sua importancia.

* Primary Button: representa a acao principal da tela, como "Entrar", e deve possuir maior destaque visual.
* Secondary Actions: representam acoes complementares, como "Criar conta" e "Esqueci minha senha", possuindo menor destaque visual.

Essa hierarquia ajuda o usuario a identificar rapidamente a acao mais importante.

---

## 2. Estados de Validacao dos Campos de Entrada

Os campos de entrada devem apresentar diferentes estados visuais para informar ao usuario sua situacao atual.

### Default - Padrao

E o estado inicial do campo.

Diretrizes:

* Borda neutra.
* Label claramente visivel.
* Texto com contraste adequado.
* Campo facilmente identificavel.

### Focus - Foco

Ocorre quando o usuario seleciona o campo ou navega ate ele utilizando o teclado.

Diretrizes:

* Alteracao visual da borda.
* Utilizacao de outline ou anel de foco.
* Indicador de foco claramente visivel.
* Contraste suficiente entre o campo e o fundo.

O indicador de foco permite que usuarios que navegam pelo teclado saibam qual elemento esta selecionado.

### Error - Erro

Indica que o preenchimento apresenta algum problema.

Diretrizes:

* Borda em vermelho ou outro indicador visual.
* Mensagem explicativa abaixo do campo.
* Informacao clara sobre o problema.
* Orientacao sobre como corrigir o erro.
* O erro nao deve ser indicado somente atraves da cor.

Exemplo:

```text
E-mail
[ email-invalido             ]
E-mail invalido. Digite um endereco valido.
```

### Success - Sucesso

Indica que o campo foi preenchido corretamente.

Diretrizes:

* Indicador visual de preenchimento correto.
* Possibilidade de utilizar uma mensagem de confirmacao.
* Mensagem ou indicacao clara de sucesso.
* A informacao nao deve depender exclusivamente da cor.

Exemplo:

```text
E-mail
[ usuario@email.com          ]
Preenchimento correto.
```

### Disabled - Desabilitado

Indica que o campo esta temporariamente indisponivel para interacao.

Diretrizes:

* Aparencia visual diferente dos campos ativos.
* Contraste reduzido pode ser utilizado para demonstrar indisponibilidade.
* O estado deve ser facilmente diferenciado de um campo ativo.

---

## 3. Padroes de Acessibilidade

### Contraste de Cores

O projeto deve seguir as recomendacoes da WCAG 2.2 para garantir boa legibilidade.

* Texto normal: contraste minimo de 4,5:1.
* Texto grande: contraste minimo de 3:1.
* Elementos importantes nao devem depender apenas da cor para transmitir informacoes.

O contraste adequado melhora a leitura para usuarios com diferentes niveis de visao.

### Navegacao por Teclado

O sistema deve permitir a navegacao atraves do teclado, especialmente utilizando a tecla Tab.

A ordem de navegacao deve ser logica, por exemplo:

```text
E-mail -> Senha -> Entrar -> Esqueci minha senha -> Criar conta
```

O elemento atualmente selecionado deve possuir um indicador visual de foco.

### Leitores de Tela

Os campos e controles devem possuir nomes e labels claros para que leitores de tela consigam identificar corretamente sua funcao.

As mensagens de erro tambem devem estar associadas aos respectivos campos para que o usuario consiga compreender o problema e corrigi-lo.

---

## 4. Aplicacao no Projeto Nova-Web

As diretrizes serao aplicadas a tela de Login da Nova-Web da seguinte forma:

| Elemento            | Aplicacao                              |
| ------------------- | -------------------------------------- |
| Labels              | Identificacao permanente dos campos    |
| Placeholders        | Exemplos ou orientacoes complementares |
| Botao Entrar        | Primary Button                         |
| Criar conta         | Acao secundaria                        |
| Esqueci minha senha | Acao secundaria                        |
| Estado Default      | Borda neutra                           |
| Estado Focus        | Borda ou outline destacado             |
| Estado Error        | Indicador vermelho e mensagem          |
| Estado Success      | Indicador de preenchimento correto     |
| Estado Disabled     | Contraste reduzido                     |
| Contraste           | Minimo de 4,5:1 para texto normal      |
| Teclado             | Navegacao atraves da tecla Tab         |
| Leitor de tela      | Labels e mensagens identificaveis      |

---

## Referencias

* W3C WAI - Labeling Controls
  https://www.w3.org/WAI/tutorials/forms/labels/

* W3C WAI - Form Instructions
  https://www.w3.org/WAI/tutorials/forms/instructions/

* W3C WAI - Form Notifications
  https://www.w3.org/WAI/tutorials/forms/notifications/

* WCAG 2.2 - Contrast Minimum
  https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum

* WCAG 2.2 - Focus Visible
  https://www.w3.org/WAI/WCAG22/Understanding/focus-visible
