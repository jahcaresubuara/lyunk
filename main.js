//------ Story Swiper ------//
// document.addEventListener("DOMContentLoaded", function () {
//      const swiper = new 
// Swiper(".mySwiper",{
//         direction: 'horizontal',
//         slidesPerView: 'auto',
//         spaceBetween: 5,

    
// });
// });


// -------Window Scroll--------//
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
     document.querySelector('.notification-box').style.display='none'
})

//--------- Start Aside --------//
let menuItem = document.querySelectorAll('.menu-item');

//-------- Active Class Remove ------//
const removeActive = ()=>{
    menuItem.forEach(item=>{
       item.classList.remove('active')
    })
}

menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
         document.querySelector('.notification-box').style.display='none'
    })
})

// ------------- Notification -----------//

document.querySelector('#notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

// ----------- Message -------------//
document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notifyCounter2').style.display='none'
    document.querySelector('.message').classList.toggle('boxshadow');
    setTimeout(()=>{

        document.querySelector('.message').classList.remove('boxshadow');
    }, 300);
})

//--------- Friend Request ---------//
let Accept = document.querySelectorAll('#Accept');
let Dlete = document.querySelectorAll('#Delete');
// let action = document.querySelectorAll('.action');
// let request = document.querySelectorAll('.request')

Accept.forEach(accept=>{
    accept.addEventListener('click',()=>{
        accept.parentElement.style.display='none'
        accept.parentElement.parentElement.querySelector('.alert').style.display='block'
    })
});

Dlete.forEach(deletee=>{
    deletee.addEventListener('click',()=>{
        deletee.parentElement.parentElement.style.display='none'
    })
});


//-------Start Profile PopUp -------//


document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
         document.querySelector('.profile-popup').style.display='flex'
    })
});

 
document.querySelectorAll('.close').forEach(AllCloser=>{
    AllCloser.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'
    })
})

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})


// ------ Start Add Post Popup ------//

document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postIMg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').
    files[0]);
    document.querySelector('.feed-img').style.display='none'
})

// ------ Start Add Story Popup ------//

document.querySelector('#add-story').addEventListener('change',()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').
    files[0]);
    document.querySelector('.add-story').style.display='none'
})

// ---------Mini Button Input ---------//
document.querySelector('.mini-button').addEventListener('click',()=>{
    document.querySelector('.input-post').classList.add('boxshadow')
    setTimeout(()=>{
        document.querySelector('.input-post').classList.remove('.add-post1');
    }, 300);
});

document.querySelector('.mini-button').addEventListener('dblclick',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
});

// -----like button---//


document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})

//---- Set Timeout ----//


// setTimeout(()=>{

//     document.querySelector('.message').classList.remove('boxshadow');
// }, 300);


//-----------Theme Customize ------------//
document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
});

//---------- Font Size ------------//
let fontSize = document.querySelectorAll('.choose-size span');

const removeActiveSelector =()=>{
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
}


fontSize.forEach(size=>{
 size.addEventListener('click',()=>{
        let fontSize;
        removeActiveSelector();
        size.classList.toggle('active');
        

        if(size.classList.contains('font-size-1')){
            fontSize ='10px';
        }else if (size.classList.contains('font-size-2')){
            fontSize = '12px';
        }else if(size.classList.contains ('font-size-3')){
            fontSize = '16px'
        }else if (size.classList.contains('font-size-4')){
            fontSize = '19px'
        }else if (size.classList.contains('font-size-5')){
            fontSize = '22px'
        }

            //------ Font Change ------//
         document.querySelector('html').style.fontSize = fontSize;
    })


})


//---------- Color -------------//
let colorpallete = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

const removeActiveColor =()=>{
    colorpallete.forEach(color=>{
        color.classList.remove('active')
    })
}

colorpallete.forEach(color =>{
 color.addEventListener('click',()=>{
        let primaryHue;
        removeActiveColor();
        color.classList.add('active')


        if(color.classList.contains('color-1')){
            Hue = 252;
        }else if (color.classList.contains('color-2')){
            Hue = 52;
        }else if(color.classList.contains ('color-3')){
            Hue = 352;
        }else if (color.classList.contains('color-4')){
            Hue = 152;
        }else if (color.classList.contains('color-5')){
            Hue = 202;
        }

        root.style.setProperty('--primary-color-hue',Hue)
    })
});


//------------ Light Mode and Dark Mode ------------//

let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');

//Theme Background Value----//
let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

const changBg = ()=>{
    root.style.setProperty('--color-dark-light-theme',darkColorLightTheme);
    root.style.setProperty('--color-light-light-theme',lightColorLightTheme);
    root.style.setProperty('--color-white-light-theme',whiteColorLightTheme);
 }

bg2.addEventListener('click', ()=>{
    darkColorLightTheme = '95%';
    lightColorLightTheme = '5%';
    whiteColorLightTheme = '10%';
    

    //Add Active Class//
    bg2.classList.add('active');
    bg1.classList.remove('active');

    bgicon();
    changBg();
});

bg1.addEventListener('click', ()=>{

    //Add Active Class//
    bg2.classList.add('active');
    bg1.classList.remove('active');

   window.location.reload();
});

//Dark Theme Aside Icon
let menuItemImg = document.querySelectorAll('.menu-item span img');
const bgicon = ()=>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg');
    })
}


//SignUp and SignIn Page

