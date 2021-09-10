using System.Collections.Generic;
using DB.Models;

namespace DB.Repositories
{
    public interface IDataRepository
    {
        List<Calendar> GetCalenders();
    }
}