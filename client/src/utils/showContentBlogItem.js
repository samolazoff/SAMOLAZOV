function showContentBlogItem(event){
    const btnOn = document.querySelector('#btn-on');
    const btnOff = document.querySelector('#btn-off');
    const i = event.currentTarget;

    if (i.classList[0] === 'btn-set'){
        const findElm = document.querySelector(`#${i.dataset.id} .app-blog-item-content`);
        findElm.classList.toggle('d-none');
        btnOn.classList.toggle('d-none');
        btnOff.classList.toggle('d-none');
        console.log(findElm);
    }
}
export default showContentBlogItem;