using System.Collections.Generic;
using DB.Models;

namespace Obada.DM.Models
{
    public class ProfessorData
    {
        public Professor Professor { get; set; }
        public List<Student> Students { get; set; }
        public Dictionary<string, List<Publication>> PublicationsTimeSeries { get; set; }
    }
}