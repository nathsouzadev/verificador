function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let ano2 = document.getElementById('ano').value
    if (ano2 > ano) {
        alert('Insira dados válidos')
        } else {
            let sexo = document.getElementsByName('sexo')
            for (let i = 0; i < sexo.length; i++) {
                if (sexo[i].checked) {
                    let genero = sexo[i].id
                    let idade = ano - parseInt(ano2)
                    let img = document.createElement('img')
                    let ciclo = ''
                    if (0 <= idade && idade < 4){
                        ciclo = 'baby'
                    } else if (4 <= idade && idade < 14) {
                        ciclo = 'children'
                    } else if (15 <= idade && idade <= 30){
                        ciclo = 'young'
                    } else if (31 <= idade && idade <= 60){
                        ciclo = 'adult'
                    } else {
                        ciclo = 'aged'
                    } 
                    img.setAttribute('id', 'image')
                    img.setAttribute('src', `./images/${genero}_${ciclo}.jpg`)
                    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                    res.appendChild(img)
                }
            }
          }
        /* */
}
