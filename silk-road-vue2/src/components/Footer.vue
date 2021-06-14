<template>
    <div class="footer">
        <div class="sochset">
            <a><img src="../assets/img/footer/telegram.png" alt="" /></a>
            <a><img src="../assets/img/footer/instagram.png" alt="" /></a>
        </div>
        <div class="sponsor">
            <h1>Наши спонсоры</h1>
            <div>
                <a><img src="../assets/img/footer/daraxtchi.png" alt="" /></a>
                <a><img src="../assets/img/footer/sevimli.png" alt="" /></a>
                <a><img src="../assets/img/footer/naesmi.png" alt="" /></a>
            </div>
        </div>
        <div class="contact">
            <a>Контакты: +99890777777777</a>
            <a>E-mail:example@gmail.com</a>          
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
    .footer {
        width: 100%;
        max-width: 1920px;
        display: flex;
        justify-content: space-between;
        padding-left: 81px;
        padding-right: 81px;
        background: #706445;
        height: 281px;
    }

    .sochset>a>img {
        width: 78px;
        height: 82px;
        margin-top: 25px;
    }
    .sponsor>h1 {
        text-align: center;
        font-family: "Oswald Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 47px;
        line-height: 70px;
        color: #252525;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .sponsor {
        margin-left: 240px;
    }
    .sponsor>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sponsor>div>a {
        opacity: 0.4;
        transition: opacity 0.8s ,  transform 0.8s;
    }
    .sponsor>div>a:hover {
        opacity: 1;
        transition: opacity 0.3s ,  transform 0.2s;
    }
    .sponsor>div>a:nth-child(2) {
        margin-left: 73px;
        margin-right: 93px;
    }
    .contact {
        display: flex;
        flex-direction: column;
    }
    .contact {
        font-family: "Oswald Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 59px;
        color: #DFDFDF;
    }
    .contact>a:first-child{
        margin-top: 42px;
        margin-bottom: 5px;
    }
    @media (min-width:1500px) and (max-width:1800px) {
        .sponsor {
            margin-left: 100px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 43px;
            margin-right: 53px;
        }
        .footer {
            padding-left: 51px;
            padding-right: 51px;
            background: #706445;
            height: 281px;
        }
    }
    @media (min-width:1200px) and (max-width:1500px) {
        .sponsor {
            margin-left: 80px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
        }
        .footer {
            padding-left: 41px;
            padding-right: 41px;
            background: #706445;
            height: 231px;
        }
        .sochset>a>img {
            width: 65px;
            height: 70px;
            margin-top: 20px;
        }
        .sponsor>h1 {
            font-size: 37px;
            line-height: 60px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .sponsor>div>a>img {
            width: 80%;
            height: 80%;
        }
        .contact {
            font-size: 30px;
        }
    }
@media (min-width:1000px) and (max-width:1200px) {
        .sponsor {
            margin-left: 0px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
        }
        .footer {
            padding-left: 11px;
            padding-right: 11px;
            background: #706445;
            height: 171px;
        }
        .sochset>a>img {
            width: 50px;
            height: 60px;
            margin-top: 20px;
        }
        .sponsor>h1 {
            font-size: 32px;
            line-height: 60px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .sponsor>div {
            justify-content: space-around;
        }
        .sponsor>div>a>img {
            width: 65%;
            height: 65%;
        }
        .contact {
            font-size: 24px;
        }
        .contact>a:first-child {
            margin-top: 15px;
            margin-bottom: 0px;
        }
    }
@media (min-width:800px) and (max-width:1000px) {
        .sponsor {
            margin-left: 0px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
        }
        .footer {
            padding-left: 11px;
            padding-right: 11px;
            background: #706445;
            height: 141px;
        }
        .sochset>a>img {
            width: 50px;
            height: 50px;
            margin-top: 15px;
        }
        .sponsor {
            width: 480px;
        }
        .sponsor>h1 {
            font-size: 28px;
            line-height: 40px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .sponsor>div {
            justify-content: space-around;
        }
        .sponsor>div>a>img {
            width: 60%;
            height: 60%;
            margin-left: auto;
            margin-right: auto;
        }
        .contact {
            font-size: 22px;
        }
        .contact>a:first-child {
            margin-top: 10px;
            margin-bottom: 0px;
        }
        .sponsor>div>a {
            opacity: 1;
        }
    }
    @media (min-width:600px) and (max-width:800px) {
        .sponsor {
            margin-left: 0px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
        }
        .footer {
            padding-left: 11px;
            padding-right: 11px;
            background: #706445;
            height: 111px;
        }
        .sochset>a>img {
            width: 35px;
            height: 35px;
            margin-top: 10px;
        }
        .sponsor {
            width: 350px;
        }
        .sponsor>h1 {
            font-size: 25px;
            line-height: 35px;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        .sponsor>div {
            justify-content: space-around;
        }
        .sponsor>div>a>img {
            width: 70%;
            height: 70%;
            margin-left: auto;
            margin-right: auto;
        }
        .contact {
            font-size: 16px;
            line-height: 30px;
        }
        .contact>a:first-child {
            margin-top: 20px;
            margin-bottom: 0px;
        }
        .sponsor>div>a {
            opacity: 1;
        }
    }
    @media (min-width:300px) and (max-width:600px) {
        .sponsor {
            margin-left: 0px;
        }
        .sponsor>div>a:nth-child(2) {
            margin-left: 0px;
            margin-right: 0px;
        }
        .footer {
            padding-left: 11px;
            padding-right: 6px;
            background: #706445;
            height: 68px;
            margin-top: 80px;
        }
        .sochset>a>img {
            width: 20px;
            height: 21px;
            margin-top: 8px;
        }
        .sponsor {
            width: 200px;
        }
        .sponsor>h1 {
            font-size: 15px;
            line-height: 22px;
            margin-top: 4px;
            margin-bottom: 6px;
        }
        .sponsor>div {
            justify-content: space-around;
        }
        .sponsor>div>a>img {
            width: 90%;
            height: 90%;
            margin-left: auto;
            margin-right: auto;
        }
        .contact {
            font-size: 12px;
            line-height: 19px;
        }
        .contact>a:first-child {
            margin-top: 6px;
            margin-bottom: 0px;
        }
        .sponsor>div>a {
            opacity: 1;
        }
    }
</style>