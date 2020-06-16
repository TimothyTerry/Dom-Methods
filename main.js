const mainElement = document.querySelector('body')




const removebutton = document.createElement('Button');
let buttonText = document.createTextNode("Begone!")
removebutton.appendChild(buttonText);
mainElement.append(removebutton);

const picture = document.createElement('img')
picture.src = "http://i.kinja-img.com/gawker-media/image/upload/s--uceKIXlG--/196596xvuf27wjpg.jpg"
mainElement.append(picture)

const site = document.createElement('a')
let siteText = document.createTextNode('Youtube')
site.href = 'https://www.youtube.com/watch?v=a_AqEvas_9g'
site.appendChild(siteText);
mainElement.append(site);

removebutton.addEventListener('click', function (){
        mainElement.remove()

})




