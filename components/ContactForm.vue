<template>
    <div class="main-content contact-form px-10 py-17">
        <div class="mb-15">
            <p class="mb-0 fw-4 font-lg-35 font-sm-33  lh-45 white-text mt-0">Let’s Discuss Your Idea Now</p>
            <p class="mb-0 smoke-text font-lg-20 font-sm-18  lh-30 fw-3">Provide your email and we’ll get back to you ASAP!</p>
        </div>

        <a-form :model="formData" :rules="rules" ref="form" @submit.prevent="handleSubmit">
            <a-row :gutter="24">
                <a-col :lg="9"> <a-form-item label="First Name" name="firstName">
                        <a-input v-model="formData.firstName" placeholder="First Name" />
                    </a-form-item></a-col>
                <a-col :lg="9"><a-form-item label="Last Name" name="lastName">
                        <a-input v-model="formData.lastName" placeholder="Last Name" />
                    </a-form-item></a-col>
                <a-col :lg="9"><a-form-item label="Email" name="email">
                        <a-input v-model="formData.email" placeholder="Work Email" type="email" />
                    </a-form-item></a-col>
                <a-col :lg="9"><a-form-item label="Location" name="location">
                        <a-input v-model="formData.location" placeholder="Location" />
                    </a-form-item></a-col>
            </a-row>




            <a-button class="primary-btn bounce-button mt-10" type="submit">Let's Connect</a-button>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                location: ''
            },
            rules: {
                firstName: [{ required: true, message: 'Please input your first name!', trigger: 'blur' }],
                lastName: [{ required: true, message: 'Please input your last name!', trigger: 'blur' }],
                email: [
                    { required: true, message: 'Please input your email!', trigger: 'blur' },
                    { type: 'email', message: 'Please enter a valid email address!', trigger: ['blur', 'change'] }
                ],
                location: [{ required: true, message: 'Please input your location!', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log('Form submitted:', this.formData);
                } else {
                    console.log('Form validation failed');
                    return false;
                }
            });
        }
    }
};
</script>
