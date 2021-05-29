function seeMore(el, showTxt, hideTxt, maxChar, limitChar, classShow, classHide, typebtn) {

    let query = this.el = el; // * DEFINE O SELETOR DO CONTAINER (somente class)
    let show_txt = this.show = showTxt; // * DEFINE O TEXTO NO BOTÃO DE VER MAIS 
    let hide_txt = this.hide = hideTxt; // * DEFINE O TEXTO NO BOTÃO DE VER MENOS  
    let class_btn__show = this.numberCharCheck = classShow; // * DEFINE CLASSES NO BOTÂO VER MAIS
    let class_btn__hide = this.maxCharShow = classHide; // * DEFINE CLASSES DOS BOTÕES NO BOTÂO VER MENOS
    let max_char__show = this.maxCharShow = limitChar; // * DEFINE A QUANTIDADE MÁXIMA DE CARACTERES A SEREM MOSTRADOS
    let txts = document.querySelector(`${query}`); // * COLETA O SELETOR 
    let txt = txts.innerText; // *PEGA O INNERTEXT DO ELEMENTO
    let type = this.type = typebtn; // * DEFINE O TIPO 

    // * DEFINE A QUANTIDADE LIMITE DE CARACTERES 
    // * SE ULTRAPASSAR A QUANTIDADE INSERE OS BOTÕES DE VER MAIS 
    let max_char__check = this.numberCharCheck = maxChar;


    if (txt.length > max_char__check) {
        let textC = txts.textContent;
        let lenght = max_char__show;
        let txtFormated = textC.substr(0, lenght);
        let txtSpan = textC.substr(lenght, txts.lenght);

        if (type === 'inline') {
            txts.innerHTML = `<span>${txtFormated}</span> 
            <span class="see_more-content active ${type}">
                <span class="btn-show ${class_btn__show.replace(/[.]/g ,'')}">${show_txt}</span>
                <span class="minus-text">${txtSpan}
                    <span class="btn-hide ${class_btn__hide.replace(/[.]/g ,'')}">${hide_txt}</span>
                </span>
            </span>
        `;
        } else if (type === 'float') {
            txts.className += ' see_more__float active'
            txts.innerHTML = `<span>${txtFormated}</span> 
                <span class="see_more-content">
                    <span class="minus-text">${txtSpan}</span>               
                </span>
                <span class="container_btn fade">
                    <button type="button" class="btn_float show ${class_btn__show.replace(/[.]/g ,'')}">${show_txt}</button>
                    <button type="button" class="btn_float hide ${class_btn__hide.replace(/[.]/g ,'')}">${hide_txt}</button>
                </span>
            `;

        } else {
            txts.innerHTML = `${txtFormated} 
            <span class="see_more-content active">
                <span class="btn-show ${class_btn__show.replace(/[.]/g ,'')}">${show_txt}</span>
                <span class="minus-text">${txtSpan}
                    <span class="btn-hide ${class_btn__hide.replace(/[.]/g ,'')}">${hide_txt}</span>
                </span>
            </span>
        `;
        }

    }


    if (type === 'float') {
        let see_More__btn = document.querySelector(`${class_btn__show}`);
        let see_Less__btn = document.querySelector(`${class_btn__hide}`);
        see_More__btn.addEventListener('click', function() {
            this.parentElement.parentElement.classList.remove('active')
            console.log(this.parentElement.parentElement);
        });
        see_Less__btn.addEventListener('click', function() {
            this.parentElement.parentElement.classList.add('active')
            console.log(this.parentElement.parentElement);
        });
    } else {
        let see_More__btn = document.querySelector(`${class_btn__show}`);
        let see_Less__btn = document.querySelector(`${class_btn__hide}`);
        see_More__btn.addEventListener('click', function() {
            this.parentElement.classList.remove('active')
        });
        see_Less__btn.addEventListener('click', function() {
            see_More__btn.parentElement.classList.add('active')
        });
    }

}



var teste = new seeMore('.query', 'Ver Mais', 'Ver menos', 10, 56, '.btn-show', '.btn-hide', 'inline')

var teste2 = new seeMore('.query2', 'Ler Mais', 'Ler menos', 10, 60, '.btn-show2', '.btn-hide2', 'teste')

var teste3 = new seeMore('.query3', 'Saber Mais', 'Saber menos', 10, 250, '.btn-show3', '.btn-hide3', 'float')