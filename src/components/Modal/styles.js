import styled from 'styled-components';


export const Container = styled.button`
  
  .modal-container{
       color:blue;
       z-index:2000;
       position:fixed;
       top:0px;
       left:0px;
       display: none;
       margin: 0.5%;
 }
 .modal-container.self-show{
     display: flex;
 }
 .modal-box{
     background: lightgreen;
     width: 180px;
     height:70px;
     border-radius: 8px;
     
 }
@keyframes modalAnimation{
    from{
        opacity:0;
        transform: translate3d(-70px, 0,0)
    }
    to{
        opacity:1;
        transform: translate3d(0,0,0)
    }
}
.self-show .modal-box{
    animation: modalAnimation  .4s;
}

 .modal-box div{
     margin: 5%;
     justify-content:space-between;
 }
`;
