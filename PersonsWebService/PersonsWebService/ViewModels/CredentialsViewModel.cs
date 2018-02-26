using FluentValidation.Attributes;
using PersonsWebService.ViewModels.Validations;

namespace PersonsWebService.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel  
    {
        public string UserName { get; set; }
        public string Password { get; set; }        
    }
}