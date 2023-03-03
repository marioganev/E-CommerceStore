let popupContainer = document.querySelector('.popup_image');

let popupCard = popupContainer.querySelectorAll('.popup');

document.querySelectorAll('.box .card').forEach(product =>{

    product.onclick = () =>{

        popupContainer.style.display = 'flex';

        let name = product.getAttribute('data-name');

        popupCard.forEach(popup =>{

            let target = popup.getAttribute('data-target');

            if(name == target){

                popup.classList.add('active');

            }

        })

    }

})

popupCard.forEach(close =>{

    close.querySelector('.close').onclick = () =>{

        close.classList.remove('active');

        popupContainer.style.display = 'none';

    }

})