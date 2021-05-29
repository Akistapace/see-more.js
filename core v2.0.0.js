function see(...args) {
    // Object.prototype
    var object = []
    for (const x in args) {
        object.push(args[x])
    }

    var selector = document.querySelectorAll(`${object[0].el}`)


    for (var i = 0; i < selector.length; i++) {
        if (selector[i].innerHTML.length > object[0].maxCharVerify) {
            let selectorContent = selector[i].textContent;
            let txtShowed = selectorContent.substr(0, object[0].maxCharShow);
            let txtHidden = selectorContent.substr(object[0].maxCharShow, selector[i].innerHTML.lenght);

            // COMṔONENTES TEMPLATES 
            let templateShowText = `<span>${txtShowed}</span>`
            let templatehideText = `<span class="minus-text">${txtHidden}</span>`
            let templateBtnShow = `<button type="button" class="btn-show ${object[0].type || ''} show ${object[0].classBntShow.replace(/[.]/g ,'')}">${object[0].showTxt ||'See more'}</button>`
            let templateBtnHide = `<button type="button" class="btn-hide ${object[0].type || ''} hide ${object[0].classBntHide.replace(/[.]/g ,'')}">${object[0].hideTxt ||'See less'}</button>`
            let templateBtnShowDefault = `<span class="${object[0].type || ''} default-show ${object[0].classBntShow.replace(/[.]/g ,'')}">...(${object[0].showTxt ||'See more'})</span>`
            let templateBtnHideDefault = `<span class="${object[0].type || ''} default-hide ${object[0].classBntHide.replace(/[.]/g ,'')}">(${object[0].hideTxt ||'See more'})</span>`
            let templateMinusText = `
            <span class="minus-text">
                ${templatehideText} 
                ${templateBtnHide}
            </span>`;

            let megaElipsis = `<span class="mega-elipse"></span>`

            if (object[0].type === 'outline') {
                selector[i].innerHTML = `
                ${templateShowText}
                <span class="see_more-content active ${object[0].type}">
                    ${templateBtnShow}  
                    ${templateMinusText}
                </span>
            `;
            } else if (object[0].type === 'float') {
                selector[i].className += ' see_more__float active'
                selector[i].innerHTML = `
                ${templateShowText}
                <span class="see_more-content">
                    ${templatehideText}             
                </span>
                <span class="container_btn fade">
                    ${templateBtnShow}  
                    ${templateBtnHide}
                </span>
            `;

            } else if (object[0].type === 'mega-elipsis') {
                selector[i].className += ' see_more__megaelipsis active'
                selector[i].innerHTML = `
                ${templateShowText}
                <span class="see_more-content">
                    ${templatehideText}    
                </span>
                <div class="mega-elipsis-container fade">         
                    <div class="flex-mega-elipsis">
                        ${megaElipsis}
                        ${megaElipsis}
                        ${megaElipsis}
                    </div>
                </div>
                `;
            } else { //* DEFAULT E OUTLINE
                selector[i].innerHTML = `
                ${templateShowText}
                <span class="see_more-content active ${object[0].type}">
                    ${templateBtnShowDefault} 
                    <span class="minus-text">
                        ${templatehideText} 
                        ${templateBtnHideDefault}
                    </span>
                </span>
            `;
            }

        }
    }


    function getButtonsFloat() {
        let see_More__btn = document.querySelectorAll(`${object[0].classBntShow}`);
        let see_Less__btn = document.querySelectorAll(`${object[0].classBntHide}`);
        see_More__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.remove('active')
                console.log(this.parentElement.parentElement);
            });
        });
        see_Less__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.add('active')
                console.log(this.parentElement.parentElement);
            });
        });
    }

    function getButtons() {
        let see_More__btn = document.querySelectorAll(`${object[0].classBntShow}`);
        let see_Less__btn = document.querySelectorAll(`${object[0].classBntHide}`);
        see_More__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.classList.remove('active')
            });
        });

        see_Less__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.add('active')
            });
        });
    }

    function getButtonsMegaElipsis() {
        let btnMegaElipsis = document.querySelectorAll('.mega-elipsis-container');
        btnMegaElipsis.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.classList.toggle('active')
                console.log(this.parentElement);
            });
        });
    }

    if (object[0].type === 'float') {
        getButtonsFloat()
    } else if (object[0].type === 'mega-elipsis') {
        getButtonsMegaElipsis()
    } else { //* DEFAULT E OUTLINE
        getButtons()
    }
}

var teste1 = new see({
    el: '.query',
    showTxt: 'Saber Mais',
    hideTxt: 'Saber menos',
    maxCharVerify: 10,
    maxCharShow: 250,
    classBntShow: '.btn-show1',
    classBntHide: '.btn-hide1',
    type: 'default',
    elipsis: true,
})

var teste2 = new see({
    el: '.query2',
    showTxt: 'Ver Mais',
    hideTxt: 'Ver menos',
    maxCharVerify: 10,
    maxCharShow: 250,
    classBntShow: '.btn-show2',
    classBntHide: '.btn-hide2',
    type: 'outline',
})

var teste3 = new see({
    el: '.query3',
    showTxt: 'Ler Mais',
    hideTxt: 'Ler menos',
    maxCharVerify: 10,
    maxCharShow: 250,
    classBntShow: '.btn-show3',
    classBntHide: '.btn-hide3',
    type: 'float',
})
var test4 = new see({
    el: '.query4',
    showTxt: 'Ler mais',
    hideTxt: 'Ler menos',
    maxCharVerify: 10,
    maxCharShow: 250,
    classBntShow: '.btn-show4',
    classBntHide: '.btn-hide4',
    type: 'mega-elipsis',
})
var teste5 = new see({
    el: '.query5',
    showTxt: 'multiplos',
    hideTxt: 'Ler menos',
    maxCharVerify: 10,
    maxCharShow: 250,
    classBntShow: '.btn-show5',
    classBntHide: '.btn-hide5',
    type: 'outline',
})