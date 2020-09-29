using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmicorpPrjxs.Controllers
{
    public class EmpsController : ApiController
    {
        NagDbEntities db = new NagDbEntities();

        public IEnumerable<EmployeeTbl> Get()
        {
            return db.EmployeeTbls.ToList();
        }
        public EmployeeTbl Get(int id)
        {
            return db.EmployeeTbls.FirstOrDefault(p => p.EmpId == id);
        }
    }
}
