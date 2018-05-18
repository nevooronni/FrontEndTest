<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">

            
            <form @submit.prevent="addSkill">
              <span class="form-group">
                <input type="text" placeholder="First Name*"  name="firstname" class="enter input">
                <input type="text" placeholder="Last Name*" name="lastname" class="enter">
              </span>
              <span class="form-group">
                <input type="text" placeholder="Phone Number*" name="phonenumber" class="enter input">
                <input type="text" placeholder="Email Address*" name="emailaddress" class="enter">
              </span>
              <span class="form-group2">
                <p class="text-left">*Indicates a required field</p>
                <button class="btn" type="submit" id="save">SAVE</button>
                <button type="button" class="btn-green" @click="close" aria-label="Close modal" id="cancel">CANCEL</button>
              </span>
            </form>
            
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 60%;
    margin-top: 7%;
    margin-left: 30%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 90px 79px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    float: right;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  .form-group {
    display: block;
    margin-bottom: 50px;

  }

  .form-group2 {
    display: block;
    margin-top: 185px;
  }

  .enter {
    color: grey;
    font-weight: bold;
    background-color: transparent;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: grey;
    border-radius: 0px;
    width: 210px;
  }

  .input {
    margin-right: 55px;
  }

  .text-left {
    color: grey;
    float: left;
  }

  #save {
    float: right;
    background-color:#0094FF;
    color: #fff;
    border-radius: 4px;
  }

  #save:hover {
    background-color: #fff;
    color: #0094FF;
    border-style: solid;
    border-color: #0094FF;
  }

  #cancel {
    float: right;
    background-color: transparent;
    color: grey;
    border-style: none;
    height: 38px;
    margin-right: 5px;
  }

  #cancel:hover {
    background-color: #0094FF;
    color: #fff;
  }
</style>