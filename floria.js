@import url('https://fonts.googleapis.com/css2?family=Graduate&display=swap'); /* Graduate, cursive */
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap'); /* Lexend Mega, sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap'); /* Titillium Web, sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap'); /* Inconsolata, monospace */
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap'); /* Source Code Pro, monospace */


::-webkit-scrollbar{
    background: #272729;
    width: 4px;
}
::-webkit-scrollbar-thumb{
    background: whitesmoke;
}

::selection{
    background: #d5ecf517;
    color: silver;
}

body{
    background-color: #272729;
    margin: 0;
    height: 100%;
    scroll-behavior: smooth;
}

#head{
    padding: 6px;
    transition: 250ms linear all;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
#head h1{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: bolder;
    line-height: 1;
}
#head > #link{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 7px;
    z-index: 999;
}
#head > #link > #center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
#head > #link > #center > a{
    font-family: 'Titillium Web', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: x-large;
    margin-left: 9px;
    text-decoration: none;
    transition: 250ms linear all;
    display: block;
    margin-top: 5px;
    margin-left: 2;
}
#head > #link > #center > a:hover{
    color: palegreen;
    text-decoration: underline;
}

/* Mobile Menu Css Start */
#mobile-menu{
    width: 50px;
    height: 50px;
    float: right;
    position: relative;
    top: 30px;
    left: 0px;
    z-index: 1000;
}
#mobile-menu a{
    padding: 15px;
    position: relative;
    cursor: pointer
}
#mobile-menu i{
    position: absolute;
    display: block;
    height: 2px;
    background: white;
    width: 30px;
    left: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
}  
#mobile-menu i:nth-child(1){
    top: 16px;
}  
#mobile-menu i:nth-child(2){
    top: 24px;
}   
#mobile-menu i:nth-child(3){
    top: 32px;
}

/* About Css Start */
#about{
    padding: 16px;
    margin-top: 98px;
}
#about img{
    border-radius: 500%;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.8);
    width: 300px;
    height: 300px;
    margin: 7px;
    position: relative;
    left: 18px;
    float: right;
}
#about h1{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: bolder;
    line-height: 1;
}
#about p{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}
#about a{
    color: red;
    text-decoration: underline;
}
#about .btn{
    box-shadow: 0px 0px 0px .5px white;
    color: white;
    padding: 10px;
    position: relative;
    top: 15px;
    text-decoration: none;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 2.7;
    max-height: 100px;
    transition: 250ms linear all;
}
#about .btn:hover{
    background-color: white;
    box-shadow: initial;
    color: #272729;
}

/* Card Css Start */
#card{
    padding: 16px;
    overflow: hidden;
    margin-top: 98px;
}
#card-setting > #card-1{
    display: flex;
    flex-wrap: nowrap;
}
#card-setting > #card-2{
    display: flex;
    flex-wrap: nowrap;
}
#card > #card-setting > #card-1 > hr{
    background: white;
    border: none;
    height: 3px;
    opacity: .2;
    width: 250px;
    display: none;
}
#card > #card-setting > #card-1 > div{
    flex: 1;
    margin: 10px;
}
#card > #card-setting > #card-1 > div i{
    font-size: x-large;
    color: white;
    position: relative;
}
#card > #card-setting > #card-1 > div h1{
    color: white;
    font-family: 'Inconsolata', monospace;
    font-weight: lighter;
    line-height: 1;
    text-align: center;
}
#card > #card-setting > #card-1 > div p{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
    text-align: center;
}
#card > #card-setting > #card-2 > div{
    flex: 1;
    margin: 10px;
}
#card > #card-setting > #card-2 > div i{
    font-size: x-large;
    color: white;
    position: relative;
}
#card > #card-setting > #card-2 > div h1{
    color: white;
    font-family: 'Inconsolata', monospace;
    font-weight: lighter;
    line-height: 1;
    text-align: center;
}
#card > #card-setting > #card-2 > div p{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
    text-align: center;
}

/* Features Css Start */
#features{
    padding: 16px;
    overflow: hidden;
    margin-top: 98px;
}
#features > #features-1{
    display: flex;
    flex-wrap: nowrap;
}
#features > #features-1 > div{
    background-color: #29292b;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
    padding: 6px;
    margin: 20px;
    flex: 1;
    border-radius: 5px;
}
#features > #features-1 > div span{
    position: relative;
    background-color: dodgerblue;
    color: white;
    padding: 10px;
    font-family: 'Titillium Web', sans-serif;
    left: -20px;
}
#features > #features-1 > div h1{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}
#features > #features-1 > div p{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}

#features > #features-2{
    display: flex;
    flex-wrap: nowrap;
}
#features > #features-2 > div{
    background-color: #29292b;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
    padding: 6px;
    margin: 20px;
    flex: 1;
    border-radius: 5px;
}
#features > #features-2 > div span{
    position: relative;
    background-color: dodgerblue;
    color: white;
    padding: 10px;
    font-family: 'Titillium Web', sans-serif;
    left: -20px;
}
#features > #features-2 > div h1{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}
#features > #features-2 > div p{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}

/* Footer Css Start */
#footer{
    padding: 16px;
    overflow: hidden;
    margin-top: 98px;
}
#footer .copyright{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
    text-align: center;
    font-size: x-large;
    opacity: .5;
}
#footer > #flex{
    display: flex;
}
#footer > #flex > div{
    padding: 6px;
    margin: 20px;
    flex: 1;
    border-radius: 5px;
}
#footer > #flex > div h1{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
}
#footer > #flex > div a{
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: lighter;
    line-height: 1;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: 250ms linear all;
}
#footer > #flex > div a:hover{
    color: palegreen;
    text-decoration: underline;
}

/* Responsive Css Start */
@media screen and (max-width: 700px){
    #head h1{
        float: initial;
    }
    #about img{
        display: block;
        margin: 0 auto;
        float: initial;
        position: inherit;
    }
    #card-setting > #card-1{
        display: initial;
    }
    #card > #card-setting > #card-1 hr{
        display: block;
    }
    #card-setting > #card-2{
        display: initial;
    }
    #card > #card-setting > #card-2 hr{
        display: block;
    }
    #features > #features-1{
        display: initial;
    }
    #features > #features-2{
        display: initial;
    }
    #footer > #flex{
        display: initial;
    }
    #head > #link > #center > a{
        font-size: 17px;
    }
}
