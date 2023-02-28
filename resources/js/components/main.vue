<template>
    <div class="page" id="home-section">
        <!-- Preloader -->
        <div class="preloader">
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Started Background -->
        <div class="started-bg">
            <div id="particles-bg" class="slide" style="background-image: url(images/particles-bg.jpg);"></div>
        </div>

        <!-- Header -->
        <header>
            <div class="top-menu">
                <ul>
                    <li class="active">
                        <a class="btn_animated" href="#home-section"><span class="circle">Home</span></a>
                    </li>
                    <li>
                        <a class="btn_animated" href="#about-section"><span class="circle">About</span></a>
                    </li>
                    <li>
                        <a class="btn_animated" href="#skills-section"><span class="circle">Skills</span></a>
                    </li>
                    <li>
                        <a class="btn_animated" href="#experience-section"><span class="circle">Experience</span></a>
                    </li>
                    <li>
                        <a class="btn_animated" href="#service-section"><span class="circle">Services</span></a>
                    </li>
                </ul>
                <a href="#" class="menu-btn"><span></span></a>
            </div>
        </header>

        <div class="container">
            <div class="wrapper">
                <socialPage />
                <profilePage />
                <skillsPage />
                <experiencePage />
                <servicesPage />
            </div>
            <footerPage />
        </div>
    </div>
</template>

<script>
import footerPage from './pages/widgets/footer.vue'
import profilePage from './pages/profile/profile.vue'
import socialPage from './pages/profile/social.vue'
import skillsPage from './pages/profile/skills.vue'
import experiencePage from './pages/profile/experience.vue'
import servicesPage from './pages/profile/services.vue'

export default {
    components: {
        footerPage,
        socialPage,
        profilePage,
        skillsPage,
        experiencePage,
        servicesPage,
    },
}
</script>

