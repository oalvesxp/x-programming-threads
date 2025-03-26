/**
 * Fundamentos de javascript
 *
 * @author Osvaldo A.
 * @date 22/03/2025
 * @description Diferenças entre variáveis em javascript
 */

/** Variável mutável:
 * Valor pode ser alterado
 * Não tem a obrigatoriedade de atribuir valor na declaração
 */
let mutable = "This value can be changed"
let anotherValue = 10
mutable = anotherValue

/** Variável imutável:
 * Valor não pode ser alterado, somente lido
 * Deve ter um valor atribuído ao ser declarada
 */
const imutable = 2

/** Variável mutável global:
 * Valor pode ser alterado
 * Contexto da variável escapa para o contexto do arquivo, o valor pode ser acessada em qualquer sessão do documento
 * Deve ter um valor atribuído ao ser declarada
 */
const t = true

if (t){
    var global = 10
}

global = 100