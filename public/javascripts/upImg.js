'use strict';

var upImg= {};
var imagesJeunes = ['/images/jeunes/1.jpg', '/images/jeunes/2.jpg', '/images/jeunes/3.jpg', '/images/jeunes/4.jpg', '/images/jeunes/5.jpg'],
  jeunesId      =['1','2','3','4','5'],
  imagesEnfants = ['/images/enfants/1.jpg', '/images/enfants/2.jpg', '/images/enfants/3.jpg', '/images/enfants/4.jpg', '/images/enfants/5.jpg'/*, '/images/enfants/6.jpg', '/images/enfants/7.jpg', '/images/enfants/8.jpg', '/images/enfants/9.jpg', '/images/enfants/10.jpg', '/images/enfants/11.jpg'*/],
  enfantsId      =['6','7','8','9','10'],
  imagesJesus = ['/images/cherche_Jesus/1.jpg', '/images/cherche_Jesus/2.jpg', '/images/cherche_Jesus/3.jpg', '/images/cherche_Jesus/4.jpg', '/images/cherche_Jesus/5.jpg'],
  chercheId      =['11','12','13','14','15'],
  imagesMobile = ['/images/mobile/1.jpg', '/images/mobile/2.jpg', '/images/mobile/3.jpg', '/images/mobile/4.jpg', '/images/mobile/5.jpg'],
  mobileId      =['16','17','18','19','20'],
  imagesTimeLine= ['/images/timeline/1.jpg', '/images/timeline/2.jpg', '/images/timeline/3.jpg', '/images/timeline/4.jpg'],
  timeId      =['21','22','23','24'],
  imagesVisiteurs= ['/images/visiteurs/1.jpg', '/images/visiteurs/2.jpg', '/images/visiteurs/3.jpg', '/images/visiteurs/4.jpg'],
  visiteursId      =['25','26','27','28'],
  imagesEvenements= ['/images/evenement/1.jpg','/images/evenement/2.jpg'],
  evenementsId      =['29','30'];

upImg.uploadedImages = function(tab,cb){

  for(var i=0; i<tab.length; i++) {
    var elemImage = document.createElement("IMG");
    elemImage.setAttribute("src", tab[i]);
    elemImage.setAttribute("width", "400px");
    elemImage.setAttribute("height", "320px");
    elemImage.setAttribute("alt", "Jeunes");
    elemImage.setAttribute("data-lightbox", "roadtrip");
    elemImage.style.marginRight ="5px";
    elemImage.style.marginBottom ="5px";

    var a=document.createElement('a');

    //Affichage et création de l'image à afficher avec création
    //De la balise <a> pour la galerie d'élements
    //

    //cas des Jeunes
    if(tab[i].includes('jeunes')){
      elemImage.setAttribute("id",jeunesId[i]);
      document.getElementById("jeunes").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('jeunes').appendChild(a);
    }

    //cas des enfants
    if(tab[i].includes('enfants')){
      elemImage.setAttribute("id",enfantsId[i]);
      document.getElementById("enfants").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('enfants').appendChild(a);

    }

    //cas culte theme:"Jésus"
    if(tab[i].includes('Jesus')){
      elemImage.setAttribute("id",chercheId[i]);
      document.getElementById("Jesus").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('Jesus').appendChild(a);
    }

    //cas images mobiles
    if(tab[i].includes('mobile')){
      elemImage.setAttribute("id",mobileId[i]);
      document.getElementById("mobile").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('mobile').appendChild(a);
    }

    //cas archives
    if(tab[i].includes('timeline')){
      elemImage.setAttribute("id",timeId[i]);
      document.getElementById("timeline").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('timeline').appendChild(a);
    }

    ////cas des visiteurs
    if(tab[i].includes('visiteurs')){
      elemImage.setAttribute("id",visiteursId[i]);
      document.getElementById("visiteurs").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('visiteurs').appendChild(a);
    }

    //Evenements passés
    if(tab[i].includes('evenement')){
      elemImage.setAttribute("id",evenementsId[i]);
      document.getElementById("evenements").appendChild(elemImage);
      a.href = elemImage.getAttribute('src');
      a.setAttribute("data-lightbox","roadtrip");
      a.appendChild(elemImage);
      document.getElementById('evenements').appendChild(a);
    }
  }
  return cb();
};
