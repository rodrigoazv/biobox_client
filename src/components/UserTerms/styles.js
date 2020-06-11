import styled from 'styled-components';


export const Container = styled.button`
  
  .terms-container{
       color:blue;
       z-index:2000;
       position:fixed;
       top:0px;
       left:0px;
       display: none;
       margin: 0;
       width:100vw;
       height:100vh;
       background: rgba(0,0,0,0.5);
       justify-content:center;
       align-items:center;
  }
       
 .terms-container.self-show{
     display: flex;
 }
 .terms-box{
     background: white;
     color: black;
     width: 450px;
     height:550px;
     opacity:none;
     transition: all .5s,z-index 0ms;
     overflow-y: auto;
     font-family:Times;
     @media (max-width: 720px){
           width:350px;
           height:450px;
                    
        }
     
 }
 .terms-box p{
     text-align:left;
     padding-left:10%;;
    

 }
 
@keyframes termsAnimation{
    from{
        opacity:0;
        transform: translate3d(-70px, 0,0)
    }
    to{
        opacity:1;
        transform: translate3d(0,0,0)
    }
}
.self-show .terms-box{
    animation: termsAnimation  .4s;
}
.self-show .close-terms{
    animation: termsAnimation  .4s;
}

 .terms-box div{
     margin: 5%;
     justify-content:space-between;
 }
 
 
 .responsive-logo{
     width:200px;
 }
 .close-terms{
     width:50px;
     height:50px;
     color:white;
     border-radius: 5px;
     background:#FF7A00;
     border-color:#FF7A00;
     margin:2.5%;
     font-family:Patua One ;
     cursor:pointer;
 }

`;