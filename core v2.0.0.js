function see(...args) {
    // Object.prototype
    var object = []
    for (const x in args) {
        object.push(args[x])
    }

    var selector = document.querySelectorAll(`${object[0].el}`)

    for (var i = 0; i < selector.length; i++) {
        if (selector[i].innerHTML.length > object[0].maxCharVerify) {
            let selectorContent = selector[i].textContent,
                txtShowed = selectorContent.substr(0, object[0].maxCharShow),
                txtHidden = selectorContent.substr(object[0].maxCharShow, selector[i].innerHTML.lenght),
                classShow = `${object[0].classBntShow.replace(/[.]/g ,'')}`,
                classHide = `${object[0].classBntHide.replace(/[.]/g ,'')}`,


                // Comṕnentes 
                component_ShowText = `<span>${txtShowed}</span>`,
                component_hideText = `<span class="sm_minus-text">${txtHidden}</span>`,
                component_BtnShow = `<button type="button" class="sm_btn_${object[0].type} sm_show ${classShow}">${object[0].showTxt ||'See more'}</button>`,
                component_BtnHide = `<button type="button" class="sm_btn_${object[0].type} sm_hide ${classHide}">${object[0].hideTxt ||'See less'}</button>`,
                component_BtnShowDefault = `<span class="sm_btn_${object[0].type || 'default'} sm_show  ${classShow}">...(${object[0].showTxt || 'See more'})</span>`,
                component_BtnHideDefault = `<span class="sm_btn_${object[0].type || 'default'}  sm_hide  ${classHide}">(${object[0].hideTxt || 'See less'})</span>`,
                component_megaElipsis = `<span class="sm_mega-elipse"></span>`,
                component_MinusText = `<span class="sm_minus-text">${component_hideText} ${component_BtnHide}</span>`;


            if (object[0].type === 'outline') {
                selector[i].innerHTML = `
                ${component_ShowText}
                <span class="sm_content sm_active ${object[0].type}">
                    ${component_BtnShow}  
                    ${component_MinusText}
                </span>
                `;
            } else if (object[0].type === 'float') {
                selector[i].className += ' sm_float sm_active'
                selector[i].innerHTML = `
                ${component_ShowText}
                <span class="sm_content">
                    ${component_hideText}             
                </span>
                <span class="sm_container_btn sm_fade">
                    ${component_BtnShow}  
                    ${component_BtnHide}
                </span>
                `;

            } else if (object[0].type === 'mega-elipsis') {
                selector[i].className += ' sm_mega-elipsis sm_active'
                selector[i].innerHTML = `
                ${component_ShowText}
                <span class="sm_content">
                    ${component_hideText}    
                </span>
                <div class="sm_mega-elipsis-container sm_fade">         
                    <div class="sm_flex-mega-elipsis">
                        ${component_megaElipsis}
                        ${component_megaElipsis}
                        ${component_megaElipsis}
                    </div>
                </div>
                `;
            } else { //* Default
                selector[i].innerHTML = `
                ${component_ShowText}
                <span class="sm_content sm_active ${object[0].type || 'default'}">
                    ${component_BtnShowDefault} 
                    <span class="minus-text">
                        ${component_hideText} 
                        ${component_BtnHideDefault}
                    </span>
                </span>
            `;
            }

        }
    }




    function getButtons() {
        let see_More__btn = document.querySelectorAll(`${object[0].classBntShow}`);
        let see_Less__btn = document.querySelectorAll(`${object[0].classBntHide}`);
        see_More__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.classList.remove('sm_active')
            });
        });

        see_Less__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.add('sm_active')
            });
        });
    }

    function getButtonsFloat() {
        let see_More__btn = document.querySelectorAll(`${object[0].classBntShow}`);
        let see_Less__btn = document.querySelectorAll(`${object[0].classBntHide}`);
        see_More__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.remove('sm_active')
                console.log(this.parentElement.parentElement);
            });
        });
        see_Less__btn.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.parentElement.classList.add('sm_active')
                console.log(this.parentElement.parentElement);
            });
        });
    }

    function getButtonscomponent_megaElipsis() {
        let btncomponent_megaElipsis = document.querySelectorAll('.sm_mega-elipsis-container');
        btncomponent_megaElipsis.forEach(el => {
            el.addEventListener('click', function() {
                this.parentElement.classList.toggle('sm_active')
                console.log(this.parentElement);
            });
        });
    }

    if (object[0].type === 'float') {
        getButtonsFloat()
    } else if (object[0].type === 'mega-elipsis') {
        getButtonscomponent_megaElipsis()
    } else { //* DEFAULT E OUTLINE
        getButtons()
    }
}

var teste1 = new see({
    el: '.query',
    maxCharVerify: 10,
    maxCharShow: 251,
    classBntShow: '.btn-show1',
    classBntHide: '.btn-hide1',
})

var teste2 = new see({
    el: '.query2',
    showTxt: 'Ver Mais',
    hideTxt: 'Ver menos',
    maxCharVerify: 100,
    maxCharShow: 170,
    classBntShow: '.btn-show2',
    classBntHide: '.btn-hide2',
    type: 'outline',
})

var teste3 = new see({
    el: '.query3',
    showTxt: 'Ler Mais',
    hideTxt: 'Ler menos',
    maxCharVerify: 100,
    maxCharShow: 200,
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
    maxCharShow: 251,
    classBntShow: '.btn-show5',
    classBntHide: '.btn-hide5',
    type: 'outline',
})