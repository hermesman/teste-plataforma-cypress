const locators = {
   CREATE: {
        ENTRAR: 'Sign in',
        EMAIL: '[id=email_create]',
        BOTAO_ENTRAR: '*[class^="icon-user left"]',
        GENERO:'[id=id_gender1]',
        NOME_CLIENTE: '[id=customer_firstname]',
        SOBRENOME_CLIENTE: '[id=customer_lastname]',
        SENHA: 'input#passwd',
        NOME: '[id=firstname]',
        SOBRENOME: '[id=lastname]',
        EMPRESA: '[id=company]',
        ENDERECO: '[id=address1]',
        CIDADE: '[id=city]',
        ESTADO: 'select#id_state',
        CEP: '[id=postcode]',
        CELULAR: '[id=phone_mobile]',
        ENVIAR: 'button#submitAccount',
        MINHA_CONTA: 'My account'
    },

    LOGIN: {
        EMAIL: '[id=email]',
        SENHA: 'input#passwd',
        ENVIAR: 'button#SubmitLogin'
    },

    SEARCH: {
        PRODUTO: 'input#search_query_top',
        BUSCAR: 'button[name=submit_search]',
        PRODUTO_COMPLETO: 'Faded Short Sleeve T-shirts',
        PRECO: '$16.51'
    },

    ADD: {
        PRODUTO: 'input#search_query_top',
        BUSCAR: 'button[name=submit_search]',
        ADD_CARRINHO: 'Add to cart',
        IR_CHECKOUT: 'Proceed to checkout',
        CONTINUAR: ".cart_navigation a[href$='order&step=1']"
    },

    FINISH: {
        CONTINUAR: 'button[name=processAddress]',
        TERMOS: '[type=checkbox]#cgv',
        CONTINUAR_COMPRA: 'button[name=processCarrier]',
        TRANSFERENCIA: '.bankwire',
        BOTAO_ENVIAR: '.cart_navigation button[type=submit]',
        CONFIRMACAO: 'Your order on My Store is complete.'
    },

    ORDERS: {
        ORDER: 'Order',
        PEDIDO1: 'TNJUYGYSN',
        PEDIDO2: 'WDLLAAMZJ',
        PEDIDO3: 'VKGNEOYIK',
        PEDIDO4: 'MYGPPNVXX',
        DATA: '05/05/2021',
        PRECO: '$29.00',
        STATUS:'On backorder'
    }
}

export default locators;