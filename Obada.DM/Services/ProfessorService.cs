using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB;
using DB.Models;
using DB.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Obada.DM.Services
{
    public class ProfessorService : IProfessorService
    {
        private readonly IDataRepository _dataRepository;
        private readonly DmContext _context;

        public ProfessorService(IDataRepository dataRepository, DmContext context)
        {
            _dataRepository = dataRepository;
            _context = context;
        }
        
        public async Task<List<Professor>> GetProfessorsAsync(IList<int> departmentIds)
        {
            var query = _context.Professors
                .Include(professor => professor.Department);

            if (departmentIds != null && departmentIds.Any())
            {
                return await query.Where(professor => departmentIds.Contains(professor.DepartmentId)).ToListAsync();
            }
            return await query.ToListAsync();
        }
    }
}