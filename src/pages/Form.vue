<script setup >
import axios from 'axios';
import { onMounted, ref } from 'vue';
   
    const name = ref()
    const delivery_options = ref()
    const delivery_period = ref()
    const cancelation_fee = ref()
    const payement_methods = ref()
    const best_products = ref()
    const phone_number = ref()
    const support_email = ref()
    const refund_policy = ref()
    const login_page = ref()
    const products_page =ref()
    const dashboard_page = ref()
    const infoChanged = ref(false)

    /*onMounted(()=>{
        axios.get(`${process.env.BASE_URL}/`).then((res)=>{
            console.log(res)
        })
    })*/
   const changeInfo = (e)=>{
    e.preventDefault();
    axios.post(`${process.env.BASE_URL}/`,{
        name : name,
        delivery_options : delivery_options,
        delivery_period : delivery_period,
        cancelation_fee : cancelation_fee,
        payement_methods : payement_methods,
        best_products : best_products,
        phone_number : phone_number,
        support_email : support_email,
        refund_policy : refund_policy,
        login_page : login_page,
        products_page : products_page,
        dashboard_page : dashboard_page,
    }).then(()=>{
        console.log(infoChanged)
    })
   }
</script>
<template >
    <form action="" class = 'w-9/12 border-solid border-grey border container '>
        <div class="bg-blue-950 p-4 text-white">
      <h2 class="text-center font-poppins font-semibold">Company Information</h2>
      <div class = 'bg-transparent p-1 rounded-xl border-solid border-white border w-48 text-center'>
        <RouterLink to = '/'>Talk with chatbot</RouterLink>
      </div>
    </div>
        <div class= 'flex justify-between gap-36 mb-4'>
            <div class = 'flex flex-col flex-1 '>
                <label for="" class = 'pl-2 mb-1'>Name</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'name' value = name>
            </div>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Phone number</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'phone_number'>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-4'>
            <div class = 'flex flex-col flex-1 '>
                <label for="" class = 'pl-2 mb-1'>Delivery options</label>
                <textarea type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'delivery_options'></textarea>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1 '>Delivery period</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'delivery_period'>
            </div>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Cancelion fee</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'cancelation_fee'>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Payemnet methods</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'payement_methods'>
            </div>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1 '>Support email</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'support_email'>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Best products</label>
                <textarea type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'best_products'></textarea>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Refund policy</label>
                <textarea type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'refund_policy'></textarea>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Login page</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'login_page'>
            </div>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1 '>Products Page</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'products_page'>
            </div>
        </div>
        <div class= 'flex justify-between gap-36 mb-2'>
            <div class = 'flex flex-col flex-1'>
                <label for="" class = 'pl-2 mb-1'>Dahsboard Page</label>
                <input type="text" class = 'bg-gray-200 rounded-md p-1 focus:outline-none' v-model = 'dashboard_page'>
            </div>
            <div class = 'flex-1'>
            </div>
        </div>
       <div class = 'flex justify-end '>
            <button class='bg-blue-950 text-white rounded-xl h-10 w-36' @click ='changeInfo' v-if='infoChanged == false'>
                Save
            </button>
            <div class = 'bg-blue-950 rounded-xl h-10 w-36 flex justify-center items-center' v-else >
                <div class = 'loader '></div>
            </div>
       </div>
    </form>
</template>
