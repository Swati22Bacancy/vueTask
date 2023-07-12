<template>
    <div>
        <h2> {{title}}</h2>   
        <div class="container">
          <div class="half-width">
            <form>
              <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="resume.name" class="form-control">
              </div>
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="resume.email" class="form-control">
              </div>
              <div>
                <label for="phone">Phone:</label>
                <input type="text" id="phone" v-model="resume.phone" class="form-control">
              </div>
              <div>
                <label for="address">Address:</label>
                <input type="text" id="address" v-model="resume.address" class="form-control">
              </div>
              <div>
                <label for="profile">Profile:</label>
                <textarea rows="4" cols="50" id="profile" v-model="resume.profile" class="form-control"></textarea>
              </div>
              <div>
                <label for="education">Education:</label>
                <textarea rows="4" cols="50" id="education" v-model="resume.education" class="form-control"></textarea>
              </div>
              <div>
                <label for="experience">Experience:</label>
                <textarea rows="4" cols="50" id="experience" v-model="resume.experience" class="form-control"></textarea>
              </div>
              <div>
                <label for="skills">Skills:</label>
                <textarea rows="4" cols="50" id="skills" v-model="resume.skills" class="form-control"></textarea>
              </div>
              <div>
                <label for="languages">Languages:</label>
                <textarea rows="4" cols="50" id="languages" v-model="resume.languages" class="form-control"></textarea>
              </div>
            </form>
          </div>
          <div class="half-width">
            <p><b>Name:</b> {{ resume.name }}</p>
            <p><b>Email:</b> {{ resume.email }}</p>
            <p><b>Phone:</b> {{ resume.phone }}</p>
            <p><b>Address:</b> {{ resume.address }}</p>
            <p><b>Profile:</b> {{ resume.profile }}</p>
            <p><b>Education:</b> {{ resume.education }}</p>
            <p><b>Experience:</b> {{ resume.experience }}</p>
            <p><b>Skills:</b> {{ resume.skills }}</p>
            <p><b>Languages:</b> {{ resume.languages }}</p>
         </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Resume Builder (Task 6)',
        resume: 
          {
            name: "Swati Suthar",
            email: "swati.suthar@bacancy.com",
            phone: "8956234574",
            address: "Jaipur, Rajsthan",
            profile: "Sr. Software Engineer",
            education: "Masters",
            experience: "5 years",
            skills: "Coding, coding , coding ....",
            languages: "English, Hindi, Gujrati"
          },
        staticValue: "Hello, world!"
      };
    },
    mounted() {
      
    },
    methods: {
      
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }

  .half-width {
    width: 50%;
  }
  .form-control {
    display: block;
    width: 75%;
    height: calc(1.5em + 0.1rem);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 10px;
  }
  label{
    float: left;
    padding-right: 20px;
    padding-left: 20px;
  }
  </style>
  
  