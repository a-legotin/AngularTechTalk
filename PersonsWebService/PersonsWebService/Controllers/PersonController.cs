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
            var personsData = System.IO.File.ReadAllText("data.json");
            persons = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Person>>(personsData);
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
                       return persons;
        }


        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
