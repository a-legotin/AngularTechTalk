using FluentValidation.Attributes;
using PersonsWebService.ViewModels.Validations;

namespace PersonsWebService.ViewModels 
{
    [Validator(typeof(RegistrationViewModelValidator))]
    public class RegistrationViewModel 
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Location { get; set; }           
    }
}