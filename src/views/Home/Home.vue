<script setup lang="ts">
import { useContactStore } from '@/stores/contact';
import { useNotyf } from "../../composable/useNotyf";

const store = useContactStore()
const notif = useNotyf()

const deleteContact = (id: number) => {
  store.deleteContact(id);
  notif.success('Your contact has been deleted')
}
</script>


<template>
  <div class="flex flex-col w-full rounded-md h-screen pt-12 container">
  <div class="flex justify-between items-center">
    <h1 class="font-bold text-xl lg:text-3xl my-4 text-start">My contact list</h1>
    <router-link class="text-lg text-white btn-outlined p-1" :to="{ name: 'create'}">Add Contact</router-link> 
  </div>
  <div class="overflow-x-auto bg-white rounded-lg">
    <div class="py-2 inline-block min-w-full">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email Address
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Country
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact,idx) in store.getContacts"
              :key="idx" class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{idx+ 1}}</td>
              <td class="text-[#A4A4A4] text-sm px-6 py-4 whitespace-nowrap">
                {{contact.firstName}}
              </td>
              <td class="text-[#A4A4A4] text-sm px-6 py-4 whitespace-nowrap">
                {{contact.lastName}}
              </td>
              <td class="text-[#A4A4A4] text-sm px-6 py-4 whitespace-nowrap">
                {{contact.email}}
              </td>
              <td class="text-[#A4A4A4] text-sm px-6 py-4 whitespace-nowrap">
                {{contact.country}}
              </td>
              <td class="text-[#A4A4A4] text-sm px-6 py-4 whitespace-nowrap">
                <div class="col-span-2 flex items-center">
                 <div class="flex justify-between gap-6">
                  <router-link :to="{ name: 'edit', params: { id:contact.id }}"><img src="@/assets/icons/editIcon.svg" /></router-link>
                  <img @click="deleteContact(idx)" src="@/assets/icons/deleteIcon.svg" class="cursor-pointer" />
                 </div>
                </div>
              </td>
              
            </tr>
            <tr v-if="store.getContacts.length === 0">
              <td colspan="6" class=" text-[#A4A4A4] text-lg px-6 py-4 whitespace-nowrap text-center">
                No available contacts
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

