export default {
    data() {
        return {

        }
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {
                // Send a request
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                });

            } catch (error) {
                return error.response
            }

        },

        i(desc) {
            this.$toast.info({
                desc: desc
            });
        },
        s(desc) {
            this.$toast.success({
                desc: desc
            });
        },
        w(desc) {
            this.$toast.warning({
                desc: desc
            });
        },
        e(desc) {
            this.$toast.error({
                desc: desc
            });
        },
        d(desc = "Something went wrong! Please try again! ") {
            this.$toast.default({
                desc: desc
            });
        }

    },
}