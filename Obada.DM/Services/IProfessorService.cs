using System.Collections.Generic;
using System.Threading.Tasks;
using DB.Models;

namespace Obada.DM.Services
{
    public interface IProfessorService
    {
        Task<List<Professor>> GetProfessorsAsync(IList<int> departmentIds);
    }
}