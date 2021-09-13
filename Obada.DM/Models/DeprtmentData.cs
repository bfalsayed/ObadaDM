using System.Collections.Generic;
using DB.Models;

namespace Obada.DM.Models
{
    public class DepartmentData
    {
        public Department Department { get; set; }
        public List<Professor> Professors { get; set; }
        public List<Publication> Publications { get; set; }
        public List<Project> Projects { get; set; }
    }
}