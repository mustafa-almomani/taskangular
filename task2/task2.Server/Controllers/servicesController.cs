using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2.Server.Models;

namespace task2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class servicesController : ControllerBase
    {
        private readonly MyDbContext _db;


        public servicesController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public IActionResult Get() 
        {
            var services = _db.Services.ToList();
            return Ok(services);
        }
    }
}
