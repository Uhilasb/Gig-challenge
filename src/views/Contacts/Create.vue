<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useNotyf } from "../../composable/useNotyf";
import Multiselect from "@vueform/multiselect";
import countries from 'country-list';
import { useContactStore } from '@/stores/contact';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import router from "@/router";

const store = useContactStore();
const route = useRoute();
const props = defineProps({
  id: Number,
})

const notif = useNotyf()
let newContact = reactive({
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  country: ""
});

const clearForm = () => {
  newContact.firstName = "";
  newContact.lastName  = "";
  newContact.email = "";
  newContact.country = "";
}
const submitContact = (id: number | null) => {
  v$.value.$touch();

  if(v$.value.$invalid){
    return;
  } 
  store.addContact(newContact, id);
  notif.success('Your contact is successfully added');
  clearForm();
  v$.value.$reset()
  router.push({ name: 'home' });
};

const validations = computed(() => {
  return {
      firstName: { 
        required: helpers.withMessage('First name is required', required) 
      },
      lastName: { 
        required: helpers.withMessage('Last name is required', required)
      }, 
      email:  { 
        required: helpers.withMessage('Email is required', required), 
        email
      },
      country: { 
        required: helpers.withMessage('Country is required', required)
      }
    }
})

const v$ = useVuelidate(validations, newContact)

onMounted(() => {
  if(newContact){
    newContact = Object.assign(newContact, store.getContact(+route.params.id))
  } else {
    return;
  }
})
</script>
<template>
  <div class="bg-[#F5F5F5] max-w-full h-screen flex justify-center">  
  <div class="flex justify-start w-[90%] m-auto bg-white max-w-lg rounded-3xl h-auto">
      <div
          class="flex flex-col justify-start items-center gap-6 w-full p-2"
      >
        <h1 class="font-semibold text-4xl pt-4">{{route.name === 'create' ? 'Add Contacts': 'Edit Contact'}}</h1>
        <div class="from-inputs w-full px-6 py-6 flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-4">
            <div :class="{ error: v$.firstName.$error }">
              <label class="input--label">First name</label>
              <input type="text" class="text--input w-full" v-model="newContact.firstName" required/>
              <div class="input-errors text-red-500" v-for="error of v$.firstName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div :class="{ error: v$.lastName.$error }">
              <label class="input--label">Last name</label>
              <input type="text" class="text--input w-full" v-model="newContact.lastName" required/>
              <div class="input-errors text-red-500" v-for="error of v$.lastName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="form-control" :class="{ error: v$.email.$error }">
            <label class="input--label">Email address</label>
            <input
                type="text"
                class="text--input w-full"
                v-model="newContact.email"
                required
            />
            <div class="input-errors text-red-500" v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
          </div>
          <div class="form-control" :class="{ error: v$.country.$error }">
            <label class="input--label">Country</label>
            <Multiselect track-by="value"  v-model="newContact.country"  :close-on-select="true"
             :options="countries.getNames()"  class="select--input"></Multiselect>
            <div class="input-errors text-red-500" v-for="error of v$.country.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
           </div>
          <div class="flex justify-start gap-6 mt-4">
            <button @click="clearForm()" class="btn-outlined text-base w-1/2" type="button">
               Cancel
            </button>
            <button @click="submitContact(newContact.id)" class="btn-filled text-base w-1/2" type="submit">
               Submit
            </button>
          </div>
        </div>
     </div>
  </div>
</div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
