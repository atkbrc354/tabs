const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const tabBtn = document.getElementById('tab-btn');
const subContent = document.querySelectorAll('.sub-data-content');



const chengeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    chengeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        console.log(content[i].dataset.content);
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});



const subClass = el => {
    for(let i = 0; i < tabBtn.children.length; i++) {
        tabBtn.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabBtn.addEventListener('click', e => {
    const currTab = e.target.dataset.sub;
    subClass(e.target);
    for(let i = 0; i < subContent.length; i++) {
        subContent[i].classList.remove('active');
        console.log(subContent[i].dataset.contentsub);
        if(subContent[i].dataset.contentsub === currTab) {
            subContent[i].classList.add('active');
        }
    }
})

