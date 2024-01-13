<script setup lang="ts">
import type {INotification} from '~/types/types'

interface IProps {
  notification: INotification
}



defineProps<IProps>()
</script>




<template>
  <div class="notification">
    <div class="content">
      <div :class="['identifier', notification.success ? 'success' : 'error']"></div>
      <div :class="['text', notification.success ? 'success-text' : 'error-text']">{{ notification.message }}</div>
    </div>
  </div>
</template>


<style scoped lang="scss">

@mixin iconStyles {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-weight: bold;
}


.notification {
  height: 33px;
  width: 20%;
  background-color: #C1F7EE;
  margin-top: 1%;
  margin-left: 76%;
  transform-origin: right;
  -webkit-animation: notify 3s ease-in-out forwards;
  animation: notify 3s ease-in-out forwards;
}

@-webkit-keyframes notify {
  0% {transform: scaleX(0);}
  10% {transform: scaleX(1);}
  13% {transform: scale(1.1);}
  16% {transform: scale(1);}
  55% {transform: scaleX(1);}
  65% {transform: scaleX(1);}
  95% {transform: scaleX(1);}
  100% {transform: scaleX(0);}
}

@keyframes notify {
  0% {transform: scaleX(0);}
  10% {transform: scaleX(1);}
  13% {transform: scale(1.1);}
  16% {transform: scale(1);}
  55% {transform: scaleX(1);}
  65% {transform: scaleX(1);}
  95% {transform: scaleX(1);}
  100% {transform: scaleX(0);}
}

.identifier {
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #94DACD;
  margin-top: 5.5px;
  margin-left: 7.5px;

  -webkit-animation: exit 3s ease-in-out forwards;
  animation: exit 3s ease-in-out forwards;
}


.error::before {
  content: 'X';
  background-color: red;
  @include iconStyles()
}

.success::before {
  content: "\2713";
  background-color: green;
  @include iconStyles()

}

.text {
  position: absolute;
  margin-top: 8.25px;
  margin-left: 40px;
  font-weight: bold;
  -webkit-animation: exit 3s ease-in-out forwards;
  animation: exit 3s ease-in-out forwards;
}

.error-text {
  color: red;
}

.success-text {
  color: green;
}

@-webkit-keyframes exit {
  0% {opacity: 1;}
  55% {opacity: 1;}
  65% {opacity: 1;}  
  100% {opacity: 0;}
}

@keyframes exit {
  0% {opacity: 1;}
  55% {opacity: 1;}
  65% {opacity: 1;}  
  100% {opacity: 0;}
}
</style>