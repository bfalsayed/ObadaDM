using System.Collections.Generic;
using System.Linq;
using DB.Models;

namespace DB.Repositories
{
    internal class DataRepository : IDataRepository
    {
        private readonly DmContext _context;

        public DataRepository(DmContext context)
        {
            _context = context;
        }

        public List<Calendar> GetCalenders()
        {
            return _context.Calenders.ToList();
        }
    }
}