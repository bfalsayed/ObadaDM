using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB;
using DB.Models;
using Microsoft.EntityFrameworkCore;

namespace Obada.DM.Services
{
    public class DataService : IDataService
    {
        private readonly DmContext _context;

        public DataService(DmContext context)
        {
            _context = context;
        }

        public async Task<List<Department>> GetDepartmentsAsync()
        {
            return await _context.Departments.ToListAsync();
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

        public async Task<List<Student>> GetProfessorsStudentsAsync(IList<int> professorIds)
        {
            var query = _context.Students;
            
            if (professorIds != null && professorIds.Any())
            {
                return await query.Where(student => professorIds.Contains(student.ProfessorId)).ToListAsync();
            }
            return await query.ToListAsync();
        }
        
        public async Task<List<Publication>> GetProfessorsPublicationsAsync(IList<int> professorIds)
        {
            var query = _context.Publications.Include(p => p.Professor);
            
            if (professorIds != null && professorIds.Any())
            {
                return await query.Where(publication => professorIds.Contains(publication.ProfessorId)).ToListAsync();
            }
            return await query.ToListAsync();
        }
        
        public async Task<Dictionary<int, List<Publication>>> GetDepartmentsPublicationsAsync()
        {
            var professorPublications = await GetProfessorsPublicationsAsync(null);
            return professorPublications
                    .GroupBy(professorPublication => professorPublication.Professor.DepartmentId)
                    .ToDictionary(group => group.Key, group => group.ToList());
        }
        
        public async Task<Dictionary<int, List<Professor>>> GetDepartmentsProfessorsAsync()
        {
            var professors = await GetProfessorsAsync(null);
            return professors
                .GroupBy(professor => professor.Department.Id)
                .ToDictionary(group => group.Key, group => group.ToList());
        }
        
        public async Task<Dictionary<int, List<Project>>> GetDepartmentsProjectsAsync()
        {
            var projects = await _context.Projects.ToListAsync();
            return projects
                .GroupBy(project => project.Professor.DepartmentId)
                .ToDictionary(group => group.Key, group => group.ToList());
        }
        
        public Dictionary<string, List<Publication>> GeneratePublicationsTimeSeries(List<Publication> publications)
        {
            var result = new Dictionary<string, List<Publication>>();

            foreach (var publication in publications)
            {
                if (result.TryGetValue(publication.PublicationDate.ToString("yyyy-MM-dd"), out var pubs))
                {
                    pubs.Add(publication);
                }
                else
                {
                    result.Add(publication.PublicationDate.ToString("yyyy-MM-dd"), new List<Publication>() { publication});
                }
            }

            return result;
        }
    }
}