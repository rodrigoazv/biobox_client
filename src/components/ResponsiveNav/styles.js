import styled from 'styled-components';


export const Container = styled.button`
  
  .nav-container{
       color:blue;
       z-index:2000;
       position:fixed;
       top:0px;
       left:0px;
       display: none;
       margin: 0;
       width:100vw;
       height:100vh;
       background: rgba(0,0,0,0.5)
  }
       
 .nav-container.self-show{
     display: flex;
 }
 .nav-box{
     background: white;
     color: black;
     width: 250px;
     height:100vh;;
     opacity:none;
     transition: all .5s,z-index 0ms;
     
 }
@keyframes navAnimation{
    from{
        opacity:0;
        transform: translate3d(-70px, 0,0)
    }
    to{
        opacity:1;
        transform: translate3d(0,0,0)
    }
}
.self-show .nav-box{
    animation: navAnimation  .4s;
}

 .nav-box div{
     margin: 5%;
     justify-content:space-between;
 }
 .responsive-menu li{
     font-size: 25px;
     margin:12%;
     border-bottom: 1px solid black;
 }
 .responsive-menu a{
     text-decoration:none;
     color:black;
 }
 .responsive-logo{
     width:200px;
 }
 .close-nav{
     width:50px;
     height:50px;
     color:white;
     background:#FF7A00;
     border-color:#FF7A00;
 }
`;