using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2.Server.Models;

namespace task2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class supcervicesController : ControllerBase
    {
        private readonly MyDbContext _db;


        public supcervicesController(MyDbContext db)
        {
            _db = db;
        }
        [HttpGet("getsupservicesbyid/{id}")]
        public ActionResult getsupservicesbyid(int id) 
        {
            var service=_db.SubServices.Where(x=>x.ServiceId == id).ToList();
            return Ok(service);
        }

        [HttpGet("getservicesbyid/{id}")]
        public ActionResult getservicesbyid(int id)
        {
            var service = _db.SubServices.Where(x => x.SubServiceId == id).ToList();
            return Ok(service);
        }


        [HttpGet("getproductbyid/{id}")]
        public IActionResult getproductbyid(int id) 
        {
            var productdetalis=_db.SubServices.Where(x=>x.SubServiceId==id).ToList();
            return Ok(productdetalis);
        }
    }
}
