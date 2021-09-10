using System.Collections.Generic;
using System.Linq;
using DB;
using DB.Models;
using DB.Repositories;

namespace Obada.DM.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IDataRepository _dataRepository;
        private readonly DmContext _context;

        public DepartmentService(IDataRepository dataRepository, DmContext context)
        {
            _dataRepository = dataRepository;
            _context = context;
        }
        
        public List<Department> GetDepartments()
        {
            return _context.Departments.ToList();
        }
    }
}