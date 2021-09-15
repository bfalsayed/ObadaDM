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
            var professorIds = (await GetDepartmentsRecordsAsync(departmentIds))
                .Select(f => f.ProfessorId).ToHashSet();

            var professors = await _context.Professors.Where(p => professorIds.Contains(p.Id)).ToListAsync();
            return professors;
        }
        
        public async Task<List<Student>> GetProfessorsStudentsAsync(IList<int> professorIds)
        {
            var studentIds = (await GetProfessorRecordsAsync(professorIds))
                .Select(f => f.StudentId).ToHashSet();
            
            return await _context.Students.Where(student => studentIds.Contains(student.Id)).ToListAsync();
        }
        
        public async Task<List<Publication>> GetProfessorsPublicationsAsync(IList<int> professorIds)
        {
            var publicationIds = (await GetProfessorRecordsAsync(professorIds))
                .Select(f => f.PublicationId).ToHashSet();
            
            return await _context.Publications.Where(publication => publicationIds.Contains(publication.Id)).ToListAsync();
        }
        
        public async Task<Dictionary<int, List<Publication>>> GetDepartmentsPublicationsAsync()
        {
            var departmentsGroup = (await GetDepartmentsRecordsAsync(new List<int>()))
                .GroupBy(f => f.DepartmentId);

            var allPublications = await _context.Publications.ToListAsync();
            var result = new Dictionary<int, List<Publication>>();
            foreach (var departmentGroup in departmentsGroup)
            {
                var publicationIds = departmentGroup.Select(d => d.PublicationId).ToHashSet();
                var publications = allPublications
                    .Where(publication => publicationIds.Contains(publication.Id)).ToList();
                result.Add((int)departmentGroup.Key, publications);
            }

            return result;
        }
        
        public async Task<Dictionary<int, List<Professor>>> GetDepartmentsProfessorsAsync()
        {
            var departmentsGroup = (await GetDepartmentsRecordsAsync(new List<int>()))
                .GroupBy(f => f.DepartmentId);

            var allProfessors = await _context.Professors.ToListAsync();
            var result = new Dictionary<int, List<Professor>>();
            foreach (var departmentGroup in departmentsGroup)
            {
                var professorIds = departmentGroup.Select(d => d.ProfessorId).ToHashSet();
                var professors = allProfessors
                    .Where(publication => professorIds.Contains(publication.Id)).ToList();
                result.Add((int)departmentGroup.Key, professors);
            }

            return result;
        }
        
        public async Task<Dictionary<int, List<Project>>> GetDepartmentsProjectsAsync()
        {
            var departmentsGroup = (await GetDepartmentsRecordsAsync(new List<int>()))
                .GroupBy(f => f.DepartmentId);

            var allProjects = await _context.Projects.ToListAsync();
            var result = new Dictionary<int, List<Project>>();
            foreach (var departmentGroup in departmentsGroup)
            {
                var projectIds = departmentGroup.Select(d => d.ProjectId).ToHashSet();
                var projects = allProjects
                    .Where(publication => projectIds.Contains(publication.Id)).ToList();
                result.Add((int)departmentGroup.Key, projects);
            }

            return result;
        }

        public async Task<Dictionary<string, List<Professor>>> GetProfessorsByGenderAsync()
        {
            return (await _context.Professors.ToListAsync()).GroupBy(professor => professor.Gender)
                .ToDictionary(t => t.Key, t => t.ToList());
        }

        public async Task<Dictionary<string, List<Project>>> GetProjectsByResearchAreaAsync()
        {
            var researchAreaRecords = await GetResearchAreaRecordsAsync(new List<int>());

            var allAreas = await _context.ResearchAreas.ToListAsync();
            var areasGroupedByNameDictionary = 
                allAreas.GroupBy(a => a.Title)
                    .ToDictionary(t => t.Key, t => t.Select(l => l.Id).ToList());

            var allProjects = await _context.Projects.ToListAsync();
            
            var result = new Dictionary<string, List<Project>>();
            foreach (var areaGroup in areasGroupedByNameDictionary)
            {
                var groupIds = areaGroup.Value.ToList();
                var projectIds = researchAreaRecords
                    .Where(record => groupIds.Contains((int) record.AreaId))
                    .Select(record => record.ProjectId)
                    .ToList();
                
                //var projectIds = areaGroup.Select(d => d.ProjectId).ToHashSet();
                var projects = allProjects
                    .Where(project => projectIds.Contains(project.Id)).ToList();
                
                result.Add(areaGroup.Key, projects);
            }

            return result;
        }

        public async Task<Dictionary<string, List<Calendar>>> GetProfessorCalendersAsync()
        {
            var professorCalenderIds = (await GetProfessorRecordsAsync(new List<int>()))
                .GroupBy(p => p.ProfessorId)
                .ToDictionary(t => (int)t.Key, t => 
                    t.ToList());


            var allProfessors = await _context.Professors.ToListAsync();
            var allCalenders = await _context.Calenders.ToListAsync();
            
            var result = new Dictionary<string, List<Calendar>>();
            foreach (var professorCalenderId in professorCalenderIds)
            {
                var professor = allProfessors.FirstOrDefault(t => t.Id == professorCalenderId.Key);
                var calenderIds = professorCalenderId.Value.Select(t => t.ItemId).ToList();
                var calenders = allCalenders.Where(c => calenderIds.Contains(c.ItemId)).ToList();
                result.Add(professor.FirstName + " " + professor.LastName, calenders);
            }

            return result;
        }

        // public Dictionary<string, List<Publication>> GeneratePublicationsTimeSeries(List<Publication> publications)
        // {
        //     var result = new Dictionary<string, List<Publication>>();
        //
        //     foreach (var publication in publications)
        //     {
        //         if (result.TryGetValue(publication.PublicationDate.ToString("yyyy-MM-dd"), out var pubs))
        //         {
        //             pubs.Add(publication);
        //         }
        //         else
        //         {
        //             result.Add(publication.PublicationDate.ToString("yyyy-MM-dd"), new List<Publication>() { publication});
        //         }
        //     }
        //
        //     return result;
        // }
        //
        
        private async Task<List<ResearchFact>> GetProfessorRecordsAsync(IList<int> professorIds)
        {
            var query = _context.ResearchFact.Where(fact => fact.ProfessorId != null);

            if (professorIds != null && professorIds.Any())
            {
                return await query.Where(fact => professorIds.Contains((int)fact.ProfessorId)).ToListAsync();
            }

            return await query.ToListAsync();
        }
        
        private async Task<List<ResearchFact>> GetDepartmentsRecordsAsync(IList<int> departmentIds)
        {
            var query = _context.ResearchFact.Where(fact => fact.DepartmentId != null);

            if (departmentIds != null && departmentIds.Any())
            {
                return await query.Where(fact => departmentIds.Contains((int)fact.DepartmentId)).ToListAsync();
            }

            return await query.ToListAsync();
        }
        
        private async Task<List<ResearchFact>> GetResearchAreaRecordsAsync(IList<int> ids)
        {
            var query = _context.ResearchFact.Where(fact => fact.AreaId != null);

            if (ids != null && ids.Any())
            {
                return await query.Where(fact => ids.Contains((int)fact.AreaId)).ToListAsync();
            }

            return await query.ToListAsync();
        }
    }
}