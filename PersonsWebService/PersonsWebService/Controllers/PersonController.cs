using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonsWebService.Classes;

namespace PersonsWebService.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        private IEnumerable<Person> persons;
        public PersonController()
        {
            var personsData = System.IO.File.ReadAllText("person_data.json");
            persons = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Person>>(personsData);
        }

        [HttpGet]
        public IEnumerable<Person> Get() => persons;

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}