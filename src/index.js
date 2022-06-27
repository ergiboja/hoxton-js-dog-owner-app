// console.log(data);

// WRITE YOUR CODE BELOW!
// let ul = document.querySelector('.dogs-list')

  
function doglistbtn(dog){
    let daUl = document.querySelector('.dogs-list')

    let liEl = document.createElement('li')

    liEl.className = 'dogs-list__button'

    liEl.textContent = dog.name

    liEl.addEventListener('click', ()=>DogCard(dog))


    daUl.append(liEl)
}
for (let dog of data) {
        doglistbtn(dog)
    }

    function DogCard(dog){
        
        
    
        let divEl = document.createElement('div')
        divEl.className = 'main__dog-section__desc'
        let h3El = document.createElement('h3')
        let h2El = document.createElement('h2')
        h2El.textContent = dog.name
        let imgEl = document.createElement('img')
        imgEl.src = dog.image
        h3El.textContent = dog.bio
        let pEl = document.createElement('p')
        pEl.textContent = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,  minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum! '
    
        let div2El = document.createElement('div')
        div2El.className = 'main__dog-section__btn'
        let p2El = document.createElement('p')
        dog.isGoodDog === true ? 
        p2El.textContent = 'Is naughty? Yes!' : 
        p2El.textContent = 'Is naughty? No!'
       
        
    
        let btnEl = document.createElement('button')
        dog.isGoodDog === true ?
            btnEl.textContent = 'Bad Doggy' :
            btnEl.textContent = 'Good Doggy'
        
            
    
        let Section = document.querySelector('.main__dog-section')
        Section.textContent = ''
        Section.append(h2El, imgEl, divEl, h3El, pEl, div2El, p2El, btnEl)
        divEl.append(h3El, pEl)
        div2El.append(p2El, btnEl)
        
    }
    