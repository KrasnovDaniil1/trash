<template>
    <div class="main">

        <div class="main-picture">
            <img class="main-picture-2" src="../assets/img/main/main-picture-2.png" alt="" />
        </div>

        <div class="main-title">
            <h1>{{$t('Main.main-title')}}</h1>
        </div>

        <span class="main-text">
           {{$t('Main.main-text')}}
        </span>

        <div class="main-btn">
            <a href="/about">{{$t('Main.main-btn')}}</a>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
  
}
</script>
<style scoped>

    .main {
        background-color: #BBA773;
        width: 100%;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .main::after {
        position: absolute;
        content:url("../assets/img/main/background-img.svg");
        left: 0px;
        top: 0px;
        animation-name: mainAfter;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
    }    
        @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 580px;
            top: 45px;
        }
    } 
    .main::before {
        position: absolute;
        content:url("../assets/img/main/background-img-2.png");
        width: 673.39px;
        height: 762.43px;
        left: 15px;
        top: 575px;
        background: inherit;
        z-index: 0;
    }    
    
    /*main-picture */

    .main-picture {
        position: relative;
        display: flex;
    }

    .main-picture-2 {             /*Картинка с анимацией */
    position: relative;

        width: 437px;
        height: 518px;
        margin-left: auto;
        margin-right: auto;  
        bottom: 500px;      
        animation-name: mainPicture;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
    }

    @keyframes mainPicture {
        0% {
            opacity: 0.3;
            bottom: 500px;
        }

        100% {
            opacity: 1;
            bottom: 0px;
        }
    } 

    .main-picture::after {
        position: absolute;
        content:url("../assets/img/main/main-picture-1.png");
        width: 222.29px;
        height: 276.68px;
        transform: rotate(0.13deg);
        bottom: 50px;
        left: 0;
        animation-duration: 2s;
        animation-name:mainPictureAfter ;
        animation-fill-mode: forwards;
        z-index: 20;
    }    
    @keyframes mainPictureAfter {
        0% {
            opacity: 0.3;
            left: 0;
            bottom: 50px;
        }

        100% {
            opacity: 1;
            bottom: 50px;
            left: 564px;
        }
    }
    .main-picture::before {
        position: absolute;
        content:url("../assets/img/main/main-picture-3.png");
        width: 232px;
        height: 288px;
        transform: rotate(0.13deg);
        top: 60px;
        right: 36px;
        animation-duration: 2s;
        animation-name:mainPictureBefore ;
        animation-fill-mode: forwards;
        z-index: 20;
    }
    @keyframes mainPictureBefore{
        0% {
            opacity: 0.3;
            top: 60px;
            right: 36px;
        }

        100% {
            opacity: 1;
            top: 60px;
            right: 606px;
        }
    }

    /*main-title */
    .main-title {
        position: relative;
        width: 979px;
        font-family: "Oswald Bold" ;
        font-style: normal;
        font-weight: bold;
        font-size: 45px;
        line-height: 60px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #242424;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        border: 4px solid #2F2F2F;
        z-index: 20;
    }

    .main-title>h1 {
        padding-top: 20px;
        padding-bottom: 25px;
        padding-left: 10px;
        padding-right: 8px;
    }

    /*main-text */

    .main-text {
        position: relative;
        display: block;
        margin-top: 81px;
        width: 1069px;
        font-family:  "PT Sans Narrow Regular";
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 52px;
        text-align: center;
        color: #2B2B2B;
        margin-left: auto;
        margin-right: auto;
        z-index: 20;
    }

     /*main-btn */

    .main-btn {
        position: relative;
        display: block;
        margin-left:auto ;
        margin-right: auto;
        margin-top: 54px;
        margin-bottom: 304px; 
        display: flex;
        justify-content: center;
        z-index: 20;
    }
    .main-btn>a {
        display: inline-block;
        font-family: "Oswald Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 40px;  
        letter-spacing: 8px;
        padding-top: 5px;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 9px;
        color: #0D0D0D;
        text-align: center;       
        background: #735C21;        
        border-radius: 57px;
        transition-property: all;
        transition-duration: 0.7s;
    }
    .main-btn>a:hover {
        transition-property: all;
        transition-duration: 0.4s;
        background-color: #E7E0CF;
    }

@media (min-width: 1650px) and (max-width:1850px) {

    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: 50px;
            }

            100% {
                opacity: 1;
                bottom: 50px;
                left: 480px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 60px;
                right: 36px;
            }

            100% {
                opacity: 1;
                top: 60px;
                right: 490px;
            }
    }

    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 500px;
            top: 45px;
        }
    } 
}

@media (min-width: 1500px) and (max-width:1650px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: 50px;
            }

            100% {
                opacity: 1;
                bottom: 50px;
                left: 400px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 60px;
                right: 36px;
            }

            100% {
                opacity: 1;
                top: 60px;
                right: 400px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 410px;
            top: 45px;
        }
    } 
}
@media (min-width: 1300px) and (max-width:1500px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: 50px;
            }

            100% {
                opacity: 1;
                bottom: 50px;
                left: 300px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 60px;
                right: 36px;
            }

            100% {
                opacity: 1;
                top: 60px;
                right: 300px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 310px;
            top: 45px;
        }
    } 
    .main-title {
        width: 800px;
        font-size: 40px;
        margin-top: 30px;
        line-height: 50px;
    }
    .main-title>h1 {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 51px;
        width: 909px;
    }
    .main::before {
        left: 0px;
        top: 700px;
    }
    .main-btn {
        margin-top: 44px;
        
    }
    .main-btn>a {
        font-size: 35px;
    }
}
@media (min-width: 1100px) and (max-width:1300px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: 50px;
            }

            100% {
                opacity: 1;
                bottom: 50px;
                left: 220px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 60px;
                right: 36px;
            }

            100% {
                opacity: 1;
                top: 60px;
                right: 220px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 220px;
            top: 45px;
        }
    } 
    .main-title {
        width: 800px;
        font-size: 40px;
        margin-top: 30px;
        line-height: 50px;
    }
    .main-title>h1 {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 51px;
        width: 859px;
        font-size: 35px;
        line-height: 47px;
    }
    .main::before {
        left: 0px;
        top: 400px;
    }
    .main-btn {
        margin-top: 44px;
        margin-bottom:100px;
    }
    .main-btn>a {
        font-size: 35px;
    }
}
@media (min-width: 900px) and (max-width:1100px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: -120px;
            }

            100% {
                opacity: 1;
                bottom: -40px;
                left: 190px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 30px;
                right: 36px;
            }

            100% {
                opacity: 1;
                top: 30px;
                right: 150px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 180px;
            top: 0;
        }
    } 
    .main-title {
        width: 670px;
        font-size: 35px;
        margin-top: 30px;
        line-height: 45px;
    }
    .main-title>h1 {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 20px;
        width: 820px;
        font-size: 33px;
        line-height: 45px;
    }
    .main::before {
        left: 0px;
        top: 200px;
    }
    .main-btn {
        margin-top: 30px;
        margin-bottom:50px;
    }
    .main-btn>a {
        font-size: 30px;
    }
    .main-picture-2 {
        width: 350px;
        height: 400px;
    }
    .main-picture::after {
        content: url("../assets/img/main/main-picture-1-middle.png");
    }
    .main-picture::before {
        content: url("../assets/img/main/main-picture-3-middle.png");
    }
}
@media (min-width: 750px) and (max-width:900px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: -120px;
            }

            100% {
                opacity: 1;
                bottom: -40px;
                left: 100px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 30px;
                right: 50px;
            }

            100% {
                opacity: 1;
                top: 30px;
                right: 50px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 100px;
            top: 0;
        }
    } 
    .main-title {
        width: 600px;
        font-size: 30px;
        margin-top: 30px;
        line-height: 45px;
    }
    .main-title>h1 {
        padding-top: 4px;
        padding-bottom: 6px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 20px;
        width: 680px;
        font-size: 30px;
        line-height: 45px;
    }
    .main::before {
        left: 0px;
        top: 250px;
    }
    .main-btn {
        margin-top: 30px;
        margin-bottom:50px;
    }
    .main-btn>a {
        font-size: 30px;
    }
    .main-picture-2 {
        width: 350px;
        height: 400px;
    }
    .main-picture::after {
        content: url("../assets/img/main/main-picture-1-middle.png");
    }
    .main-picture::before {
        content: url("../assets/img/main/main-picture-3-middle.png");
    }
}
@media (min-width: 540px) and (max-width:750px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: -120px;
            }

            100% {
                opacity: 1;
                bottom: -40px;
                left: 40px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 30px;
                right: 50px;
            }

            100% {
                opacity: 1;
                top: 30px;
                right: 30px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 50px;
            top: -40px;
        }
    } 
    .main-title {
        width: 500px;
        font-size: 25px;
        margin-top: 30px;
        line-height: 35px;
    }
    .main-title>h1 {
        padding-top: 4px;
        padding-bottom: 6px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 20px;
        width: 500px;
        font-size: 26px;
        line-height: 45px;
    }
    .main::before {
        left: -150px;
        top: 250px;
        content: url("../assets/img/main/background-img-2-middle.png");
    }
    .main-btn {
        margin-top: 30px;
        margin-bottom:50px;
    }
    .main-btn>a {
        font-size: 27px;
    }
    .main-picture-2 {
        width: 300px;
        height: 350px;
    }
    .main-picture::after {
        content: url("../assets/img/main/main-picture-1-middle.png");
    }
    .main-picture::before {
        content: url("../assets/img/main/main-picture-3-middle-small.png");
        width: 182px;
        height: 208px;
    }
}

@media (min-width: 460px) and (max-width:540px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: -150px;
            }

            100% {
                opacity: 1;
                bottom: -150px;
                left: 110px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 20px;
                right: -80px;
            }

            100% {
                opacity: 1;
                top: 20px;
                right: 10px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 120px;
            top: 15px;
        }
    } 
    .main-title {
        width: 326px;
        font-size: 19px;
        margin-top: 10px;
        line-height: 20px;
    }
    .main-title>h1 {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 6px;
        width: 340px;
        font-size: 16px;
        line-height: 21px;
    }
    .main::after {
        content: url("../assets/img/main/background-img-small.svg");
    }
    .main::before {
        left: 50px;
        top: 290px;
        content: url("../assets/img/main/background-img-2-small.png");
        width: 300px;
        height: 100px;
    }
    .main-btn {
        margin-top: 13px;
        margin-bottom:20px;

    }
    .main-btn>a {
        font-size: 20px;
        line-height: 30px;
        padding-top: 5px;
        padding-right: 14px;
        padding-left: 14px;
        padding-bottom: 5px;
        letter-spacing: 0.075em;
    }
    .main-picture-2 {
        width: 162px;
        height: 186px;
    }
    .main-picture::after {
        content: url("../assets/img/main/main-picture-1-small.png");
    }
    .main-picture::before {
        content: url("../assets/img/main/main-picture-3-small.png");
        width: 182px;
        height: 208px;
    }
}
@media (min-width: 300px) and (max-width:460px) {
    @keyframes mainPictureAfter {
            0% {
                opacity: 0.3;
                left: 0;
                bottom: -150px;
            }

            100% {
                opacity: 1;
                bottom: -150px;
                left: 70px;
            }
        }

    @keyframes mainPictureBefore{
            0% {
                opacity: 0.3;
                top: 20px;
                right: -80px;
            }

            100% {
                opacity: 1;
                top: 20px;
                right: 50px;
            }
        }
    @keyframes mainAfter {
        0% {
            left: 0px;
            top: 0px;
        }

        100% {
            left: 80px;
            top: 15px;
        }
    } 
    .main-title {
        width: 326px;
        font-size: 19px;
        margin-top: 10px;
        line-height: 20px;
    }
    .main-title>h1 {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 5px;
        padding-right: 0px;
    }
    .main-text {
        margin-top: 6px;
        width: 340px;
        font-size: 16px;
        line-height: 21px;
    }
    .main::after {
        content: url("../assets/img/main/background-img-small.svg");
    }
    .main::before {
        left: 0px;
        top: 290px;
        content: url("../assets/img/main/background-img-2-small.png");
        width: 300px;
        height: 100px;
    }
    .main-btn {
        margin-top: 13px;
        margin-bottom:20px;

    }
    .main-btn>a {
        font-size: 20px;
        line-height: 30px;
        padding-top: 5px;
        padding-right: 14px;
        padding-left: 14px;
        padding-bottom: 5px;
        letter-spacing: 0.075em;
    }
    .main-picture-2 {
        width: 162px;
        height: 186px;
    }
    .main-picture::after {
        content: url("../assets/img/main/main-picture-1-small.png");
    }
    .main-picture::before {
        content: url("../assets/img/main/main-picture-3-small.png");
        width: auto;
        height: auto;
    }
}
</style>
