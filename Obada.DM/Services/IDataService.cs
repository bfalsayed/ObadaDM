using System.Collections.Generic;
using System.Threading.Tasks;
using DB.Models;

namespace Obada.DM.Services
{
    public interface IDataService
    {
        Task<List<Department>> GetDepartmentsAsync();
        
        Task<List<Professor>> GetProfessorsAsync(IList<int> departmentIds);
        Task<List<Student>> GetProfessorsStudentsAsync(IList<int> professorIds);
        Task<List<Publication>> GetProfessorsPublicationsAsync(IList<int> professorIds);
        //Dictionary<string, List<Publication>> GeneratePublicationsTimeSeries(List<Publication> publications);
        Task<Dictionary<int, List<Publication>>> GetDepartmentsPublicationsAsync();
         Task<Dictionary<int, List<Professor>>> GetDepartmentsProfessorsAsync();
        Task<Dictionary<int, List<Project>>> GetDepartmentsProjectsAsync();
        
        
        //statistics 
        Task<Dictionary<string, List<Professor>>> GetProfessorsByGenderAsync();
        Task<Dictionary<string, List<Project>>> GetProjectsByResearchAreaAsync();
        
        //calender
        Task<Dictionary<string, List<Calendar>>> GetProfessorCalendersAsync();
    }
}