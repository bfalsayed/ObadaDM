using System.Collections.Generic;
using System.Threading.Tasks;
using DB.Models;
using DB.Repositories;
using Microsoft.AspNetCore.Mvc;
using Obada.DM.Services;

namespace Obada.DM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfessorsController : ControllerBase
    {
        private readonly IProfessorService _departmentService;

        public ProfessorsController(IProfessorService professorService)
        {
            _departmentService = professorService;
        }

        [HttpGet]
        public async Task<IList<Professor>> GetProfessors([FromQuery] List<int> departmentId)
        {
            return await _departmentService.GetProfessorsAsync(departmentId);
        }
    }
}