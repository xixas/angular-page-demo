export const configs = {
  registration: {
    "title": "User Registration",
    "api": {
      "url": "https://api.example.com/register",
      "method": "POST"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "First Name",
                  "name": "firstName",
                  "inputType": "text",
                  "value": "John",
                  "class": "form-control",
                  "styleClass": "custom-first-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "First Name Required"
                    },
                    {
                      "name": "minlength",
                      "validator": "minlength",
                      "value": 3,
                      "message": "Minimum 3 Characters Required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Last Name",
                  "name": "lastName",
                  "inputType": "text",
                  "value": "Doe",
                  "class": "form-control",
                  "styleClass": "custom-last-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Last Name Required"
                    },
                    {
                      "name": "minlength",
                      "validator": "minlength",
                      "value": 3,
                      "message": "Minimum 3 Characters Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Email",
                  "name": "email",
                  "inputType": "email",
                  "value": "john.doe@example.com",
                  "class": "form-control",
                  "styleClass": "custom-email",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Email Required"
                    },
                    {
                      "name": "pattern",
                      "validator": "pattern",
                      "value": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                      "message": "Invalid Email"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Password",
                  "name": "password",
                  "inputType": "password",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-password",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Password Required"
                    },
                    {
                      "name": "minlength",
                      "validator": "minlength",
                      "value": 6,
                      "message": "Minimum 6 Characters Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Gender",
                  "name": "gender",
                  "value": "male",
                  "class": "form-control",
                  "styleClass": "custom-gender",
                  "options": [
                    { "label": "Male", "value": "male" },
                    { "label": "Female", "value": "female" },
                    { "label": "Other", "value": "other" }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Gender Required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "checkbox",
                  "label": "Agree to Terms",
                  "name": "terms",
                  "value": true,
                  "class": "form-check-input",
                  "styleClass": "custom-terms",
                  "validations": [
                    {
                      "name": "requiredTrue",
                      "validator": "requiredTrue",
                      "message": "You must agree to the terms"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "radio",
                  "label": "Subscription",
                  "name": "subscription",
                  "value": "yearly",
                  "class": "form-check-input",
                  "styleClass": "custom-subscription",
                  "options": [
                    { "label": "Monthly", "value": "monthly" },
                    { "label": "Yearly", "value": "yearly" }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Subscription Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "range",
                  "label": "Age",
                  "name": "age",
                  "value": 25,
                  "min": 0,
                  "max": 100,
                  "class": "form-range",
                  "styleClass": "custom-age",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Age Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "date",
                  "label": "Birthdate",
                  "name": "birthdate",
                  "value": "1990-01-01",
                  "class": "form-control",
                  "styleClass": "custom-birthdate",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Birthdate Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "multiselect",
                  "label": "Hobbies",
                  "name": "hobbies",
                  "value": ["reading", "music"],
                  "class": "form-control",
                  "styleClass": "custom-hobbies",
                  "options": [
                    { "label": "Reading", "value": "reading" },
                    { "label": "Traveling", "value": "traveling" },
                    { "label": "Sports", "value": "sports" },
                    { "label": "Music", "value": "music" }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "At least one hobby is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "alignment": "right",
              "elements": [
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-primary",
                  "styleClass": "custom-submit"
                },
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning",
                  "styleClass": "custom-reset"
                },
                {
                  "type": "button",
                  "label": "Cancel",
                  "action": "cancel",
                  "class": "btn btn-secondary",
                  "styleClass": "custom-cancel"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  feedback: {
    "title": "Feedback Form",
    "api": {
      "url": "https://api.example.com/feedback",
      "method": "POST"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Name",
                  "name": "name",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Name Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Email",
                  "name": "email",
                  "inputType": "email",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-email",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Email Required"
                    },
                    {
                      "name": "pattern",
                      "validator": "pattern",
                      "value": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                      "message": "Invalid Email"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Feedback",
                  "name": "feedback",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-feedback",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Feedback Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "alignment": "right",
              "elements": [
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-primary",
                  "styleClass": "custom-submit"
                },
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning",
                  "styleClass": "custom-reset"
                },
                {
                  "type": "button",
                  "label": "Cancel",
                  "action": "cancel",
                  "class": "btn btn-secondary",
                  "styleClass": "custom-cancel"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  login: {
    "title": "Login Form",
    "api": {
      "url": "https://api.example.com/login",
      "method": "POST"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Username",
                  "name": "username",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-username",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Username Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Password",
                  "name": "password",
                  "inputType": "password",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-password",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Password Required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "alignment": "right",
              "elements": [
                {
                  "type": "button",
                  "label": "Login",
                  "action": "submit",
                  "class": "btn btn-primary",
                  "styleClass": "custom-login"
                },
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning",
                  "styleClass": "custom-reset"
                },
                {
                  "type": "button",
                  "label": "Cancel",
                  "action": "cancel",
                  "class": "btn btn-secondary",
                  "styleClass": "custom-cancel"
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
