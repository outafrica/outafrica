<template>
    <div class="section about" id="about-section">
        <div class="content-box">
            <div class="row">
                <div class="col col-m-12 col-t-5 col-d-5">
                    <div class="info-list">
                        <ul>
                            <li><strong><span>Address:</span></strong> Nairobi, Kenya</li>
                            <li><strong><span>Phone:</span></strong> <a href="tel:+254700613065">+254 700
                                    613065</a></li>
                            <li><strong><span>E-mail:</span></strong> <a
                                    href="mailto:george.jarviz@gmail.com">george.jarviz@gmail.com</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="col col-m-12 col-t-7 col-d-7">
                    <div class="text-box">
                        <p>
                            As a highly skilled and successful leader with seven years comprehensive experience in software
                            development principles, I possess a wide range of
                            knowledge and skills that allow me to contribute toward the success of projects I
                            undertake. Throughout my career, I have been acknowledged as a solution-focused professional
                            with the ability to design and develop innovative applications using advanced technologies. I
                            have advanced proficiencies in <a style="color: #9C27B0;" href="https://laravel.com/"
                                target="_blank">
                                <u>Laravel(PHP)</u></a>, <a style="color: #9C27B0;" href="https://vuejs.org/"
                                target="_blank"><u>VueJs
                                </u></a>, <a style="color: #9C27B0;" href="https://tailwindcss.com/" target="_blank">
                                <u>TailwindCSS</u></a>,
                            <a style="color: #9C27B0;" href="https://flutter.dev/" target="_blank"><u>Flutter</u></a>, and
                            excellent customer service skills. I also have a solid foundation
                            in
                            MySQL, PostgreSQL, MongoDB, and Node.JS. My attention to detail, organizational skills and
                            strong communication abilities have allowed me to lead software development teams and ensure
                            the
                            success of each project assigned to me.
                        </p>
                        <p>
                            I possess a strong background in <strong style="color: #9C27B0;">(PHPUnit/Pest/Cypress/Mockito),
                                CI/CD (GithubActions/Jenkins), DigitalOcean/AWS,</strong> designing and developing APIs,
                            assuring cross-platform optimization, and collaborating with visual designers to implement UI
                            and UX elements as well as web design features. I am proficient in using various programming
                            tools necessary for development of dynamic applications or programs, dashboards, and data
                            management systems. I am experienced in managing cutting-edge technologies, educating and
                            leading internal teams, and following emerging technologies.
                        </p>
                    </div>
                    <div class="bts">
                        <button class="btn btn_animated" @click="downloadResume"><span class="circle">Download
                                CV/Resume</span></button>
                        <button class="btn btn_animated" @click="downloadCoverLetter"><span class="circle">Download
                                Cover Letter</span></button>
                        <a href="mailto:george.jarviz@gmail.com" class="btn extra contact-btn btn_animated">
                            <span class="circle">
                                Contact
                                Me</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        // handle resume download
        async downloadResume() {
            await this.callApi('post', '/download/resume');
        },
        // handle cover letter download
        async downloadCoverLetter() {
            await this.callApi('post', '/download/coverletter');
        }
    }
}

</script>
