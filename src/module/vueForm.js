module.exports = {
    el: "body",
    data: {
        form: {
            email: "",
            pass: "",
            file: null,
            keep: "",
        }
    },
    components: {
        "my-form": {
            template: require("../tpl/form.html"),
            props: ['form', 'submit']
        }
    },
    methods: {
        submit: function() {
            var formData = new FormData();
            formData.append("file", document.getElementById('exampleInputFile').files[0]);
            formData.append("email", this.form.email);
            formData.append("pass", this.form.pass);
            formData.append("keep", this.form.keep);
            this.$http.post('./src/test.json', formData, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response) {

            }, function(response) {
                // handle error
            });
        }
    }
};
