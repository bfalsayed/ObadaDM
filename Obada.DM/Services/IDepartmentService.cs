using System.Collections.Generic;
using DB.Models;

namespace Obada.DM.Services
{
    public interface IDepartmentService
    {
        List<Department> GetDepartments();
    }
}