using System.Collections.Generic;
using DB.Models;
using DB.Repositories;
using Microsoft.AspNetCore.Mvc;
using Obada.DM.Services;

namespace Obada.DM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DepartmentsController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;
        private readonly IDepartmentService _departmentService;

        public DepartmentsController(IDataRepository dataRepository, IDepartmentService departmentService)
        {
            _dataRepository = dataRepository;
            _departmentService = departmentService;
        }

        [HttpGet()]
        public IEnumerable<Department> GetDepartments()
        {
            return _departmentService.GetDepartments();
        }
    }
}