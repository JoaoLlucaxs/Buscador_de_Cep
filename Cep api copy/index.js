//https://viacep.com.br/ws/${CEP}/json/


const input=document.querySelector('.buscSeach')
const btn=document.querySelector('.btn')
const fecharModal=document.querySelector('.fechar_modal')

btn.addEventListener('click',async(event)=>{
    event.preventDefault()
    const camp=input.value
    let url=`https://viacep.com.br/ws/${camp}/json/`
    let campo=await fetch(url)
    let json=await campo.json()
    console.log(json)

    if(json.erro === true){
        mensagem('Cep não encontrado')
    }else{
        mensagem('Carregando ....')
        campoCep({
            cep:json.cep,
            logra:json.logradouro,
            bairro:json.bairro,
            local:json.localidade,
            uf:json.uf,
            ddd:json.ddd

        })
    }
})

function campoCep(json){
    mensagem('')
    document.querySelector('.resultado').style.display='flex'
    document.querySelector('.resultado_api1').innerHTML=` ${json.logra}<br> (${json.ddd})`
    document.querySelector('.resultado_api2').innerHTML=`${json.bairro}`
    document.querySelector('.resultado_api3').innerHTML=`${json.local} <br> (UF-${json.uf})`
    document.querySelector('.resultado_api4').innerHTML=`${json.cep}`
}

function mensagem(msg){
    document.querySelector('.aviso').innerHTML=msg
}

fecharModal.addEventListener('click',(e)=>{
    document.querySelector('.resultado').style.display='none'
})
